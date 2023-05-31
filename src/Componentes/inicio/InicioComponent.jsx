import React from 'react'
import CardCarouselComponent from './CardCarouselComponent';
import CarruselComponent from './CarruselComponent';
import TituloComponent from './TituloComponent';
import GaleriaPromoComponent from './GaleriaPromoComponent';
import RestaurantePromoComponent from './RestaurantePromoComponent';

function InicioComponent() {
  return (
    <div>
        <CarruselComponent />
        <GaleriaPromoComponent />
        <TituloComponent Titulo='Proximos Eventos' />
        <CardCarouselComponent />
        <RestaurantePromoComponent />
        {/* <ExpoComponent /> */}
    </div>
  )
}

export default InicioComponent;