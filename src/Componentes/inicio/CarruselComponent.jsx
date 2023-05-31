import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/styles.css';

function CarruselComponent() {
  const [carrusel, setCarrusel] = useState();

  const mobilePhotos = [
    {
      title: 'Restaurante',
      subtitle: 'Abierto de 9 am a 9 pm',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenericaMobile.png', 
      height: ''+(window.innerHeight)+'px'
    }, 
    {
      title: 'Exposicion',
      subtitle: 'Una nueva exposicion cada 3 meses.',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenericaMobile.png',
      height: ''+(window.innerHeight)+'px'
    }, 
    {
      title: 'Online Store',
      subtitle: 'LLevate un recuerdo.',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenericaMobile.png', 
      height: ''+(window.innerHeight)+'px'
    }
  ];

  const desktopPhotos = [
    {
      title: 'Restaurante',
      subtitle: 'Abierto de 9 am a 9 pm',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenerica.png',
      height: '83vh',
    }, 
    {
      title: 'Exposicion',
      subtitle: 'Una nueva exposicion cada 3 meses.',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenerica.png', 
      height: '83vh'
    }, 
    {
      title: 'Online Store',
      subtitle: 'LLevate un recuerdo.',
      imgSrc: 'http://localhost:3000/staticFiles/imagenGenerica.png',
      height: '83vh'
    }
  ];

  let items = [];

  useEffect(() => {
    if(window.innerWidth > 810) {
      items = desktopPhotos;
    }
    else if(window.innerWidth <= 810 && window.innerWidth > 500) {
      items = mobilePhotos;
    }
    else if(window.innerWidth <= 500) {
      items = mobilePhotos;
    }

    let hola = items.map((item, index) => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.imgSrc}
            alt="First slide"
            style={{height: item.height}}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    });

    setCarrusel(hola);

  }, []);

  return (
    <Carousel>
      {carrusel}
    </Carousel>
  );
}

export default CarruselComponent;