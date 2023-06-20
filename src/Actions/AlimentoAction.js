import HttpCliente from '../HttpCliente';
import axios from 'axios';

export const obtenerAlimento = () => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/Alimentos').then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const registrarAlimento = (alimento) => {
    return new Promise((resolve, reject) => {
        HttpCliente.post('/Alimentos', alimento).then(response => {
            resolve(response);
        }).catch(error => {console.log(error)})
    });
}

export const eliminarAlimento = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.delete(`/Alimentos/${id}`).then(response => {
            resolve(response);
        })
    });
}

export const obtenerAlimentoPorId = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/Alimentos/${id}`).then(response => {
            resolve(response);
        })
    });
}

export const editarPlatillo = (id, alimento) => {
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/Alimentos/${id}`, alimento).then(response => {
            resolve(response);
        });
    });
}