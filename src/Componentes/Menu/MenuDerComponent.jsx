import React from 'react';
import { makeStyles } from '@material-ui/core';
import PlatilloItem from './PlatilloItem';
import GaleriaPlatillosComponent from './GaleriaPlatillosComponent';

const useStyles = makeStyles((theme) => ({
    sectionMenuContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& h1': {
            paddingInline: '10px',
            margin: '10px 50px 20px 50px',
            borderBottom: '1px solid #222',
        }
    },
    MenuContainer: {
        display: 'flex',
        width: '100%',
        alignContent: 'center',
        justifyItems: 'center'
    },
    sectionMenu: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        paddingInline: '60px',
        borderRight: '1px solid #222',
        '& ul': {
            listStyle: 'disc',
        },
        '& ul li .platilloContainer': {
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
    },
    GaleriaMenuContianer: {
        width: '50%',
        display: 'flex',
    }
}));

const  MenuDerComponent = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.sectionMenuContainer}>
            <h1><strong>{props.seccion}</strong></h1>
            <div className={classes.MenuContainer}>
                <div className={classes.sectionMenu}>
                    <ul>
                        <PlatilloItem 
                            nombre='Carpaccio di portobello'
                            precio='150'
                            descripcion='Arúgula, parmesana, limón'
                        />
                        <PlatilloItem 
                            nombre='Carpaccio di salmone'
                            precio='290'
                            descripcion='Naranja, toronja, aguacate, eureka'
                        />
                        <PlatilloItem 
                            nombre='Carpaccio di tonno'
                            precio='280'
                            descripcion='Cherry, cebolla cambray, aceite ajonjolí'
                        />
                        <PlatilloItem 
                            nombre='Carpaccio di manza'
                            precio='290'
                            descripcion='Res, parmesano, albahaca'
                        />
                        <PlatilloItem 
                            nombre='Mozzarella frita con bereniena'
                            precio='250'
                            descripcion='Marinara, arúgula, parmesano'
                        />
                    </ul>
                </div>
                <div className={classes.GaleriaMenuContianer}>
                    <GaleriaPlatillosComponent />
                </div>
            </div>
        </div>
    )
}

export default MenuDerComponent