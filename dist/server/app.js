'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _authRoute = require('./routes/authRoute');

var _authRoute2 = _interopRequireDefault(_authRoute);

var _router = require('./routes/router');

var _router2 = _interopRequireDefault(_router);

var _voteRouter = require('./routes/voteRouter');

var _voteRouter2 = _interopRequireDefault(_voteRouter);

var _officeRouter = require('./routes/officeRouter');

var _officeRouter2 = _interopRequireDefault(_officeRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

var port = process.env.PORT || 3000;

app.use('/api/v1', _router2.default);

var server = app.listen(port, function () {
  console.log('App listening on port ' + port);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {
      status: 404
    }
  });
});

exports.default = server;