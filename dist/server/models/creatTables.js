'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _seed = require('../models/seed');

var _seed2 = _interopRequireDefault(_seed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTables = function createTables() {
    var sqlUsers = 'CREATE TABLE users( \n        userid serial, \n        email text PRIMARY KEY NOT NULL, \n        password text, \n        firstname text, \n        lastname text, \n        othername text, \n        telephone text, \n        privilege text, \n        passporturl text)';

    var sqlParties = 'CREATE TABLE parties(\n        partyid serial,\n        name text,\n        hqaddress text,\n        logourl text\n    )';

    var sqlOffices = 'CREATE TABLE offices(\n        officeid integer,\n        type text,\n        name text\n    )';

    var sqlVotes = 'CREATE TABLE votes(\n        officeid integer,\n        candidateid integer,\n        voterid integer\n    )';

    var sqlCandidates = 'CREATE TABLE candidates(\n        officeid integer,\n        userid integer,\n        PRIMARY KEY (officeid, userid)\n    )';

    _db2.default.client.query('DROP TABLE IF EXISTS users', function (err, result) {
        if (err) {
            console.log(err);
        }

        _db2.default.client.query(sqlUsers, function (err, result) {
            if (err) {
                console.log(err);
            }

            _seed2.default.admin();
        });
    });

    _db2.default.client.query('DROP TABLE IF EXISTS parties', function (err, result) {
        if (err) {
            console.log(err);
        }

        _db2.default.client.query(sqlParties, function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    });

    _db2.default.client.query('DROP TABLE IF EXISTS offices', function (err, result) {
        if (err) {
            console.log(err);
        }

        _db2.default.client.query(sqlOffices, function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    });

    _db2.default.client.query('DROP TABLE IF EXISTS votes', function (err, result) {
        if (err) {
            console.log(err);
        }

        _db2.default.client.query(sqlVotes, function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    });

    _db2.default.client.query('DROP TABLE IF EXISTS candidates', function (err, result) {
        if (err) {
            console.log(err);
        }

        _db2.default.client.query(sqlCandidates, function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    });
};

var TestTables = {
    createTables: createTables
};

exports.default = TestTables;