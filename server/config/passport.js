const passport = require('passport');
const LocalStrategy = require('passport-local');

const passportJWT = require("passport-jwt");
const {ExtractJwt, Strategy} = passportJWT;

const UserModel = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    UserModel.findOne({email}).select("+password")
        .then((user) => {

            if (!user) return done(null, false, {errors: {'email or password': 'is invalid'}});
            user.isValidPassword(password).then(c => {
                if (c) return done(null, user);
                return done(null, false, {errors: {'email or password': 'is invalid'}});
            })

        }).catch(done);
}));

passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, (jwtPayload, done) => {

    return UserModel.findById(jwtPayload.id)
        .then((user) => {
            return done(null, user);
        }).catch(err => done({message: err}));
}));
