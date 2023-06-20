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

const NavegacionPP = () => {
  const styles = useStyles();

  return (
    <div>
      <a className={styles.link} href="/producto"><h1 className={styles.titulo}>Productos</h1></a>
    </div>
  )
}

export default NavegacionPP