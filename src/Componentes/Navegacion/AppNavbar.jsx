import React, { useState, useEffect } from 'react';
import { makeStyles, Toolbar, IconButton, Drawer } from '@material-ui/core';
import MenuIzqComponent from './menuDer';
import '../styles/styles.css';

const useStyles = makeStyles((tema) => ({
    displayDesktop: {
        display: "flex",
        alignContent: "space-between",
        width: "100%",
        [tema.breakpoints.up(810)]: {
            display: "flex"
        },
        [tema.breakpoints.down(810)]: {
            display: "none"
        }
    },
    displayMobile: {
        display: "flex",
        width: "100%",
        [tema.breakpoints.up(810)]: {
            display: "none"
        }
        // [tema.breakpoints.only]: {
    },
    list: {
        width: 250
    },
    listItemText: {
        fontSize: "14px",
        fontWeight: 600,
        paddingLeft: "15px",
        color: "#212121"
    }
}))

const AppNavbar = () => {
    const classes = useStyles();
    const [abrirMenuIzq, setAbrirMenuIzq] = useState(false);
    const [show, setShow] = useState(true);

    const controlNavbar = () => {
        if (window.scrollY > 10) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, []);

    const cerrarMenuIzq = () => {
        console.log('cerrarMenuIzq');
        setAbrirMenuIzq(false);
    }

    const abrirMenuIzqAction = () => {
        setAbrirMenuIzq(true);
    }

    return (
        <div>
            <Toolbar class='navContainer'>
                <div className={classes.displayMobile}>
                    <Drawer
                        open = { abrirMenuIzq }
                        onClose = { cerrarMenuIzq }
                        anchor= 'left'
                    >
                        <div role='button' onClick={ cerrarMenuIzq } onKeyDown={ cerrarMenuIzq }>
                            <MenuIzqComponent  classes={ classes }/>
                        </div>
                    </Drawer>

                    <IconButton  color="inherit" onClick={ abrirMenuIzqAction }>
                        <i className="material-icons">menu</i>
                    </IconButton>
                    
                    <div className='navName'>
                        <h1>em</h1>
                        <h2>Art Gallery Café</h2>
                    </div>
                </div>

                <div className={classes.displayDesktop}>
                    <div className={`navHidden ${show && 'desktopNavContainer'}`}>
                        <div className='navName'>
                            <h1>em</h1>
                            <h2>Art Gallery Café</h2>
                        </div>
                    </div>
                    <div className={`navContainerScrolled ${show && 'navContainerScrolledAnimated'}`}>
                        <div className="navLinks">
                            <a className='a' href="/">Inicio</a>
                            <a className='a' href="/galeria">Galeria</a>
                            <a className='a' href="/eventos">Eventos</a>
                            <a className='a' href="/menu">Restaurante y café</a>
                            <a className='a' href="/tienda">Online Store</a>
                        </div>
                    </div>
                    <div className={`navNameScroll ${show && 'navNameScrollAnimated'}`}>
                        <div className='navName'>
                            <h1>em</h1>
                            <h2>Art Gallery Café</h2>
                        </div>
                    </div>
                </div>
            </Toolbar>
            
            <div className={`navScrollContainer ${show && 'navScrollContainerAnimated'}`}>
                <div className="navLinks">
                    <a className='a' href="/">Inicio</a>
                    <a className='a' href="/galeria">Galeria</a>
                    <a className='a' href="/eventos">Eventos</a>
                    <a className='a' href="/menu">Restaurante y café</a>
                    <a className='a' href="/tienda">Online Store</a>
                </div>
            </div>
        </div>
    )
}

export default AppNavbar;