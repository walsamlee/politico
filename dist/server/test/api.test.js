'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _testdata = require('./testdata');

var _testdata2 = _interopRequireDefault(_testdata);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CRUD politico app', function () {
    it('test POST /auth/signup', function (done) {
        (0, _supertest2.default)(_app2.default).post('/auth/signup').send(_testdata2.default.user).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('array');
            }

            done();
        });
    });

    it('test POST /auth/login', function (done) {
        (0, _supertest2.default)(_app2.default).post('/auth/login').send(_testdata2.default.userLogin).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('array');
            }

            done();
        });
    });

    it('test POST /office/:user-id/register', function (done) {
        (0, _supertest2.default)(_app2.default).post('/office/1/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test POST /votes/', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.votes[0]).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('object');
            }

            done();
        });
    });

    it('test POST /offices/office-id/result', function (done) {
        (0, _supertest2.default)(_app2.default).post('/offices/1/').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.data).to.be.a('array');
            }

            done();
        });
    });

    it('test POST /api/v1/parties route', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.partyPost).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response).to.be.a('object');
                (0, _chai.expect)(response.body.data).to.deep.equal(_testdata2.default.partyPost);
            }

            done();
        });
    });

    it('test GET /api/v1/parties route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/parties').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data).to.deep.equal(_testdata2.default.afterPostParty);
            }

            done();
        });
    });

    it('test GET /api/v1/parties/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/parties/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data.id).to.deep.equal(_testdata2.default.party[0].id);
                (0, _chai.expect)(response.body.data.name).to.deep.equal(_testdata2.default.party[0].name);
                (0, _chai.expect)(response.body.data.logoUrl).to.deep.equal(_testdata2.default.party[0].logoUrl);
            }

            done();
        });
    });

    it('test PATCH /api/v1/parties/:partyId/:name route', function (done) {
        (0, _supertest2.default)(_app2.default).patch('/api/v1/parties/4/Alliance for Democracy Party').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data.id).to.deep.equal(4);
                (0, _chai.expect)(response.body.data.name).to.deep.equal('Alliance for Democracy Party');
            }

            done();
        });
    });

    it('test DELETE /api/v1/parties/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).delete('/api/v1/parties/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data.message).to.deep.equal('Party with ID 3 has been deleted');
            }

            done();
        });
    });

    it('test POST /api/v1/offices route', function (done) {
        (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.officePost).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data).to.deep.equal(_testdata2.default.officePost);
            }

            done();
        });
    });

    it('test GET /api/v1/offices route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/offices').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data).to.deep.equal(_testdata2.default.afterPostOffice);
            }

            done();
        });
    });

    it('test GET /api/v1/offices/:partyId route', function (done) {
        (0, _supertest2.default)(_app2.default).get('/api/v1/offices/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
            if (err) throw err;else {
                (0, _chai.expect)(response.body).to.be.a('object');
                (0, _chai.expect)(response.body.data[0]).to.deep.equal(_testdata2.default.office[2]);
            }

            done();
        });
    });
});