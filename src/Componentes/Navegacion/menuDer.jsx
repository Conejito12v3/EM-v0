import React from "react";
import logo from '../../StaticFiles/logo.png';
import '../styles/styles.css';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const MenuIzqComponent = ({classes}) => {


    return (
            <div className={ classes.list }>
            <List>
                <ListItem button to='/auth/perfil'>
                    <div className="logoContainer">
                        <img src={ logo } alt='' class='logo' />
                    </div>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button to='/tienda'>
                    <i className="material-icons">photo</i>
                    <ListItemText classes={{primary: classes.ListItemText}} primary=' Gallery' />
                </ListItem>
                <ListItem  button to='/eventos'>
                    <i className="material-icons">dining</i>
                    <ListItemText classes={{primary: classes.ListItemText}} primary=" Eventos" />
                </ListItem>
                <ListItem button to='/menu'>
                    <i className="material-icons">dining</i>
                    <ListItemText classes={{primary: classes.ListItemText}} primary=" Restaurant & Cafe" />
                </ListItem>
                <ListItem  button to='/tienda'>
                    <i className="material-icons">store</i>
                    <ListItemText classes={{primary: classes.ListItemText}} primary=" Shop" />
                </ListItem>
            </List>
        </div>
    )
}

export default MenuIzqComponent;