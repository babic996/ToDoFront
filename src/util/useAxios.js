import axios from 'axios';

const req = axios.create({ baseURL: 'https://api-nodejs-todolist.herokuapp.com' });

export const useRequest = () => {
    var token = localStorage.getItem('token-pass');
    if (token) {
        req.defaults.headers.common.Authorization = token;
    }

    return req;
}
