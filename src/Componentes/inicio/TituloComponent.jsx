import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((tema) => ({
    tituloContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px",
        height: "150px",
        width: "100%",
        backgroundColor: "#1c1c1c",
    },
    divTitulo: {
        display: "flex",
        justifyContent: "center",
        padding: "5px 20px",
        alignItems: "center",
        backgroundColor: "#1c1c1c",
        border: "1px solid #fff",
        color: "#fff",
        zIndex: "1",
        marginTop: "15px",
    }
}));

function TituloComponent(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.tituloContainer}>
        <div data-aos='fade-right' data-aos-duration='1000' className={classes.divTitulo} id='divTituloHover' >
            <h2>{props.Titulo}</h2>
        </div>
    </div>
  );
}

export default TituloComponent;