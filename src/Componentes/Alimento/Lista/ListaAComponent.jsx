import React, { useEffect, useState } from 'react';
import { List, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Search } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { obtenerAlimento } from '../../../Actions/AlimentoAction';
import ListItemAComponent from './ListItemAComponent';

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

const ListaAComponent = () => {
  const [alimentos, setAlimentos] = useState();
  const [alimento, setAlimento] = useState('');
  const styles = useStyles();
  
  useEffect(() => {
    obtenerAlimento().then(response => {
      console.log(response.data);
      setAlimentos(response.data);
    });
  }, []);

  const buscar = (e) => {
    setAlimento(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className='listaContainer'>
      <div className={styles.buscarContainer}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Buscar..." variant="standard" sx={{ width: '250px' }} onChange={buscar} />
          <div className={styles.agregarContainer}>
            <a href="/alimento/crear">
              <AddIcon className={styles.botonStyle} sx={{ color: 'white', mr: 1, my: 0.5 }} />
            </a>
          </div>
        </Box>

      </div>
      <List sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper' }}>
      {
        alimentos ? alimentos.map(alimentoM => {
            console.log(alimentoM);
          if(alimento === '')
          {
            return (
              <div>
                <ListItemAComponent alimento={alimentoM} />
                <Divider />
              </div>
            )
          }
          else if (alimentoM.nombre.toLowerCase().includes(alimento.toLowerCase()))
          {
            return (
              <div>
                <ListItemAComponent alimento={alimentoM} />
                <Divider />
              </div>
            )
          }
        }) 
        : <h2>No hay alimentos registrados</h2>
      }
      </List>
    </div>
    </div>
  )
}

export default ListaAComponent