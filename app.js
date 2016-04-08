var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');


var routes = require('./routes/index');
var job = require('./routes/job');
var users = require('./routes/users');
var register = require('./routes/register');
var login = require('./routes/login');
var dashboard = require('./routes/dashboard');
var forget_password = require('./routes/forget_password');
var reset_password = require('./routes/reset_password');
var verify = require('./routes/verify');
var logout = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//partials
var fs = require('fs');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var session = require('express-session');
app.use(session({
  cookieName: 'session',
  secret: 'hao',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

var flash = require('connect-flash');
app.use(flash());

//database
var connectString = 'mongodb://localhost:27017/user';
mongoose.connect(connectString);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//static files
app.use(express.static(path.join(__dirname, 'public')));


//------------config passport----------------//

var passport = require('passport');
// Init passport authentication
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
require('./config/passport')(passport);
//----------------------------------------------//

app.use('/', routes);
app.use('/users', users);
app.use('/register',register);
app.use('/login',login);
app.use('/dashboard',dashboard);
app.use('/forget_password',forget_password);
app.use('/reset_password',reset_password);
app.use('/verify',verify);
app.use('/logout',logout);
app.use('/job',job);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
