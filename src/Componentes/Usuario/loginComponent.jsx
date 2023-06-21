import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { cambiarPassword, enviarCodigo, loginUsuario } from '../../Actions/usuarioAction.js';
import { useStateValue } from '../../Context/store';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

const style = {
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "125px",
        marginBottom: "180px"
    },
    form: {
        width: "100%",
        marginTop: 20,
        marginBottom: 20
    },
    submit: { 
        marginTop: 15,
        backgroundColor: "black",
        color: "white"
    },
    avatar: {
        margin: 5,
        backgroundColor: "black",
        width: 80,
        height: 80
    },
    icon: {
        fontSize: 40,
    },
    olvidasteLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px"
    }
};

const LoginComponent = () => {
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modalPassword, setModalPassword] = useState(false);
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [codigoIngresado, setCodigoIngresado] = useState('');
    const [validarCodigoIngresado, setValidarCodigoIngresado] = useState(false);
    const [validarCorre, setValidarCorreo] = useState(false);
    const [validarPassword, setValidarPassword] = useState(false);
    const [validarPasswordNueva, setValidarPasswordNueva] = useState(false);
    const [validarPasswordNuevaC, setValidarPasswordNuevaC] = useState(false);
    const [passwordNueva, setPasswordNueva] = useState('');
    const [passwordNuevaC, setPasswordNuevaC] = useState('');
    const [usuario, setUsuario] = useState({
        Email: '',
        Password: ''
    });

    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name]: value
        }));
    }

    const enviarCodigoAction = e => {
        const codigoS = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        setCodigo(codigoS);

        let codigoE = {
            correo: usuario.Email,
            cuerpo: 'Su codigo de recuperacion es: ' + codigoS
        }
        
        enviarCodigo(codigoE).then(response => {
            setCodigoEnviado(true);
        })

        console.log(codigo);
    }

    const iniciarSesion = e => {
        e.preventDefault();

        if (usuario.Email === '') {
            setValidarCorreo(true);
        }

        if (usuario.Password === '') {
            setValidarPassword(true);
        }

        if (usuario.Email === '' || usuario.Password === '') {
            return;
        }

        loginUsuario(usuario, dispatch).then(response => {
            if(response.status === 200) {    
                window.localStorage.setItem('token_seguridad', response.data.token);
                console.log('Usuario logueado');
                navigate('/perfil');
            } else {
                console.log('Usuario o contraseña incorrectos');
            }
        }).catch(err =>{
            console.log(err);
        });
    }

    const comprobarCodigo = () => {
        if(codigoIngresado == codigo) {
            setModal(false);
            setModalPassword(true);
        }
    }

    const cambiarPasswordAction = () => {
        if (passwordNuevaC === '') {
            setValidarPasswordNuevaC(true);
        }

        if (passwordNueva === '') {
            setValidarPasswordNueva(true);
        }

        if (passwordNueva !== passwordNuevaC) {
            alert('Las contraseñas no coinciden');
        }

        if (passwordNueva === '' || passwordNuevaC === '' || passwordNueva !== passwordNuevaC) {
            return;
        }

        const parametros = {
            Password: passwordNueva,
            Email: usuario.Email
        }

        cambiarPassword(parametros).then(response => {
            console.log('Contraseña cambiada');
            setModalPassword(false);
            alert('Contraseña cambiada con exito');
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <Container maxWidth="xs">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutlinedIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login de Usuario
                </Typography>
                <form style={style.form}>
                    <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria}  variant="outlined" label="Ingrese su email" fullWidth margin="normal" required helperText={validarCorre ? "Campo requerido" : ""} error={validarCorre} />
                    <TextField name="Password" value={usuario.Password} onChange={ingresarValoresMemoria} variant="outlined" label="Ingrese su password" type="password" fullWidth margin="normal" required helperText={validarPassword ? "Campo requerido" : ""} error={validarPassword} />
                    <Button type="submit" onClick={iniciarSesion} fullWidth variant="contained" style={style.submit} >
                        Enviar
                    </Button>
                </form>
                <div className={style.olvidasteLink}>
                    <a href="#" onClick={e => setModal(!modal)}>Olvidaste tu contraseña</a>
                </div>

                <Modal isOpen={modal} >
                    <ModalHeader>
                        Recuperar Contraseña
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="usuario">Usuario</Label>
                            <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria}  variant="outlined" label="Ingrese su email" fullWidth margin="normal" required helperText={validarCorre ? "Campo requerido" : ""} error={validarCorre} />
                        </FormGroup>
                        {
                            codigoEnviado ? (
                                <div>
                                    <TextField name="Email" value={codigoIngresado} onChange={e => {setCodigoIngresado(e.target.value)}}  variant="outlined" label="Ingrese el codigo de verificacion" fullWidth margin="normal" required helperText={validarCodigoIngresado ? "Campo requerido" : ""} error={validarCodigoIngresado} />
                                    <Button type="submit" onClick={comprobarCodigo} fullWidth variant="contained" style={style.submit} >
                                        Comprobar codigo
                                    </Button>
                                </div>
                            ) : (
                                <Button type="submit" onClick={enviarCodigoAction} fullWidth variant="contained" style={style.submit} >
                                    Enviar codigo de confirmacion
                                </Button>
                            )
                        }
                        <Button type="submit" onClick={e => {setModal(false); setCodigoEnviado(false)}} fullWidth variant="contained" style={style.submit} >
                            Cerrar
                        </Button>
                    </ModalBody>
                </Modal>

                <Modal isOpen={modalPassword} >
                    <ModalHeader>
                        Nueva contraseña:
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="usuario">Contraseña:</Label>
                            <TextField name="Password" value={passwordNueva} onChange={(e) => {setPasswordNueva(e.target.value)}}  variant="outlined" label="Ingrese la nueva contraseña" fullWidth margin="normal" type='password' required helperText={validarPasswordNueva ? "Campo requerido" : ""} error={validarPasswordNueva} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="usuario">Comporbar contraseña:</Label>
                            <TextField name="Password" value={passwordNuevaC} onChange={(e) => {setPasswordNuevaC(e.target.value)}}  variant="outlined" label="Ingrese la nueva contraseña" fullWidth margin="normal" type='password' required helperText={validarPasswordNuevaC ? "Campo requerido" : ""} error={validarPasswordNuevaC} />
                        </FormGroup>
                        <Button type="submit" onClick={cambiarPasswordAction} fullWidth variant="contained" style={style.submit} >
                            Cambiar contraseña
                        </Button>
                        <Button type="submit" onClick={e => {setModalPassword(false);}} fullWidth variant="contained" style={style.submit} >
                            Cerrar
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
        </Container>
    )
}

export default LoginComponent;