import HttpCliente from '../HttpCliente';

export const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/Productos').then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        });
    });
}

export const insertarProducto = (producto) => {
    return new Promise((resolve, reject) => {
        HttpCliente.post('/Productos', producto).then(response => {
            resolve(response);
        }).catch(error => {console.log('error: ', resolve(error.response));});
    });
}

export const eliminarProducto = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.delete(`/Productos/${id}`).then(response => {
            resolve(response);
        }).catch(error => {console.log('error: ', error.response);});
    });
}