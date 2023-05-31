import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        width: '100%',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1c1c1c",
        marginTop: '100px',
        
    }
}));

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>

        </div>
    )
}

export default FooterComponent