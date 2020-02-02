const passport = require('passport');

class Auth {

    static authenticated(req, res, next) {

      return   passport.authenticate('jwt', {session: false}, (err, user, info) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            if (!user) {
                return res.status(400).json({
                    status: 'error',
                    message: 'ANOTHORIZED_USER'
                });
            }
            // Forward user information to the next middleware
            req.user = user;
            next();
        })(req, res, next)
    }
}


module.exports = Auth;
