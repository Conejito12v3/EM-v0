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

const  MenuDerComponentBebidas = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.sectionMenuContainer}>
            <h1><strong>{props.seccion}</strong></h1>
            <div className={classes.MenuContainer}>
                <div className={classes.sectionMenu}>
                    <ul>
                        <PlatilloItem 
                            nombre='Citric punch'
                            precio='95'
                            descripcion=''
                        />
                        <PlatilloItem 
                            nombre='Limonada de coco'
                            precio='95'
                        />
                        <PlatilloItem 
                            nombre='La vida en rosa'
                            precio='120'
                            descripcion=''
                        />
                        <PlatilloItem 
                            nombre='Jugo verde'
                            precio='60'
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

export default MenuDerComponentBebidas