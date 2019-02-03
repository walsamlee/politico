'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dbToUse = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/politico'
  },
  test: {
    client: 'pg',
    connection: ''
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

exports.default = dbToUse;