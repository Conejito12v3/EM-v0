import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavegacionP from '../NavegacionP';
import { actualizarProductor, obtenerProductorPorId } from '../../../Actions/productorAction';
import { editarRS, obtenerRSPorId } from '../../../Actions/rsAction';
import { makeStyles, Grid, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';

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
    }
  }));
  

function EditarProductor() {
  const styles = useStyles();
  const [idProductor, setIdProductor] = useState();
  const [idRedesSociales, setIdRedesSociales] = useState('');
  const location = useLocation();

  const [validarNombre, setValidarNombre] = useState(false);
  const [validarFace, setValidarFace] = useState(false);
  const [validarInsta, setValidarInsta] = useState(false);
  const [validarTwitter, setValidarTwitter] = useState(false);
  const [validarYoutube, setValidarYoutube] = useState(false);
  const [validarTiktok, setValidarTiktok] = useState(false);

  const [agregarFacebook, setAgregarFacebook] = React.useState(false);
  const [agregarInsta, setAgregarInsta] = React.useState(false);
  const [agregarTwitter, setAgregarTwitter] = React.useState(false);
  const [agregarYoutube, setAgregarYoutube] = React.useState(false);
  const [agregarTiktok, setAgregarTiktok] = React.useState(false);
  
  const [facebook, setFacebook] = useState('');
  const [insta, setInsta] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [productor, setProductor] = useState('');

  useEffect(() => {
    setIdProductor(location.pathname.split('/')[2]);

    obtenerProductorPorId(idProductor).then(response => {
        setProductor(response.data.nombre);

        obtenerRSPorId(response.data.redesSocialesId).then(response => {
            setIdRedesSociales(response.data.redesSocialesId);
            setFacebook(response.data.facebook);
            setInsta(response.data.instagram);
            setTwitter(response.data.twitter);
            setYoutube(response.data.youtube);
            setTiktok(response.data.tiktok);
        });
    }).catch(error => {
        console.log(error);
    });
  }, [idProductor]);

  const editarProductorAction = (e) => {
    e.preventDefault();

    if(idRedesSociales)
    {
        const rs = {};
        if(facebook !== '' && agregarFacebook) {
        rs.facebook = facebook;
        }
        else {
            rs.facebook = '';
        }

        if(insta !== '' && agregarInsta) {
        rs.instagram = insta;
        }
        else {
            rs.instagram = '';
        }

        if(twitter !== '' && agregarTwitter) {
        rs.twitter = twitter;
        }
        else {
            rs.twitter = '';
        }

        if(youtube !== '' && agregarYoutube) {
        rs.youtube = youtube;
        }
        else {
            rs.youtube = '';
        }

        if(tiktok !== '' && agregarYoutube) {
        rs.tiktok = tiktok;
        }
        else {
            rs.tiktok = "";
        }
        editarRS(idRedesSociales, rs);


    }

    const productorF = {
        nombre: productor,
    };

    actualizarProductor(idProductor, productorF).then(response => {
        if(response.status === 200) {
            alert("Productor actualizado correctamente");
            setProductor('');
            setFacebook('');
            setInsta('');
            setTwitter('');
            setYoutube('');
            setTiktok('');
        }
    });
  }

  return (
    <div>
      <NavegacionP />
      <div className={styles.container}>
        <div className="registrarProductorContainer">
    <h3>Editar Productor: </h3>
    <form className={styles.formulario}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <TextField name="Nombre" value={productor} onChange={(e) => { setProductor(e.target.value); setValidarNombre(false) }} variant="standard" fullWidth label="Nombre" required helperText={validarNombre ? "Campo requerido" : ""} error={validarNombre} />
        </Grid>
        </Grid>
        <Grid className={styles.redesSocialesContainer} container spacing={3}>
        <Grid item xs={12} md={2}>
            <div className={styles.checkBoxContainer}>
            <FormControlLabel control={<Checkbox color='default' value={agregarFacebook} onClick={(e) => {setAgregarFacebook(!agregarFacebook)}} />} label="Facebook" />
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            <div className={styles.inputRSContainer}>
            <TextField disabled={!agregarFacebook} name="Facebook" value={facebook} onChange={(e) => {setFacebook(e.target.value); setValidarFace(false)}} variant="standard" fullWidth label="Facebook" required helperText={validarFace ? "Campo requerido" : ""} error={validarFace}/>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div className={styles.checkBoxContainer}>
            <FormControlLabel control={<Checkbox color='default' value={agregarInsta} onClick={(e) => {setAgregarInsta(!agregarInsta)}} />} label="Instragram" />
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            <div className={styles.inputRSContainer}>
            <TextField disabled={!agregarInsta} name="Instagram" value={insta} onChange={(e) => {setInsta(e.target.value); setValidarInsta(false)}} variant="standard" fullWidth label="Instagram" required helperText={validarInsta ? "Campo requerido" : ""} error={validarInsta}/>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div className={styles.checkBoxContainer}>
            <FormControlLabel control={<Checkbox color='default' value={agregarTwitter} onClick={(e) => {setAgregarTwitter(!agregarTwitter)}} />} label="Twitter" />
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            <div className={styles.inputRSContainer}>
            <TextField disabled={!agregarTwitter} name="Twitter" value={twitter} onChange={(e) => {setTwitter(e.target.value); setValidarTwitter(false)}} variant="standard" fullWidth label="Twitter" required helperText={validarTwitter ? "Campo requerido" : ""} error={validarTwitter}/>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div className={styles.checkBoxContainer}>
            <FormControlLabel control={<Checkbox color='default' value={agregarYoutube} onClick={(e) => {setAgregarYoutube(!agregarYoutube)}} />} label="Youtube" />
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            <div className={styles.inputRSContainer}>
            <TextField disabled={!agregarYoutube} name="Youtube" value={youtube} onChange={(e) => {setYoutube(e.target.value); setValidarYoutube(false)}} variant="standard" fullWidth label="Youtube" required helperText={validarYoutube ? "Campo requerido" : ""} error={validarYoutube}/>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <div className={styles.checkBoxContainer}>
            <FormControlLabel control={<Checkbox color='default' value={agregarTiktok} onClick={(e) => {setAgregarTiktok(!agregarTiktok)}} />} label="Tiktok" />
            </div>
        </Grid>
        <Grid item xs={12} md={9}>
            <div className={styles.inputRSContainer}>
            <TextField disabled={!agregarTiktok} name="Tiktok" value={tiktok} onChange={(e) => {setTiktok(e.target.value); setValidarTiktok(false)}} variant="standard" fullWidth label="Tiktok" required helperText={validarTiktok ? "Campo requerido" : ""} error={validarTiktok}/>
            </div>
        </Grid>
        </Grid>
        <Grid container justifyContent="center">
        <Grid item xs={1} md={1}>
            <Button onClick={editarProductorAction}editarh variant="contained" size="large" type="submit">
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

export default EditarProductor