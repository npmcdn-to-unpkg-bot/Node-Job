/**
 * Clove Server
 * (c) 2016
 */

var path = require('path');
var qs = require('querystring');
var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
var mongoose = require('mongoose');
var request = require('request');


var auth = require('./auth/auth.js');
var api = require('./api/api.js');
var upload = require('./upload/upload.js');
var config = require('./config');

/*
 |--------------------------------------------------------------------------
 | DATABASE
 |--------------------------------------------------------------------------
 */

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

/*
 |--------------------------------------------------------------------------
 | EXPRESS
 |--------------------------------------------------------------------------
 */
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
 |--------------------------------------------------------------------------
 | ENDPOINTS
 |--------------------------------------------------------------------------
 */
app.use('/auth', auth);
app.use('/api', api);
app.use('/upload',upload);


app.use(express.static('app'));
app.set('views', __dirname + '/app'); // Specify the folder to find templates
app.set('view engine', 'ejs'); // Set the template engine

app.get('/', function(req, res) {
    res.render('index.html');
});


/*
// Force HTTPS on Heroku
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}
app.use(express.static(path.join(__dirname, '../../client')));
*/

/*
 |--------------------------------------------------------------------------
 | START
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), function() {
    console.log('Clove listening on port ' + app.get('port'));
});

// EOF
