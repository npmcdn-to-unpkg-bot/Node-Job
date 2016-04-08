/**
 * Clove - api
 * (c) 2016
 */
var jwt = require('jwt-simple');
var mongoose = require('mongoose');
var express = require('express');
var moment = require('moment');
var router = express.Router();

var User = mongoose.model('User', require('../models/user.js'));
var config = require('../config');

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
router.get('/me', ensureAuthenticated, function (req, res) {
    User.findById(req.user, function (err, user) {
        res.send(user);
    });
});

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */
router.put('/me', ensureAuthenticated, function (req, res) {
    User.findById(req.user, function (err, user) {
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        user.displayName = req.body.displayName || user.displayName;
        user.email = req.body.email || user.email;
        user.picture = req.body.picture || user.picture;
        user.save(function(err) {
            res.status(200).end();
        });
    });
});

/*
 |--------------------------------------------------------------------------
 | FUNCTIONS
 |--------------------------------------------------------------------------
 */
function ensureAuthenticated(req, res, next) {
    if (!req.header('Authorization')) {
        return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
    }
    var token = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
        payload = jwt.decode(token, config.TOKEN_SECRET);
    } catch (err) {
        return res.status(401).send({ message: err.message });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'Token has expired' });
    }
    req.user = payload.sub;
    next();
}

module.exports = router;

// EOF
