'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var admin = function admin() {
    var email = 'user1@politico.com',
        password = '$2b$10$M4CrW.a0sfW1SbgWKFBi0OAAWCR5jYAX6YzFeQ7c9dsTS/l6EHHzG',
        firstname = 'Akinwale',
        lastname = 'Samuel',
        othername = 'Michael',
        telephone = '1234567890',
        privilege = 'true',
        passporturl = 'uploads/mypic.png';

    var adminQuery = {
        text: 'INSERT INTO users(email, password, firstname, lastname, othername, telephone, privilege, passporturl) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values: [email, password, firstname, lastname, othername, telephone, privilege, passporturl]
    };

    _db2.default.client.query(adminQuery, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
};

var Seed = {
    admin: admin
};

exports.default = Seed;