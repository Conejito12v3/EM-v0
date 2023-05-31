import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    InfoContainer: {
        display: 'flex',    
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center',  
        width: '100%',
        borderTop: '1px solid #c1c1c1',
        overflow: 'hidden', 
    },
    imgContainer: {
        backgroundColor: '#222',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '625px',
        width: '60%',
        marginBottom: '40px',
        position: 'fixed',
        top: '130px',
        left: '0',
    },
    titleImgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        color: 'white',
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '60%',
        }
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: '40%',
        padding: '125px 0px 0px 50px'
    },
    infoPinturaContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        '& p': {
            width: '70%',
            textAlign: 'justify',
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
    },
    boton: {
        width: '100px',
        height: '50px',
        border: '1px solid #222',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        padding: '5px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #222',
            backgroundColor: '#222',
            color: 'white',
        }
    },
    RScontainer: {
        color: 'white',
    }
}));

const ItemInfo = (props) => {
    const classes = useStyles();

    const Hola = () => {
        
    }

    return (
        <div className={classes.InfoContainer}>
            <div className={classes.imgContainer}>
                {/* <div className={classes.titleImgContainer}>
                    <h1><strong>{props.nombre}</strong></h1>
                </div> */}
                <div className={classes.img}>
                    <img src="http://localhost:3000/StaticFiles/imgPicture.jpg" alt="Imagen" />
                </div>
                <div className={classes.RScontainer}>Redes Sociales</div>
            </div>
            <div className={classes.info}>
                <div className={classes.infoPinturaContainer}>
                    <div className={classes.infoPintura}>
                        <p><i>Por {props.autor}</i></p>
                        <h1 style={{ marginBottom: '20px'}}><strong>{props.nombre}</strong></h1>
                        <h3>${props.precio}</h3>
                        <p>{props.descripcion}</p>
                        <p style={{borderBottom: '50px'}}><strong>Descripción:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam error omnis illum distinctio iste? In, perferendis, odit qui sapiente, maxime possimus optio molestiae voluptas inventore dicta ex doloribus id placeat.</p>
                        <div className={classes.buttonContainer}>
                            <div className={classes.boton}>Comprar</div>
                            <div className={classes.boton}>Agregar al carrito</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemInfo;