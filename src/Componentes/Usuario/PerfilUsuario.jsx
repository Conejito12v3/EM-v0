import React, { useState, useEffect } from 'react'
import { actualizarUsuario, obtenerUsuarioActual } from '../../Actions/usuarioAction';
import { useStateValue } from '../../Context/store';
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

const PerfilUsuario = () => {
  const [{sesionUsuario}, dispatch] = useStateValue();
  const [mensaje, setMensaje] = useState();
  const [ErrorContrasena, setErrorContrasena] = useState();
  const [validarNombre, setValidarNombre] = useState(false);
  const [validarEmail, setValidarEmail] = useState(false);
  const [validarUsername, setValidarUsername] = useState(false);
  const [validarPassword, setValidarPassword] = useState(false);
  const [validarConfirmarPassword, setValidarConfirmarPassword] = useState(false);
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  useEffect(() => {
    obtenerUsuarioActual(dispatch).then(response => {
      console.log('Respuesta:', response.data);
      setNombre(response.data.nombreCompleto);
      setEmail(response.data.email);
      setUsername(response.data.userName);
    });
  }, []);

  const editarUsuario = (e) => {
    e.preventDefault();
    
    if (nombre.trim === '') {
      setValidarNombre(true);
    }

    if (email.trim === '') {
      setValidarEmail(true);
    }	

    if (username.trim === '') {
      setValidarUsername(true);
    }

    if (password.trim === '') {
      setValidarPassword(true);
      setMensaje("Campo requerido");
    }

    if (confirmarPassword.trim === '') {
      setValidarConfirmarPassword(true);
    }

    if (password.trim !== confirmarPassword.trim)
    {
      setValidarConfirmarPassword(true);
      setValidarPassword(true);
      setMensaje("Las contraseñas no coinciden");
      return
    }

    if (nombre === '' || email === '' || username === '' || password === '' || confirmarPassword === '') {
      return;
    }

    let usuario = {
      NombreCompleto: nombre,
      Email: email,
      Username: username,
      Password: password
    }

    actualizarUsuario(usuario).then(response => {
      if(response.status === 200)
      {
        alert('Actualizado con exito');
        // Refrescamos la pagina
        window.location.reload();
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
    })
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
                        <TextField name="NombreCompleto" value={nombre} onChange={e => {setNombre(e.target.value)}} variant="standard" fullWidth label="Ingrese su nombre completo" required helperText={validarNombre ? "Nombre completo requerido" : ""} error={validarNombre}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="Email" value={email} onChange={e => {setEmail(e.target.value)}} variant="standard" fullWidth label="Ingrese su email" required helperText={validarEmail ? mensaje : ""} error={validarEmail} type="email" id="Email"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="Username" value={username} onChange={e => {setUsername(e.target.value)}} variant="standard" fullWidth label="Ingrese su username" required helperText={validarUsername ? "El username es requerido" : ""} error={validarUsername}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="Password" value={password} onChange={e => {setPassword(e.target.value)}} type="password" variant="standard" fullWidth label="Ingrese su contraseña" required helperText={validarPassword ? ErrorContrasena : ""} error={validarPassword}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="ConfirmarPassword" value={confirmarPassword} onChange={e => {setConfirmarPassword(e.target.value)}} type="password" variant="standard" fullWidth label="Confirme su contraseña" required helperText={validarConfirmarPassword ? "Confirme su contraseña " : ""} error={validarConfirmarPassword}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Button fullWidth variant="contained" onClick={editarUsuario} size="large" style={style.submit} type="submit">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
  )
}

export default PerfilUsuario