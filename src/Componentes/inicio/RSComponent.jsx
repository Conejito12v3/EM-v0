import React from 'react';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstaIcon from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    rsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100px',
        marginLeft: '10px',
        position: 'fixed',
        top: '95%',
        zIndex: '1000',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '5px',
    }
}));

const RSComponent = () => {
    const classes = useStyles();

    const faceClick = () => {
        window.open('https://www.facebook.com/profile.php?id=100089847501183&mibextid=ZbWKwL');
    }

    return (
        <div className={classes.rsContainer}>
            <div className='rs face' onClick={faceClick}>
                <FacebookIcon />
            </div>
            <div className='rs insta'>
                <InstaIcon />
            </div>
            <div className='rs twitter'>
                <Twitter />
            </div>
        </div>
    )
}

export default RSComponent