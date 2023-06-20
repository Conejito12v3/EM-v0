import React, { useState } from 'react';
import { makeStyles, Grid, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { registrarRs } from '../../../Actions/rsAction';
import { registrarProductor } from '../../../Actions/productorAction';
import NavegacionP from '../NavegacionP';

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

function FormularioComponent() {
  const styles = useStyles();
  
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

  const registrarProductorAction = (e) => {
    e.preventDefault();

    const rs = {};
    if(facebook !== '') {
      rs.facebook = facebook;
    }

    if(insta !== '') {
      rs.instagram = insta;
    }

    if(twitter !== '') {
      rs.twitter = twitter;
    }

    if(youtube !== '') {
      rs.youtube = youtube;
    }

    if(tiktok !== '') {
      rs.tiktok = tiktok;
    }

    console.log(rs);

    let rsId = '';

    if((agregarFacebook && facebook !== '') || (agregarInsta && insta !== '') || (agregarTwitter && twitter !== '') || (agregarYoutube && youtube !== '') || (agregarTiktok && tiktok !== '')) {
      registrarRs(rs).then((Response) => { 
        rsId = Response.data; 
        console.log("rsId: ", rsId);

        if(rsId !== '')
        {
          if (rsId !== '' && productor !== '') 
          {
            const ProductorF = {
              nombre: productor,
              RedesSocialesId: rsId
            }

            console.log("ProductorF: ", ProductorF);

            registrarProductor(ProductorF).then((Response) => { 
              if(Response.status === 200) {
                alert("Productor agregado correctamente");
                setProductor('');
                setFacebook('');
                setInsta('');
                setTwitter('');
                setYoutube('');
                setTiktok('');
              }
            }).catch((error) => { console.log("Productor: ", error) });
          }
        }
      });
    }
    else
    {
      if (productor !== '' && (!agregarFacebook && !agregarInsta && !agregarTwitter && !agregarYoutube && !agregarTiktok)) 
      {
        const ProductorF = {
          nombre: productor
        }

        registrarProductor(ProductorF).then((Response) => { console.log(Response) }).catch((error) => { console.log("Productor: ", error) });
      }
      else
      {
        if(productor === '') {
          setValidarNombre(true);
        }

        console.log("Face: ", agregarFacebook, " ", facebook);
        if(agregarFacebook && facebook === '') {
          setValidarFace(true);
        }

        if(agregarInsta && insta === '') {
          console.log("Insta");
          setValidarInsta(true);
        }

        if(agregarTwitter && twitter === '') {
          console.log("Twitter");
          setValidarTwitter(true);
        }

        if(agregarYoutube && youtube === '') {
          console.log("Youtube");
          setValidarYoutube(true);
        }

        if(agregarTiktok && tiktok === '') {
          console.log("Tiktok");
          setValidarTiktok(true);
        }
      

        setValidarNombre(true);
      }
    }
  }

  return (
  <div>
    <NavegacionP />
    <div className={styles.container}>
    <div className="registrarProductorContainer">
      <h3>Agregar Productor: </h3>
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
          <Grid item xs={12} md={6}>
              <Button onClick={registrarProductorAction} fullWidth variant="contained" size="large" type="submit">
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

export default FormularioComponent