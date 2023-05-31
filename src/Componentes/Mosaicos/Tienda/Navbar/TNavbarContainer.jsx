import * as React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../../../styles/styles.css';


const useStyles = makeStyles((theme) => ({
    tNavbarContainer: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height: '65px',
        width: '100%',
        color: '#fff',
        backgroundColor: '#fff',
        boxShadow: '0 0px 5px 0 rgba(0, 0, 0, 0.12)',
        zIndex: '1000'
    },
    BarraBusquedaContianer: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    BarraBusquedaIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height: '20px',
        width: '20px',
        color: '#222',
    },
    BarraBusqueda: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height: '30px',
        '& input': {
            width: '100%',
            height: '25px',
            border: '0',
            borderBottom: '2px solid #3c3c3c',
            outline: '0',
            fontSize: '1.3rem',
            color: '#222',
            padding: '7px 0',
            background: 'transparent',
            transition: 'border-color 0.2s',
        }
    },
    comboboxContainer: {
        paddingBottom: '30px',
        color: 'white',
    }
}));

const TNavbarContainer = () => {
    const classes = useStyles();
    const [articulo, setArticulo] = React.useState('');
    const [show, setShow] = React.useState(true);

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

    const handleChange = (event) => {
      setArticulo(event.target.value);
      console.log(articulo);
    };
  
    
    return (
        <div className={`tNavbarContainer ${show && 'tNavbarContainerHidden'}`}>
            <div className={classes.BarraBusquedaContianer}>
                <div className={classes.BarraBusqueda}>
                    <input type="text" />
                    <div className={classes.BarraBusquedaIcon}>
                        <i className="material-icons">search</i>
                    </div>
                </div>
                <div className={classes.comboboxContainer}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxHeight: 35 }}>
                        <InputLabel 
                        style={{color: '#3c3c3c'}}
                        id="demo-simple-select-standard-label">Articulo</InputLabel>
                        <Select
                        style={{color: '#3c3c3c'}}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={articulo}
                        onChange={handleChange}
                        label="Age"
                        >
                        <MenuItem value={10}>Libros</MenuItem>
                        <MenuItem value={20}>Pinturas</MenuItem>
                        <MenuItem value={30}>Regalos </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default TNavbarContainer