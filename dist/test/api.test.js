'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _testdata = require('./testdata');

var _testdata2 = _interopRequireDefault(_testdata);

var _app = require('../api/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CRUD politico app', function () {
    it('test POST /api/v1/party route', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/party').send(_testdata2.default.partyPost).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test GET /api/v1/party route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/party').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.status).to.be.a('array');
            }

            done();
        });
    });

    it('test GET /api/v1/party/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/party/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test PUT /api/v1/party/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).put('/api/v1/party/4').send(_testdata2.default.partyPut).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test DELETE /api/v1/party/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).delete('/api/v1/party/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test POST /api/v1/office route', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/office').send(_testdata2.default.officePost).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test PUT /api/v1/office/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).put('/api/v1/office/4').send(_testdata2.default.officePut).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test DELETE /api/v1/office/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).delete('/api/v1/office/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });
});