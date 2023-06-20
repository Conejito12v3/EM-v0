import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ListItem, ListItemText, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { eliminarProducto } from '../../../Actions/productoAction';

const useStyles = makeStyles((tema) => ({
  verMasStyle: {
    cursor: 'pointer',
    marginLeft: '50px',
  }
}));

const ListPItemComponent = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log("props.productor: ", props.producto.productoId);
  });

  const eliminarProductorAction = () => {

    eliminarProducto(props.producto.productoId).then(response => { console.log("Eliminar productor: ", response) });
    window.location.reload(true);
  }

  return (
    <ListItem>
      <ListItemText secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body3"
                fontSize='1.2rem'
              >
                {props.producto.nombre}
              </Typography>
            </React.Fragment>}
        />
        <DeleteIcon className={classes.verMasStyle} onClick={eliminarProductorAction} type="submit" />
        <a href={`/productor/${props.producto.productoId}`}><ArrowForwardIosIcon className={classes.verMasStyle} /></a>
    </ListItem>
  )
}

export default ListPItemComponent