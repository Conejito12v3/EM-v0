import React, { useEffect, useState } from 'react';
import { List, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Search } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { obtenerProductos } from '../../../Actions/productoAction';
import ListPItemComponent from './ListPItemComponent';

const useStyles = makeStyles((tema) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '30px',
  },
  titulo: {
    backgroundColor: '#333333',
    color: 'white',
    padding: '1rem',
  },
  buscarContainer: {
    display: 'flex',
    paddingLeft: '10px',
  },
  botonStyle: {
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#333333',
  },
  agregarContainer: {
    margin: '0px 10px',
  }
}));

const ListaPComponent = () => {
  const [productos, setProductos] = useState();
  const [producto, setProducto] = useState('');
  const styles = useStyles();

  useEffect(() => {
    obtenerProductos().then(response => {
        setProductos(response.data);
    });
  }, []);

  const buscar = (e) => {
    setProducto(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className='listaContainer'>
        <div className={styles.buscarContainer}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Buscar..." variant="standard" sx={{ width: '250px' }} onChange={buscar} />
            <div className={styles.agregarContainer}>
              <a href="/producto/crear">
                <AddIcon className={styles.botonStyle} sx={{ color: 'white', mr: 1, my: 0.5 }} />
              </a>
            </div>
          </Box>

        </div>
        <List sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper' }}>
        {
          productos ? productos.map(productoM => {
            if(producto === '')
            {
              return (
                <div>
                  <ListPItemComponent producto={productoM} />
                  <Divider />
                </div>
              )
            }
            else if (productoM.nombre.toLowerCase().includes(producto.toLowerCase()))
            {
              return (
                <div>
                  <ListPItemComponent productor={productoM} />
                  <Divider />
                </div>
              )
            }
          }) 
          : <h2>No hay productos registrados</h2>
        }
        </List>
      </div>
    </div>
  )
}

export default ListaPComponent