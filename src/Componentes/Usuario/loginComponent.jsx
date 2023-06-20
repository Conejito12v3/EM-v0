import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { loginUsuario } from '../../Actions/usuarioAction.js';
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
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    const [codigo, setCodigo] = useState('');
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

    const iniciarSesion = e => {
        e.preventDefault();
        loginUsuario(usuario, dispatch).then(response => {
            if(response.status === 200) {    
                window.localStorage.setItem('token_seguridad', response.data.token);
                console.log('Usuario logueado');
                navigate('/perfil');
            } else {
                console.log('Usuario o contraseña incorrectos');
            }
        }).catch(err =>{
            
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
                    <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria}  variant="outlined" label="Ingrese su email" fullWidth margin="normal" />
                    <TextField name="Password" value={usuario.Password} onChange={ingresarValoresMemoria} variant="outlined" label="Ingrese su password" type="password" fullWidth margin="normal" />
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
                            <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria}  variant="outlined" label="Ingrese su email" fullWidth margin="normal" />
                        </FormGroup>
                        <Button type="submit" onClick={e => {setCodigoEnviado(true)}} fullWidth variant="contained" style={style.submit} >
                            Enviar codigo de confirmacion
                        </Button>
                        <Button type="submit" onClick={e => {setModal(false); setCodigoEnviado(false)}} fullWidth variant="contained" style={style.submit} >
                            Cerrar
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
        </Container>
    )
}

export default LoginComponent;