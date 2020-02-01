const passport = require('passport');

class Auth {

    static  authenticated() {
        console.log('hey')

        return  passport.authenticate('jwt', {session: false})
    }
}


module.exports = Auth;
