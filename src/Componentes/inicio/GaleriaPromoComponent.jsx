import React from 'react';
import { makeStyles } from '@material-ui/core';
import TituloComponent from './TituloComponent';
import AOS from 'aos';

AOS.init();

const useStyles = makeStyles((theme) => ({
    promoContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderBottom: '1px solid #fff',
    },
    promo: {
        width: '100%',
        display: 'flex',
        margin: '50px 0',
    },
    descripcion: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        color: '#fff',
        fontSize: '20px',
        borderLeft: '1px solid #fff',
        '& p': {
            padding: '50px',
            textAlign: 'justify',
        }
    },
    mosaico: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        fontSize: '20px',
        '& img': {
            width: '70%',
            objectFit: 'cover',
            objectPosition: 'center',
        }
    }
}));

function GaleriaPromoComponent() {
    const classes = useStyles();

    return (
        <div className={classes.promoContainer}>
            <TituloComponent Titulo='Galeria' />
            <div className={classes.promo}>
                <div data-aos='fade-right' className={classes.mosaico}>
                    <img src="https://www.plans.com.mx/wp-content/uploads/Maz.jpeg" alt="" />
                </div>
                <div data-aos='fade-left' className={classes.descripcion}>
                    <h6><i>Autor</i></h6>
                    <h3><strong>Nombre de la exposicion</strong></h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore deserunt culpa sequi, magnam modi qui quam eligendi, quisquam illo, doloribus debitis quibusdam recusandae dolorem. Architecto labore excepturi accusantium fugiat facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio ut soluta quaerat nam ullam, magni eos voluptate blanditiis rerum distinctio id? Sit ullam fuga aut, qui temporibus labore ad.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GaleriaPromoComponent