'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var connectionStr = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

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