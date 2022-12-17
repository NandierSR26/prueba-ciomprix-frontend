import axios from 'axios';

export const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

// Todo: configurar interceptores
clienteAxios.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    return config;
})