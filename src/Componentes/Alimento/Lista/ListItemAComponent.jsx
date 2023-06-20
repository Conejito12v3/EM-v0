import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ListItem, ListItemText, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { eliminarAlimento } from '../../../Actions/AlimentoAction';

const useStyles = makeStyles((tema) => ({
    verMasStyle: {
        cursor: 'pointer',
        marginLeft: '50px',
    }
}));
  

const ListItemAComponent = (props) => {
  const classes = useStyles();

  const borrarAlimento = () => {
    eliminarAlimento(props.alimento.alimentoId).then((response) => {
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
                {props.alimento.nombre}
              </Typography>
            </React.Fragment>}
        />
        <DeleteIcon className={classes.verMasStyle}  type="submit" onClick={borrarAlimento} />
        <a href={`/alimento/${props.alimento.alimentoId}`}><ArrowForwardIosIcon className={classes.verMasStyle} /></a>
    </ListItem>
  )
}

export default ListItemAComponent