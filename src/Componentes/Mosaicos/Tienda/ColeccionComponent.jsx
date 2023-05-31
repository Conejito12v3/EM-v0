import React, { useEffect } from 'react';
import AOS from 'aos';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ColeccionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        [theme.breakpoints.up(810)]: {
            marginTop: '100px'
        },
        [theme.breakpoints.down(810)]: {
            marginTop: '300px',
            flexDirection: 'column',
            paddingTo: '10px',
        }
    },
    ColeccionImgContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up(810)]: {
            height: '100vh',
            width: '60%',
            backgroundColor: '#fff',
            borderRight: '2px solid #e0dfdf',
            '& img': {
                width: '60%',
                height: '80%',
                objectFit: 'cover',
                boxShadow: '10px 5px 5px #c1c1c1',
            },
        },
        [theme.breakpoints.down(810)]: {
            '& img': {
                width: '500px',
                margin: '100px 0px',
                display: 'flex',
            },
        },
        [theme.breakpoints.down(810)]: {
            '& img': {
                width: '500px',
                margin: '0px',
                display: 'flex',
            },
        },
    },
    ColeccionDescripcionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: '40%',
        marginBottom: '50px',
        [theme.breakpoints.down(810)]: {
            width: '100%',
            marginBottom: '125px',
        },
        [theme.breakpoints.down(400)]: {
            width: '100%',
            marginBottom: '350px',
        },
        '& p': {
            padding: '5px 50px',
            textAlign: 'center',
        },
        '& a': {
            color: '#222',
            fontSize: '20px',
        }
    }
}));

const ColeccionComponent = (props) => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={classes.ColeccionContainer}>
            <div data-aos='fade-left' className={classes.ColeccionImgContainer}>
                <img src={props.img} alt="" />
            </div>
            <div data-aos='fade-down'  className={classes.ColeccionDescripcionContainer}>
                <h6><i>{props.autor}</i></h6>
                <h2><strong>{props.nombre}</strong></h2>
                <p>{props.descripcion}</p>
                <a href="">Ver mas</a>
            </div>
        </div>
    )
}

export default ColeccionComponent