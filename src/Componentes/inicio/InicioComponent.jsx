import React, { Fragment, useEffect } from 'react'
import CardCarouselComponent from './CardCarouselComponent';
import CarruselComponent from './CarruselComponent';
import TituloComponent from './TituloComponent';
import GaleriaPromoComponent from './GaleriaPromoComponent';
import RestaurantePromoComponent from './RestaurantePromoComponent';

function InicioComponent() {
  return (
    <Fragment>
      <CarruselComponent />
      <GaleriaPromoComponent />
      <TituloComponent Titulo='Proximos Eventos' />
      <CardCarouselComponent />
      <RestaurantePromoComponent />
    </Fragment>
  )
}

export default InicioComponent;