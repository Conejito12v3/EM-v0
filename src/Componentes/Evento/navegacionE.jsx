import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((tema) => ({
    link: {
        color: 'white',
        textDecoration: 'none'
    },
    titulo: {
        backgroundColor: '#333333',
        color: 'white',
        padding: '1rem',
    },
    buscarContainer: {
        display: 'flex',
        paddingLeft: '10px',
    }
}));

function NavegacionE() {
  const styles = useStyles();

  return (
    <div>
      <a className={styles.link} href="/eventos/admin"><h1 className={styles.titulo}>Eventos</h1></a>
    </div>
  )
}

export default NavegacionE