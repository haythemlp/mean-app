const Error= require('../config/Error');
const indexController = require('../controllers/index');
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');
module.exports = function (app) {

    app.use('/', indexController);
    app.use('/api/users', usersController);
    app.use('/api/auth', authController);


//404 not found
    app.use(Error.notFound());
// error handler
    app.use(Error.ErrorHandler());

};


