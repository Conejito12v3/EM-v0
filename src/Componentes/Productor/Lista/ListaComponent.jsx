import React, { useEffect, useState } from 'react';
import { List, Divider } from '@mui/material';
import ListItemComponent from './ListItemComponent';
import { obtenerProductor } from '../../../Actions/productorAction';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Search } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';

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

function ListaComponent(props) {
  const [productores, setProductores] = useState();
  const [productor, setProductor] = useState('');
  const styles = useStyles();

  useEffect(() => {
    obtenerProductor().then(response => {
        setProductores(response.data);
    });
  }, []);

  const buscar = (e) => {
    setProductor(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className='listaContainer'>
      <div className={styles.buscarContainer}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Buscar..." variant="standard" sx={{ width: '250px' }} onChange={buscar} />
          <div className={styles.agregarContainer}>
            <a href="/productor/crear">
              <AddIcon className={styles.botonStyle} sx={{ color: 'white', mr: 1, my: 0.5 }} />
            </a>
          </div>
        </Box>

      </div>
      <List sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper' }}>
      {
        productores ? productores.map(productorM => {
          if(productor === '')
          {
            return (
              <div>
                <ListItemComponent productor={productorM} />
                <Divider />
              </div>
            )
          }
          else if (productorM.nombre.toLowerCase().includes(productor.toLowerCase()))
          {
            return (
              <div>
                <ListItemComponent productor={productorM} />
                <Divider />
              </div>
            )
          }
        }) 
        : <h2>No hay productores registrados</h2>
      }
      </List>
    </div>
    </div>
  )
}

export default ListaComponent