import React from 'react';
import { makeStyles } from '@material-ui/core';
import TituloComponent from './TituloComponent';
import AOS from 'aos';

AOS.init();

const useStyles = makeStyles((theme) => ({
    RestaurantePromoContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#222',
        fontSize: '20px',
        borderRight: '1px solid gray',
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
        fontSize: '20px',
        '& img': {
            width: '70%',
            objectFit: 'cover',
            objectPosition: 'center',
        }
    }
}));

const RestaurantePromoComponent = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.RestaurantePromoContainer}>
            <TituloComponent Titulo='Restaurante y café' />
            <div className={classes.promo}>
                <div data-aos='fade-left' className={classes.descripcion}>
                    <h3><strong>Restaurante y café</strong></h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore deserunt culpa sequi, magnam modi qui quam eligendi, quisquam illo, doloribus debitis quibusdam recusandae dolorem. Architecto labore excepturi accusantium fugiat facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio ut soluta quaerat nam ullam, magni eos voluptate blanditiis rerum distinctio id? Sit ullam fuga aut, qui temporibus labore ad.
                    </p>
                </div>
                <div data-aos='fade-right' className={classes.mosaico}>
                    <img src="https://static.wixstatic.com/media/5cecee_78de0f63516c41f99bd9fe3b71dd2b13~mv2.jpg/v1/fill/w_560,h_572,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default RestaurantePromoComponent