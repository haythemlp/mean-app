import httpService from './Http'

export default class Auth {

    static isAuthenticated() {
        return httpService.get('auth/profile');

    }

    static async login(data) {

        return httpService.post('auth/login', data)
    }

    static async register(data) {

        return httpService.post('auth/register', data)
    }


}


