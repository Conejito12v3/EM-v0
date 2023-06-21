import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid, TextField, Button } from "@material-ui/core";
import { registrarUsuario } from "../../Actions/usuarioAction";

const style = {
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: 20
    },
    submit: { 
        marginTop: 15,
        backgroundColor: "black",
        color: "white"
    }
};

const RegistrarseComponent = () => {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState();
    const [ErrorContrasena, setErrorContrasena] = useState();
    const [validarNombre, setValidarNombre] = useState(false);
    const [validarEmail, setValidarEmail] = useState(false);
    const [validarUsername, setValidarUsername] = useState(false);
    const [validarPassword, setValidarPassword] = useState(false);
    const [validarConfirmarPassword, setValidarConfirmarPassword] = useState(false);
    const [usuario, setUsuario] = useState({
        NombreCompleto: '',
        Email: '',
        Password: '',
        ConfirmarPassword: '',
        Username: ''
    })
    
    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name]: value
        }));
    }

    const registrarUsuarioAction = e => {
        e.preventDefault();
        var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (usuario.Password === usuario.ConfirmarPassword && usuario.Password !== '' && usuario.ConfirmarPassword !== '' && usuario.NombreCompleto !== '' && usuario.Email !== '' && usuario.Username !== '') {
            const usuarioD = {
                nombre: usuario.NombreCompleto,
                email: usuario.Email,
                password: usuario.Password,
                username: usuario.Username
            }

            console.log(usuarioD);

            registrarUsuario(usuarioD).then(response => {
                if (response.status === 200)
                {
                    console.log(response);
                    window.localStorage.setItem('token_seguridad', response.data.token);
                    navigate('/');
                }
                else 
                {
                    if (response.data.errores.mensaje) 
                    {
                        console.log(response.data)
                        alert(response.data.errores.mensaje);
                    } else {
                        console.log(response.data)
                        alert(response.data.errores);
                    }
                }
            }).catch(error => {
                alert("La contraseña debe tener numeros y caracteres especiales")
                setErrorContrasena("La contraseña debe tener numeros y caracteres especiales");
            });
        }
        else{
            if (usuario.Password !== usuario.ConfirmarPassword) {
                setErrorContrasena("Las contraseñas no coinciden");
            }

            if (usuario.NombreCompleto === '') {
                setValidarNombre(true);
            }

            if (usuario.Email === ''){
                setValidarEmail(true);
                setMensaje("El email es requerido");
            }
            else if (!emailValido.test(usuario.Email)){
                setValidarEmail(true);
                setMensaje("El email no es válido");
            }

            if (usuario.Username === ''){
                setValidarUsername(true);
            }

            if (usuario.Password === '') {
                setValidarPassword(true);
            }

            if (usuario.ConfirmarPassword === '') {
                setValidarConfirmarPassword(true);
            }
        }
    }

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField name="NombreCompleto" value={usuario.NombreCompleto} onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese su nombre completo" required helperText={validarNombre ? "Nombre completo requerido" : ""} error={validarNombre}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese su email" required helperText={validarEmail ? mensaje : ""} error={validarEmail} type="email" id="Email"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="Username" value={usuario.Username} onChange={ingresarValoresMemoria} variant="standard" fullWidth label="Ingrese su username" required helperText={validarUsername ? "El username es requerido" : ""} error={validarUsername}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="Password" value={usuario.Password} onChange={ingresarValoresMemoria} type="password" variant="standard" fullWidth label="Ingrese su contraseña" required helperText={validarPassword ? ErrorContrasena : ""} error={validarPassword}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="ConfirmarPassword" value={usuario.ConfirmarPassword} onChange={ingresarValoresMemoria} type="password" variant="standard" fullWidth label="Confirme su contraseña" required helperText={validarConfirmarPassword ? "Confirme su contraseña " : ""} error={validarConfirmarPassword}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Button onClick={registrarUsuarioAction} fullWidth variant="contained" size="large" style={style.submit} type="submit">
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarseComponent;