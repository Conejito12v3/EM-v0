import React from 'react';
import AOS from 'aos';
import '../../styles/styles.css';

AOS.init();

const ArticuloDestComponent = () => {	

    return (
        <div id='artDestContinerID' className='artDestContainer'>
            <img className='artDestImg' src="http://localhost:3000/StaticFiles/ImagenGenerica.png" alt="" />
            <div data-aos='fade-right' data-aos-duration='1000' className='descripcionContainer'>
                <h7><i>Autor</i></h7>
                <h3>Titulo</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem neque dolore, quidem voluptatum sed commodi pariatur, asperiores explicabo eligendi impedit iusto reprehenderit ipsam rerum earum quia veritatis, possimus debitis odio?</p>
                <a className='ComprarButton' href="#"><strong>Comprar</strong></a>
            </div>
        </div>
    )
}

export default ArticuloDestComponent;