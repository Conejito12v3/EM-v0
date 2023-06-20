import React from 'react';
import AOS from 'aos';
import '../../styles/styles.css';

AOS.init();

const ArticuloDestComponent = () => {	

    return (
        <div id='artDestContinerID' className='artDestContainer'>
            <img className='artDestImg' src="https://www.unesco.org/sites/default/files/2022-04/visages%20de%20couleur%20surréaliste.jpg" alt="" />
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