const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const authMiddleware = require('../middleware/auth')


router.get('/', function (req, res) {
    authMiddleware.authenticated(req,res,next);
    userModel.find({}).then((err, data) => {
        if (err) res.status(400).json(err);
        res.send(data);

    });
});

module.exports = router;
