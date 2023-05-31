import React from 'react'; 
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
    padding: '0px',
    margin: '0px 20px 0px 0px',
    height: '600px',
  },
  imgContainer: {
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  imgProducto: {
    width: '200px',
    height: '300px'
  },
  descripcionContianer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    padding: '0px',
    margin: '0px',
    width: '100%',
  }
}));

function ItemCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.productoContainer}>
      <div className={classes.imgContainer}>
        <img className={classes.imgProducto} src={props.image} alt={props.name} />
      </div>
      <div className={classes.descripcionContianer}>
        <h4 style={{fontSize: '18px'}}><strong>{props.name}</strong></h4>
        <h6><i>{props.autor}</i></h6>
        <h5 style={{fontSize: '18px'}}>${props.precio}</h5>
        <a className='ComprarButton' href="#">Comprar</a>
      </div>
    </div>
  )
}

export default ItemCard