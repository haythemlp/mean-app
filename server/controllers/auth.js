const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const authMiddleware = require('../middleware/auth');
router.post('/register', function (req, res) {
    const data = req.body;
    const finalUser = new User(data)
    return finalUser.save()
        .then(() => res.json({success: true}))
        .catch(err => {
            return res.status(400).send(err);

        });

});

router.post('/login', function (req, res) {
    console.log(req.body);

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user,
                error:err
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            return res.json(user.toAuthJSON());
        });
    })(req, res);


});

router.get('/profile', authMiddleware.authenticated(), function (req, res, next) {
    res.send(req.user);
});
module.exports = router;
