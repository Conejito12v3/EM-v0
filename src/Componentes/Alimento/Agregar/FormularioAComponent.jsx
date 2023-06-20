import React, { useState } from 'react';
import { makeStyles, Grid, TextField, Button, InputAdornment, InputLabel, Select, MenuItem } from '@material-ui/core';
import { FormControl } from '@mui/material';
import NavegacionA from '../NavegacionA';
import { registrarAlimento } from '../../../Actions/AlimentoAction';

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
  

const FormularioAComponent = () => {
  const styles = useStyles();
  const tipo = ["Comida", "Bebida"]
  
  const [validarNombre, setValidarNombre] = useState(false);
  const [validarPrecio, setValidarPrecio] = useState(false);
  const [validarCantidad, setValidarCantidad] = useState(false);
  const [validarDescripcion, setValidarDescripcion] = useState(false);
  const [validarTipo, setValidarTipo] = useState(false);

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoE, setTipoE] = useState('');

  const registrarAlimentoAction = (e) => {
    let alimento = {};
    
    if(nombre === '') {
      setValidarNombre(true);
    }
    else {
        console.log(nombre);
        alimento.nombre = nombre;
    }

    if(precio === '') {
      setValidarPrecio(true);
    }

    if(cantidad === '') {
      setValidarCantidad(true);
    } else {
        alimento.cantidad = `${cantidad}`;
    }

    if(descripcion === '') {
      setValidarDescripcion(true);
    }
    else {
        alimento.descripcion = descripcion;
    }

    if(tipoE === '') {
        setValidarTipo(true);
    } else if(tipoE !== "Comida" && tipoE !== "Bebida") {
        setValidarTipo(true);
    }
    else {
        alimento.tipo = tipoE;
    }

    if(nombre !== '' && precio !== '' && cantidad !== '' && tipo !== '') {
        registrarAlimento(alimento).then(response => {
          if(response.status === 200) {
            alert("Alimento registrado");
            setNombre('');
            setPrecio('');
            setCantidad('');
            setDescripcion('');
            setTipoE('');
          }
        })
    }

  }

  return (
    <div>
      <NavegacionA />
      <div className={styles.container}>
        <div className="registrarProductorContainer">
          <h3>Agregar platillo: </h3>
          <form className={styles.formulario}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField name="Nombre" variant="standard" fullWidth label="Nombre" required value={nombre} onChange={(e) => {setNombre(e.target.value); setValidarNombre(false)}} helperText={validarNombre ? "Campo requerido" : ''} error={validarNombre} />
              </Grid>
              <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tipoE}
                    label="Tipo"
                    onChange={(e) => {setTipoE(e.target.value); console.log(tipoE)}}
                    >
                    <MenuItem value={"Comida"}>Comida</MenuItem>
                    <MenuItem value={"Bebida"}>Bebida</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Cantidad: "
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">gr</InputAdornment>,
                  }}
                  type='number'
                  required
                  value={precio} onChange={(e) => {setPrecio(e.target.value); setValidarPrecio(false)}} helperText={validarPrecio ? "Campo requerido" : ''} error={validarPrecio}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Precio"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  type='number'
                  value={cantidad} onChange={(e) => {setCantidad(e.target.value); setValidarCantidad(false)}} helperText={validarCantidad ? "Campo requerido" : ''} error={validarCantidad}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField name="Descripcion" variant='standard' fullWidth label='Descripcion' required value={descripcion} onChange={(e) => {setDescripcion(e.target.value); setValidarDescripcion(false)}} helperText={validarDescripcion ? "Campo requerido" : ''} error={validarDescripcion} />
              </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Button fullWidth variant="contained" size="large"  onClick={registrarAlimentoAction}>
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

export default FormularioAComponent