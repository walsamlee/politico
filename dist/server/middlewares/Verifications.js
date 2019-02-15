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
      return res.status(401).json({
        status: 401,
        error: err.message
      });
    }

    req.userData = decoded;

    next();
  });
};

var isAdmin = function isAdmin(req, res, next) {
  var token = req.headers.token;

  _jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        status: 401,
        error: err.message
      });
    }

    if (decoded.isAdmin !== 'true') {
      return res.status(403).json({
        status: 403,
        error: "Access forbidden"
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