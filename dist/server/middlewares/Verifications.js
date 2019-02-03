'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var loggedIn = function loggedIn(req, res, next) {
  var token = req.headers.token;

  _jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res.json({
        status: 401,
        message: 'Unauthorized access'
      });
    }

    req.userData = decoded;

    // res.status(200);

    next();
  });
};

var isAdmin = function isAdmin(req, res, next) {
  var token = req.headers.token;

  _jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res.json({
        status: 401,
        message: 'Unauthorized access'
      });
    }

    if (decoded.privilege !== 1) {
      return res.json({
        status: 401,
        message: 'Unauthorized access'
      });
    }

    req.userData = decoded;

    next();
  });
};

var Verifications = {
  loggedIn: loggedIn,
  isAdmin: isAdmin
};

exports.default = Verifications;