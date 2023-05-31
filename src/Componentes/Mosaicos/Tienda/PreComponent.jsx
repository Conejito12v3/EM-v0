import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemCard from './ItemCard';
import AOS from 'aos';

AOS.init();

const useStyles = makeStyles((theme) => ({
    PreComponentContainer: {
        [theme.breakpoints.up(810)]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            backgroundColor: theme.palette.background.paper,
            paddingLeft: '20px',
            paddingBottom: '50px',
        },
        [theme.breakpoints.down(810)]: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px',
            paddingLeft: '10px',
            width: '100%',
        }

    },
    ArticulosContainer: {
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down(1000)]: {
            flexDirection: 'column',
            overflowX: 'scroll',
            height: '800px'    
        }
    },
    More: {
        width: '150px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        '& a': {
            color: '#222',
            border: '1px solid #222',
            textDecoration: 'none',
            padding: '5px',
            transition: 'all 0.3s ease-in-out',
        },
        '& a:hover': {
            color: '#fff',
            backgroundColor: '#222',
            border: '1px solid #fff',
        },
        [theme.breakpoints.down(1000)]: {
            alignItems: 'left',
        },
        [theme.breakpoints.down(810)]: {
            fontSize: 'small',
            width: '350px',
            backgroundColor: '#fff',
            justifyContent: 'left',
            '& a': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px',
            },
        }
    },
    CardsContainer: {
        width: '100%',
        height: '700px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'bottom',
        paddingTop: '100px',
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down(1000)]: {
            marginTop: '10px !important',
            paddingTop: '10px',
            paddingLeft: '50px',
            overflowX: 'scroll',
            alignItems: 'right'
        },
        [theme.breakpoints.down(950)]: {
            paddingLeft: '150px',
        },
        [theme.breakpoints.down(810)]: {
            marginTop: '50px',
            display: 'flex',
            overflowX: 'scroll',
            overflowY: 'hidden',
            paddingLeft: '200px',
        },
        [theme.breakpoints.down(790)]: {
            paddingLeft: '200px',
        },
        [theme.breakpoints.down(760)]: {
            paddingLeft: '270px',
        },
        [theme.breakpoints.down(705)]: {
            paddingLeft: '300px',
        },
        [theme.breakpoints.down(670)]: {
            paddingLeft: '350px',
        },
        [theme.breakpoints.down(620)]: {
            paddingLeft: '400px',
        },
        [theme.breakpoints.down(620)]: {
            paddingLeft: '500px',
        },
        [theme.breakpoints.down(400)]: {
            width: '300px !important',
            height: '700px !important',
            marginBottom: '400px',
            display: 'flex',
            overflowX: 'scroll',
            overflowY: 'hidden',
            paddingLeft: '500px',
            marginBottom: '0px',
        },
    }
}));

const   PreComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.PreComponentContainer}>
            <h1 data-aos='fade-left' >{props.nombre}</h1>
            <div data-aos='fade-up' className={classes.ArticulosContainer}>
                <div className={classes.More}>
                    <a href=""><h5>Ver Mas</h5></a>
                </div>
                <div className={classes.CardsContainer}>
                    <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
                    <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
                    <ItemCard image="http://localhost:3000/StaticFiles/ImagenGenerica.png" name="Ursula Magazine Subscription" autor='Ursula' precio='10.00'/>
                </div>
            </div>
        </div>
    )
}

export default PreComponent