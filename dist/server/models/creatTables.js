'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTables = function createTables() {
    _db2.default.client.query('DROP TABLE IF EXISTS users', function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            };
        }
    });

    _db2.default.client.query('DROP TABLE IF EXISTS parties', function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            };
        }
    });

    _db2.default.client.query('DROP TABLE IF EXISTS offices', function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            };
        }
    });

    _db2.default.client.query('DROP TABLE IF EXISTS votes', function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            };
        }
    });

    var sqlUsers = 'CREATE TABLE users( \n        userid integer, \n        email text PRIMARY KEY NOT NULL, \n        password text, \n        firstname text, \n        lastname text, \n        othername text, \n        telephone text, \n        privilege text, \n        passporturl text)';

    var sqlParties = 'CREATE TABLE parties(\n        partyid integer,\n        name text,\n        hqaddress text,\n        logourl text\n    )';

    var sqlOffices = 'CREATE TABLE offices(\n        officeid integer,\n        type text,\n        name text\n    )';

    var sqlVotes = 'CREATE TABLE votes(\n        officeid integer,\n        candidateid integer,\n        voterid integer\n    )';

    _db2.default.client.query(sqlUsers, function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });

    _db2.default.client.query(sqlParties, function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });

    _db2.default.client.query(sqlOffices, function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });

    _db2.default.client.query(sqlVotes, function (err, result) {
        if (err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });
};

var TestTables = {
    createTables: createTables
};

exports.default = TestTables;