import React, { useState, useEffect } from 'react';
import { makeStyles, Toolbar, IconButton, Drawer } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import MenuIzqComponent from './menuDer';
import '../styles/styles.css';
import { useStateValue } from '../../Context/store';
import sesionUsuarioReducer from '../../Context/reducers/sesionUsuarioReducer';

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
    const navigate = useNavigate();
    const classes = useStyles();
    const [abrirMenuIzq, setAbrirMenuIzq] = useState(false);
    const [show, setShow] = useState(true);
    const [{sesionUsuario}, dispatch] = useStateValue();

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
    }, [sesionUsuario]);

    const cerrarMenuIzq = () => {
        console.log('cerrarMenuIzq');
        setAbrirMenuIzq(false);
    }

    const abrirMenuIzqAction = () => {
        setAbrirMenuIzq(true);
    }

    const cerrarSesion = () => {
        if(sesionUsuario.autenticado)
        {
            localStorage.removeItem('token_seguridad');
            dispatch({
                type: "SALIR_SESION",
                nuevoUsuario: null,
                autenticado: false
            });
            sesionUsuarioReducer(null, dispatch);
            
        }
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
                            <MenuIzqComponent  classes={ classes } />
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
                            <h1 >em</h1>
                            <h2>Art Gallery Café</h2>
                        </div>
                    </div>
                    <div className={`navContainerScrolled ${show && 'navContainerScrolledAnimated'}`}>
                        <div className="navLinks">
                            <a className='a' href="/">Inicio</a>
                            <a className='a' href="/galeria">Galeria</a>
                            <a className='a' href="/eventos">Eventos</a>
                            <a className='a' href="/menu">Restaurante y café</a>
                            <a className='a' href="/tienda">Online Store</a><h7 className="nombreStyle">Bienvenido {sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ""}</h7>
                            {
                                sesionUsuario ?
                                <a className='a' href="/admin">Administrar</a>
                                : null
                            }
                            <a className='a' href="/login" onClick={cerrarSesion}>{sesionUsuario ? "Cerrar sesion" : "Iniciar sesion"}</a>
                            {
                                sesionUsuario ? null :
                                <a className='a' href="/registrarse" onClick={cerrarSesion}>Registrarse</a>
                            }
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
                
                <div className='nombreContainer navLinks'>
                    <h7 className="nombreStyleScroll">Bienvenido {sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ""}</h7>
                    {
                        sesionUsuario ?
                        <a className='a' href="/admin">Administrar</a>
                        : null
                    }
                    <a className='a' href="/login" onClick={cerrarSesion}>{sesionUsuario ? "Cerrar sesion" : "Iniciar sesion"}</a>
                    {
                        sesionUsuario ? null :
                        <a className='a' href="/registrarse" onClick={cerrarSesion}>Registrarse</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default AppNavbar;