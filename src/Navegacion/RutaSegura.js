import React from 'react';
import { useStateValue } from '../Context/store';
import { useNavigate, Route } from 'react-router-dom';
import LoginComponent from '../Componentes/Usuario/loginComponent';

const RutaSegura = ({ Component: Component, ...rest }) => {
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <Route 
            {...rest}
            render = { props =>
                sesionUsuario ? (
                    sesionUsuario.autenticado === true ? (
                        <Component {...props} {...rest} />
                    )
                    : <Route path='/login' exact element={<LoginComponent />} />
                ) : <Route path='/Login' exact element={<LoginComponent />} />
            }
        />
    );
}

export default RutaSegura;