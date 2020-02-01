import axios from 'axios';

const token = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token

const domain = "http://127.0.0.1:8000/api/";

export default class Http {
    static get(url) {

        return axios.get(domain + url );
    }

    static post(url, data) {

        return axios.get(domain + url, data);
    }

    static put(url, data) {

        return axios.get(domain + url, data);
    }

    static delete(url) {

        return axios.get(domain + url);
    }
}


