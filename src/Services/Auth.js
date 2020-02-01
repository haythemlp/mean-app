import httpService from './Http'

export default class Auth {

    static async isAuthenticated() {

        return await httpService.get('auth/profile').then((res) => {
            console.log(res);
            return true


        }).catch(err => {
            console.log(err);
            return false;

        });


    }


}

