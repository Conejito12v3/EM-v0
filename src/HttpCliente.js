import axios from 'axios';

axios.defaults.baseURL = 'http://proyectoiw.somee.com/api/';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token_seguridad');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
};

export default requestGenerico;