import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { actualizarEventos, obtenerEventoPorId } from '../../../Actions/eventoAction';
import reactFoto from '../../../logo.svg';
import { makeStyles, Grid, TextField, Button, Avatar } from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import { v4 as uuidv4 } from 'uuid';
import { obtenerDataImagen } from '../../../Actions/ImagenAction';
import NavegacionE from '../navegacionE';

const useStyles = makeStyles((tema) => ({
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '1rem',
  },
  formulario: {
      padding: '1rem',
      width: '60%',
  },
  checkBoxContainer: {
      display: 'flex',
      paddingTop: '12px',
  },
  inputRSContainer: {
      paddingLeft: '50px',
  },
  avatar: {
      margin: 5,
      backgroundColor: "#1976d2",
      width: 80,
      height: 80
  },
}));


const EditarEComponent = () => {
  const styles = useStyles();
  const location = useLocation();
  const [EventoId, setEventoId] = useState();

  const [validarNombre, setValidarNombre] = useState(false);
  const [validarAE, setValidarAE] = useState(false);
  const [validarA, setValidarA] = useState(false);
  const [validarFecha, setValidarFecha] = useState(false);
  const [validarImagen, setValidarImagen] = useState(false);

  const [nombre, setNombre] = useState('');
  const [asistentesE, setAsistentesE] = useState('');
  const [asistentes, setAsistentes] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState(null);
  const [fotoUrl, setFotoUrl] = useState('');

  useEffect(() => {
    console.log(location.pathname.split('/'));
    setEventoId(location.pathname.split('/')[3]);

    console.log(EventoId);

    obtenerEventoPorId(EventoId).then(response => {
      if (response.data.imagenEvento) {
        const newFile = `data:image/png;base64,${response.data.imagenEvento}`;
        setFotoUrl(newFile);
      }

      const fecha = response.data.fecha.split('T')[0];
      setNombre(response.data.nombre);
      setAsistentesE(response.data.asistentesEsperados);
      setAsistentes(response.data.asistentes);
      setFecha(response.data.fecha.split('T')[0]);
      setImagen(response.data.imagenEvento);
    });
  }, [EventoId]);

  const subirFoto = (imagenes) => {
    const ft = imagenes[0];
    const ftUrl = URL.createObjectURL(ft);

    obtenerDataImagen(ft).then(response => {
      setImagen(response.Data);
      setFotoUrl(ftUrl);
    })

    console.log(imagen);
  }

  const actualizarEventoAction = () => {
    if(nombre.trim === '') {
      setValidarNombre(true);
      console.log("nombre vacio");
      return;
    }

    if(asistentesE.trim === '') {
      console.log("asistentesE vacio");
      setValidarAE(true);
      return;
    }

    if(asistentes.trim === '') {
      console.log("asistentes vacio");
      setValidarA(true);
      return;
    }

    if(fecha.trim === '') {
      console.log("fecha vacio");
      setValidarFecha(true);
      return;
    }

    const evento = {
      nombre: nombre,
      asistentesEsperados: asistentesE,
      asistentes: asistentes,
      fecha: fecha,
      imagenEvento: imagen
    }

    console.log(evento);

    actualizarEventos(EventoId, evento).then(response => {
      if(response.status === 200) {
        alert('Evento actualizado correctamente');
        setNombre('');
        setAsistentesE('');
        setAsistentes('');
        setFecha('');
      }
    });
  }

  const fotoKey = uuidv4();

  return (
    <div>
        <NavegacionE />
        <div className={styles.container}>
            <div className="registrarProductorContainer">
                <Avatar className={styles.avatar} src={fotoUrl ||reactFoto} />
                <h3>Agregar Evento: </h3>
                <form className={styles.formulario}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <TextField 
                                name='nombre'
                                value={nombre}
                                onChange={(e) => {setNombre(e.target.value); setValidarNombre(false)}}
                                fullWidth
                                variant='standard'
                                label='Nombre'
                                error={validarNombre}
                                helperText={validarNombre ? 'El nombre es obligatorio' : ''}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                name='asistentesE'
                                value={asistentesE}
                                onChange={(e) => {setAsistentesE(e.target.value); setValidarAE(false)}}
                                fullWidth
                                variant='standard'
                                label='Asistentes esperados'
                                error={validarAE}
                                helperText={validarAE ? 'Este campo es obligatorio' : ''}
                                type='number'
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                name='asistentes'
                                value={asistentes}
                                onChange={(e) => {setAsistentes(e.target.value); setValidarA(false)}}
                                fullWidth
                                variant='standard'
                                label='Asistentes'
                                error={validarA}
                                helperText={validarA ? 'Este campo es obligatorio' : ''}
                                type='number'
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField 
                                name='asistentes'
                                value={fecha}
                                onChange={(e) => {setFecha(e.target.value); setValidarFecha(false)}}
                                fullWidth
                                variant='standard'
                                label='Fecha del evento'
                                error={validarFecha}
                                helperText={validarFecha ? 'Este campo es obligatorio' : ''}
                                type='date'
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ImageUploader 
                                withIcon={false}
                                key={fotoKey}
                                singleImage={true}
                                buttonText="Seleccione una imagen de perfil"
                                onChange={subirFoto}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Button fullWidth variant="contained" size="large" onClick={actualizarEventoAction} >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditarEComponent