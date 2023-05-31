import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';

AOS.init();

const useStyles = makeStyles((tema) => ({
    tituloContainer: {
        backgroundColor: '#222',
        width: '100%',
        height: '80px',
        margin: '10px 0px 25px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '20px',
    },
    titulo: {
        color: '#fff',
        border: '1px solid #fff',
        padding: '5px 10px',
    }
}));

const TitleComponent = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.tituloContainer}>
            <h1 data-aos='fade-left' data-aos-duration='1200' className={classes.titulo}>{props.titulo}</h1>
        </div>
    )
}

export default TitleComponent;