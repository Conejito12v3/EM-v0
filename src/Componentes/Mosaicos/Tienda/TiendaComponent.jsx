import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArticuloDestComponent from './ArticuloDestComponent';
import PreComponent from './PreComponent';
import ColeccionComponent from './ColeccionComponent';
import AOS from 'aos';

AOS.init();

const useStyles = makeStyles((theme) => ({
    Container: {
        height: 'auto',
        overflow: 'hidden',
    },
    Espaciador: {
        display: 'none',
        [theme.breakpoints.down(450)]: {
            display: 'flex',
        }
    }
}));

const TiendaComponent = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.Container}>
            <ArticuloDestComponent />
            <PreComponent nombre='Libros' />
            <ColeccionComponent 
                img='http://localhost:3000/StaticFiles/ImagenGenerica.png'
                nombre='Colecciones'
                descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut necessitatibus distinctio repellat, veritatis accusantium est dolorem ex voluptates at debitis ratione atque perferendis hic minus consectetur porro pariatur sint. Commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque est vitae neque ratione illo id totam nihil. Aliquam suscipit nam, saepe itaque earum ratione alias, nulla temporibus beatae eligendi aliquid.'
                autor='Sebastian Rivera'
            />
            <div
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '90px'
                }}
            >
                <PreComponent nombre='Regalos y Accesorios' />
            </div>
        </div>
    )
}

export default TiendaComponent