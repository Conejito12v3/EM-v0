import HttpCliente from '../HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const obtenerProductor = () => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/Productores').then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const obtenerProductorPorId = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/Productores/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const registrarProductor = (productor) => { 
    return new Promise((resolve, reject) => {
        HttpCliente.post('/Productores', productor).then(response => {
            resolve(response);
        }).catch(error => {
            console.log(resolve(error.response));
        });
    });
}

export const actualizarProductor = (id, productor) => {
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/Productores/${id}`, productor).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const eliminarProductor = (id) => {
    return new Promise((resolve, reject) => {
        
        console.log(`/Productores/${id}`);
        HttpCliente.delete(`/Productores/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}