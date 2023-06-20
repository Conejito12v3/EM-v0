import HttpCliente from '../HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarRs = (rs) => {
    return new Promise((resolve, reject) => {
        HttpCliente.post('/RS', rs).then(response => {
            console.log('response: ', response.data);
            resolve(response);
        }).catch(error => {console.log('error: ', error);});
    });
}

export const eliminarRS = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.delete(`/RS/${id}`).then(response => {
            resolve(response);
        });
    });
}

export const obtenerRSPorId = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/RS/${id}`).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const editarRS = (id, rs) => {
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/RS/${id}`, rs).then(response => {
            resolve(response);
        });
    });
}