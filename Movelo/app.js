var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookie = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override');
const session = require ('express-session');


var inicioRouter = require('./routes/inicio'); //inicio
var usersRouter = require('./routes/users'); //users
var usersRouterApi = require('./routes/api/usersApi'); //usersApi
var servicesRouterApi = require('./routes/api/servicesApi'); //servicesApi
var servicesRouter = require('./routes/services'); //services
var userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret: 'Shh, es un secreto!',
                 resave: false,
                 saveUninitialized: false,}));
app.use(userLoggedMiddleware);


// routers
app.use('/', inicioRouter);
app.use('/users', usersRouter);
app.use('/api/users', usersRouterApi);
app.use('/servicios', servicesRouter);
app.use('/api/servicios', servicesRouterApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
