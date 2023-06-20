import React, { useEffect, useState } from 'react';
import { obtenerProductor } from '../../../Actions/productorAction';
import NavegacionPP from '../NavegacionPP';
import { makeStyles, Grid, TextField, Button, InputAdornment, InputLabel, Select, MenuItem, Avatar } from '@material-ui/core';
import { FormControl } from '@mui/material';
import ImageUploader from 'react-images-upload';
import { v4 as uuidv4 } from 'uuid';
import { obtenerDataImagen } from '../../../Actions/ImagenAction';
import reactFoto from '../../../logo.svg';
import { insertarProducto } from '../../../Actions/productoAction';

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

const FormularioPP = () => {
  const styles = useStyles();
  let categorias = ['Libro', 'Pintura', 'Escultura'];
  const [productores, setProductores] = useState();
  let productoreOpcion;

  const [validarNombre, setValidarNombre] = useState(false);
  const [validarDescripcion, setValidarDescripcion] = useState(false);
  const [validarPrecio, setValidarPrecio] = useState(false);
  const [validarStock, setValidarStock] = useState(false);
  const [validarFecha, setValidarFecha] = useState(false);
  const [validarProductor, setValidarProductor] = useState(false);
  const [validarCategoria, setValidarCategoria] = useState(false);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [productor, setProductor] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    obtenerProductor().then(response => {
      if(response.status === 200) {
        setProductores(response.data);
      }
    });
  }, [])

  const subirFoto = (imagenes) => {
    const ft = imagenes[0];
    const ftUrl = URL.createObjectURL(ft);

    obtenerDataImagen(ft).then(response => {
      setImagen(response.Data);
      setFotoUrl(ftUrl);
    })

    console.log(imagen);
  }

  const registrarProducto = () => {
    if (nombre.trim === '') {
      setValidarNombre(true);
      return;
    }

    if(descripcion.trim === '') {
      setValidarDescripcion(true);
      return;
    }

    if(precio.trim === '') {
      setValidarPrecio(true);
      return;
    }

    if(stock.trim === '') {
      setValidarStock(true);
      return;
    }

    if(fecha.trim === '') {
      setValidarFecha(true);
      return;
    }

    if(productor.trim === '') {
      setValidarProductor(true);
      return;
    }

    if(categoria.trim === '') {
      setValidarCategoria(true);
      return;
    }

    console.log(imagen);

    const producto = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      imagenProducto: imagen,
      fechaCreacion: fecha,
      categoriaId: categoria,
      productorId: productor
    }

    console.log(producto);

    insertarProducto(producto).then(response => {
      if(response.status === 200) {
        alert('Producto registrado correctamente');
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setStock('');
        setFecha('');
        setCategoria('');
        setProductor('');
      }
    })
  }

  const fotoKey = uuidv4();

  return (
    <div>
      <NavegacionPP />
      <div className={styles.container}>
        <div className="registrarProductorContainer">
          <Avatar className={styles.avatar} src={fotoUrl || reactFoto} />
          <h3>Agregar producto: </h3>
          <form className={styles.formulario}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField name="Nombre" variant="standard" fullWidth label="Nombre" required value={nombre} onChange={(e) => {setNombre(e.target.value); setValidarNombre(false)}} helperText={validarNombre ? "Campo requerido" : ''} error={validarNombre} />
              </Grid>
              <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Productor</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=''
                    value={productor} onChange={(e) => {setProductor(e.target.value); setValidarProductor(false)}} helperText={validarProductor ? "Campo requerido" : ''} error={validarProductor}
                    >
                    {
                      productores ? productores.map((productor) => {
                        return <MenuItem value={productor.productorId}>{productor.nombre}</MenuItem>
                      })
                      :
                      <MenuItem value={''}>No hay productores</MenuItem>
                    }
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=''
                    value={categoria} onChange={(e) => {setCategoria(e.target.value); setValidarCategoria(false)}} helperText={validarCategoria ? "Campo requerido" : ''} error={validarCategoria}
                    >
                    <MenuItem value={'d483933d-ec04-4bf1-8f54-d83b0013e778'}>Libro</MenuItem>
                    <MenuItem value={'8cbb4f09-b24d-46b3-a4a3-32e896627c67'}>Pintura</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Precio: "
                  id="outlined-start-adornment"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  type='number'
                  required
                  value={precio} onChange={(e) => {setPrecio(e.target.value); setValidarPrecio(false)}} helperText={validarPrecio ? "Campo requerido" : ''} error={validarPrecio}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Stock"
                  id="outlined-start-adornment"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Stock:</InputAdornment>,
                  }}
                  type='number'
                  value={stock} onChange={(e) => {setStock(e.target.value); setValidarStock(false)}} helperText={validarStock ? "Campo requerido" : ''} error={validarStock}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField name="Fecha" type='date' variant='standard' fullWidth label='Fecha de registro' required value={fecha} onChange={(e) => {setFecha(e.target.value); setValidarFecha(false)}} helperText={validarFecha ? "Campo requerido" : ''} error={validarFecha} />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField name="Descripcion" variant='standard' fullWidth label='Descripcion' required value={descripcion} onChange={(e) => {setDescripcion(e.target.value); setValidarDescripcion(false)}} helperText={validarDescripcion ? "Campo requerido" : ''} error={validarDescripcion} />
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
                    <Button fullWidth variant="contained" size="large" onClick={registrarProducto}>
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

export default FormularioPP