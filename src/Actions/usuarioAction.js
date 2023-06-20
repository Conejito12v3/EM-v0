import HttpCliente from '../HttpCliente';
import axios from 'axios';
import sesionUsuarioReducer from '../Context/reducers/sesionUsuarioReducer';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const loginUsuario = (usuario, dispatch) => { 
    return new Promise((resolve, reject) => {
        instancia.post('/Usuario/login', usuario).then(response => {
            console.log('Response:', response.data);
            
            dispatch({
                type: "INICIAR_SESION",
                usuario: response.data,
                autenticado: true
            });

            resolve(response);
        });
    });
}

export const obtenerUsuarioActual = (dispatch) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/Usuario').then(response => {
            dispatch({
                type: "INICIAR_SESION",
                usuario: response.data,
                autenticado: true
            });
            
            resolve(response);
            
            sesionUsuarioReducer(response.data, dispatch);
        }).catch(error => {
            console.log('Hola hay error:', error);
            resolve(error.response);
        });
    });
}

export const registrarUsuario = (usuario) => {
    
    return new Promise((resolve, reject) => {
        instancia.post('/Usuario/Registrar', usuario).then(response => {
            resolve(response);
        });
    });
}