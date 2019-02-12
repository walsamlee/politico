'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var signup = function signup(req, res) {
  var result = _Validations2.default.validateUser(req.body);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  var pword = req.body.password;
  var isAdmin = false;

  _bcrypt2.default.hash(pword, 10, function (err, hash) {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'Password cannot be hashed'
      });
    }

    var query = {
      text: 'INSERT INTO users(email, password, firstname, lastname, othername, telephone, privilege, passporturl) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
      values: [req.body.email, hash, req.body.firstname, req.body.lastname, req.body.othername, req.body.phoneNumber, isAdmin, req.body.passportUrl]
    };

    _db2.default.client.query(query, function (err, result) {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail.replace(/[=,(,)]/gi, '')
        });
      }

      _db2.default.client.query('SELECT * FROM users WHERE email=$1', [req.body.email], function (err, result) {
        if (err) {
          return res.status(400).json({
            status: 400,
            message: err.detail.replace(/[=,(,)]/gi, '')
          });
        }

        _jsonwebtoken2.default.sign({
          id: result.rows[0].userid,
          isAdmin: result.rows[0].privilege
        }, process.env.SECRET, {
          expiresIn: '1y'
        }, function (err, loginToken) {
          if (err) {
            return res.status(400).json({
              status: 400,
              message: err
            });
          }

          return res.json({
            status: 200,
            data: [{
              token: loginToken,
              user: {
                id: result.rows[0].userid,
                passportUrl: result.rows[0].passporturl,
                name: result.rows[0].firstname + ' ' + result.rows[0].lastname + ' ' + result.rows[0].othername,
                email: result.rows[0].email,
                phoneNumber: result.rows[0].telephone,
                isAdmin: result.rows[0].privilege
              }
            }]
          });
        });
      });
    });
  });
};

var login = function login(req, res) {
  var result = _Validations2.default.validateUserLogin(req.body);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  _db2.default.client.query('SELECT * FROM users WHERE email=$1', [req.body.email], function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'Data cannot be added to database'
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: 'User with email ' + req.body.email + ' not found'
      });
    }

    _bcrypt2.default.compare(req.body.password, result.rows[0].password, function (err, response) {
      if (response) {
        _jsonwebtoken2.default.sign({
          id: result.rows[0].userid,
          isAdmin: result.rows[0].privilege
        }, process.env.SECRET, {
          expiresIn: '1y'
        }, function (err, loginToken) {
          if (err) {
            return res.status(400).json({
              status: 400,
              message: 'Error generating token'
            });
          }

          return res.json({
            status: 200,
            data: [{
              token: loginToken,
              user: {
                id: result.rows[0].userid,
                passportUrl: result.rows[0].passporturl,
                name: result.rows[0].firstname + ' ' + result.rows[0].lastname + ' ' + result.rows[0].othername,
                email: result.rows[0].email,
                phoneNumber: result.rows[0].telephone,
                isAdmin: result.rows[0].privilege
              }
            }]
          });
        });
      } else {
        return res.status(400).json({
          status: 400,
          message: 'Invalid username or password'
        });
      }
    });
  });
};

var Auth = {

  login: login,
  signup: signup
};

exports.default = Auth;