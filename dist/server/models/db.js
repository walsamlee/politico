'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var connectionStr = 'postgres://hwzadaoc:aREdqc0ZeJDcFY0NuW_xSt9YH-_SiA3k@baasu.db.elephantsql.com:5432/hwzadaoc';

var client = new _pg.Pool({
  connectionString: connectionStr
});

client.connect(function (err) {
  if (!err) return console.log('Connected to db');
});

var db = {
  client: client
};

exports.default = db;