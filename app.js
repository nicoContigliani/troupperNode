const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dataOrder = require('./routes/dataOrder');
const student = require('./routes/student')
const subject = require('./routes/subject')
const studentSubject = require('./routes/studentSubject')
const player = require('./routes/player')
const game = require('./routes/game')
const gamePlayer = require('./routes/gameplayer')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/dataOrder', dataOrder)

app.use('/student', student)
app.use('/subject', subject)
app.use('/studentSubject', studentSubject)

app.use('/player', player)
app.use('/game', game)
app.use('/gamePlayer', gamePlayer)





// player
// game
// gamePlayer





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
