'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./routes/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/uploads', _express2.default.static('uploads'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

var port = process.env.PORT || 3000;

app.use((0, _cors2.default)());

app.use('/api/v1', _router2.default);

var server = app.listen(port, function () {
  console.log('App listening on port ' + port);
});

// catch 404
app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    message: 'Not found'
  });
});

exports.default = server;