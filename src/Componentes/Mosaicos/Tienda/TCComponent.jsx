import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemCard from './ItemCard';
import TNavbarContainer from './Navbar/TNavbarContainer';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'bottom',
    paddingTop: '200px',
  }
}))

function TCComponent() {
  const classes = useStyles();

  return (
    <div>
        <TNavbarContainer />
        <div className={classes.cardContainer}>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
        </div>
        <div className={classes.cardContainer}>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
        </div>
        <div className={classes.cardContainer}>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
        </div>
        <div className={classes.cardContainer}>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
        </div>
        <div className={classes.cardContainer}>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
          <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
        </div>
    </div>
  )
}

export default TCComponent