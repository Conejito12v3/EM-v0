import React from 'react';
import { makeStyles } from '@material-ui/core';
import TitleComponent from '../TitleComponent';
import MenuDerComponent from './MenuDerComponent';
import MenuDerComponentBebidas from './MenuDerComponentBebidas';

const useStyles = makeStyles((theme) => ({
    principalContianer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
}));

const MenuComponent = () => {
    const classes = useStyles();
    const [comida, setComida] = React.useState(false);

    const cambiarComida = () => {
        setComida(true);
    }
    
    const cambiarBebida = () => {
        setComida(false);
    }

    return (
        <div className={classes.principalContianer}>
            <TitleComponent titulo='Menú' />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                }}
            >
                <a 
                    className='ComprarButton' 
                    style={{padding: '10px', margin: '0px 20px 0px 50px'}} 
                    href="#"
                    onClick={cambiarComida}
                >Comidas</a>
                <a 
                    className='ComprarButton' 
                    style={{padding: '10px'}} 
                    href="#"
                    onClick={cambiarBebida}
                >Bebidas</a>
            </div>
            <div>
                {
                    comida ? <MenuDerComponent seccion='Antipassti' /> : <MenuDerComponentBebidas seccion='Mocktails' />
                }
            </div>
        </div>
    )
}

export default MenuComponent