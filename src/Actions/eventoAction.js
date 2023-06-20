import HttpCliente from '../HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const obtenerEventos = () => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/Eventos').then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const obtenerEventoPorId = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/Eventos/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
            console.log(error.response);
        });
    });
}

export const registrEventos = (evento) => {
    return new Promise((resolve, reject) => {
        HttpCliente.post('/Eventos', evento).then(response => {
            resolve(response);
        }).catch(error => {console.log(resolve(error.response))})
    });
}

export const actualizarEventos = (id, evento) => {
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/Eventos/${id}`, evento).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const eliminarEventos = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.delete(`/Eventos/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}