import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ListItem, ListItemText, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { eliminarEventos } from '../../../Actions/eventoAction';

const useStyles = makeStyles((tema) => ({
    verMasStyle: {
        cursor: 'pointer',
        marginLeft: '50px',
    }
}));

const ListItemEComponent = (props) => {
  const classes = useStyles();

  const borrarEvento = () => {
    eliminarEventos(props.evento.eventoId).then((response) => {
        console.log(response);
    })
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
                {props.evento.nombre}
              </Typography>
            </React.Fragment>}
        />
        <DeleteIcon className={classes.verMasStyle}  type="submit" onClick={borrarEvento} />
        <a href={`/eventos/admin/${props.evento.eventoId}`}><ArrowForwardIosIcon className={classes.verMasStyle} /></a>
    </ListItem>
  )
}

export default ListItemEComponent