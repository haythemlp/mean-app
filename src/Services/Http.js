import http from 'axios';

const domain = "http://127.0.0.1:8000/api/";


export default class Http {


    static get(url) {

        return http.get(domain + url, {headers: {Authorization: this.getToken()}});
    }

    static post(url, data) {

        return http.post(domain + url, data, {headers: {Authorization: this.getToken()}});
    }

    static put(url, data) {

        return http.put(domain + url, data, {headers: {Authorization: this.getToken()}});
    }

    static delete(url) {

        return http.delete(domain + url, {headers: {Authorization: this.getToken()}});
    }

    static getToken() {

        return 'Bearer ' + localStorage.getItem('token');
    }
}

