import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    platilloContainer: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    platillo: {
        marginBottom: '20px',
    },
    nombrePlatillo: {
        width: '70%',
    },
    precioPlatillo: {
        width: '30%',
        textAlign: 'right',
    }
}))

const PlatilloItem = (props) => {
    const classes = useStyles();

  return (
    <li className={classes.platillo}>
        <div className={classes.platilloContainer}>
            <div className={classes.nombrePlatillo}><h4><strong>{props.nombre}</strong></h4></div>
            <div className={classes.precioPlatillo}><h4><strong>${props.precio}</strong></h4></div>
        </div>
        <h5>{props.descripcion}</h5>
    </li>
  )
}

export default PlatilloItem