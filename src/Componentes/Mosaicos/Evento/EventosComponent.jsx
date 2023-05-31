import React, { useState } from 'react';
import CardEP from './CardEP';
import CardEG from './CardEG';
import AOS from 'aos';
import TitleComponent from '../../TitleComponent';
import '../../styles/styles.css';

AOS.init();

const EventosComponent = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);

    const indexS1 = () => {
        if (visible1) {
            document.getElementById('ContainerT1').style.zIndex = 0;
            setVisible1(false);
        }
        else {
            document.getElementById('ContainerT1').style.zIndex = 999;
            setVisible1(true);
        }
    }
    
    const indexS2 = () => {
        if (visible2) {
            document.getElementById('ContainerT2').style.zIndex = 0;
            setVisible2(false);
        }
        else {
            document.getElementById('ContainerT2').style.zIndex = 999;
            setVisible2(true);
        }
    }
    
    const indexS3 = () => {
        if (visible3) {
            document.getElementById('ContainerT3').style.zIndex = 0;
            setVisible3(false);
        }
        else {
            document.getElementById('ContainerT3').style.zIndex = 999;
            setVisible3(true);
        }
    }
    
    const indexS4 = () => {
        if (visible4) {
            document.getElementById('ContainerT4').style.zIndex = 0;
            setVisible4(false);
        }
        else {
            document.getElementById('ContainerT4').style.zIndex = 999;
            setVisible4(true);
        }
    }
    
    const indexS5 = () => {
        if (visible5) {
            document.getElementById('ContainerT5').style.zIndex = 0;
            setVisible5(false);
        }
        else {
            document.getElementById('ContainerT5').style.zIndex = 999;
            setVisible5(true);
        }
    }
    
    const indexS6 = () => {
        if (visible6) {
            document.getElementById('ContainerT6').style.zIndex = 0;
            setVisible6(false);
        }
        else {
            document.getElementById('ContainerT6').style.zIndex = 999;
            setVisible6(true);
        }
    }

    return (
        <div className='eventoComponentContainer'>
            <TitleComponent titulo='Eventos' />
            <div data-aos='fade-up' data-aos-duration='1200' className='divContainer'>
                <div className='wrapper'>
                    <div id='ContainerT1' className='one' onClick={indexS1}>
                        <CardEP 
                            id='card1'
                            xi={100}
                            yi={100}
                            xt={380}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerDer'
                            classA='eventContainerClickDer'
                            classB='cardMP'
                        />
                    </div>
                    <div id='ContainerT2' className='two' onClick={indexS2}>
                        <CardEG
                            xi={150}
                            yi={100}
                            xt={-600}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerIzq'
                            classA='eventContainerClickIzq'
                            classB='cardMPIzq'
                        />
                    </div>
                    <div id='ContainerT3' className='three' onClick={indexS3}>
                        <CardEG 
                            xi={-110}
                            xt={550}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerDer'
                            classA='eventContainerClickDer'
                            classB='cardMP'
                        />
                    </div>
                    <div id='ContainerT4' className='four' onClick={indexS4}>
                        <CardEP 
                            xi={15}
                            yi={0}
                            xt={-380}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerIzq'
                            classA='eventContainerClickIzq'
                            classB='cardMPIzq'
                        />
                    </div>
                    <div id='ContainerT5' className='five' onClick={indexS5}>
                        <CardEP 
                            xi={100}
                            yi={-100}
                            xt={380}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerDer'
                            classA='eventContainerClickDer'
                            classB='cardMP'
                        />
                    </div>
                    <div id='ContainerT6' className='six' onClick={indexS6}>
                        <CardEG
                            xi={150}
                            yi={-100}
                            xt={-600}
                            opacidad={1}
                            scale={1.2}
                            class='eventContainerIzq'
                            classA='eventContainerClickIzq'
                            classB='cardMPIzq'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventosComponent