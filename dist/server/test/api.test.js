'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _nodeMocksHttp = require('node-mocks-http');

var _nodeMocksHttp2 = _interopRequireDefault(_nodeMocksHttp);

var _Vote = require('../controllers/Vote');

var _Vote2 = _interopRequireDefault(_Vote);

var _Verifications = require('../middlewares/Verifications');

var _Verifications2 = _interopRequireDefault(_Verifications);

var _testdata = require('./testdata');

var _testdata2 = _interopRequireDefault(_testdata);

var _creatTables = require('../models/creatTables');

var _creatTables2 = _interopRequireDefault(_creatTables);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = '',
    token1 = '',
    token2 = '',
    token3 = '';

describe('CRUD politico app', function () {
  before(function (done) {
    _creatTables2.default.createTables();

    done();
  });

  it('test POST /api/v1/auth/signup', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').send(_testdata2.default.userSignup).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/signup', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').send(_testdata2.default.userSignup2).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/signup', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/signup').send(_testdata2.default.userSignup3).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/login', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_testdata2.default.user).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);

        if (responseData.status === 400) {
          (0, _chai.expect)(responseData.message).to.be.a('string');
        }
        token = responseData.data[0].token;

        (0, _chai.expect)(response).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/login', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_testdata2.default.user2).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);

        if (responseData.status === 400) {
          (0, _chai.expect)(responseData.message).to.be.a('string');
        }
        token1 = responseData.data[0].token;

        (0, _chai.expect)(response).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/login', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_testdata2.default.user3).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);

        if (responseData.status === 400) {
          (0, _chai.expect)(responseData.message).to.be.a('string');
        }
        token2 = responseData.data[0].token;

        (0, _chai.expect)(response).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/auth/login', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_testdata2.default.user4).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);

        if (responseData.status === 400) {
          (0, _chai.expect)(responseData.message).to.be.a('string');
        }
        token3 = responseData.data[0].token;

        (0, _chai.expect)(response).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/office/:user-id/register', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/office/1/register').send({
      office: _testdata2.default.office[0].id
    }).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[0]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[1]).set('Accept', 'application/json').set('token', token1).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[2]).set('Accept', 'application/json').set('token', token2).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[3]).set('Accept', 'application/json').set('token', token3).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[0]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[1]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[2]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[3]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/parties/:partyId route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/parties/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/parties/:partyId route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/parties/5').set('Accept', 'application/json').expect('Content-Type', /json/).expect(404).end(function (err, response) {
      if (err) throw err;else {
        (0, _chai.expect)(response.statusCode).to.deep.equal(404);
      }

      done();
    });
  });

  it('test PATCH /api/v1/parties/:partyId/name route', function (done) {
    (0, _supertest2.default)(_app2.default).patch('/api/v1/parties/2/name').send({
      name: 'Alliance for Democracy Party'
    }).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test DELETE /api/v1/parties/:partyId route', function (done) {
    (0, _supertest2.default)(_app2.default).delete('/api/v1/parties/3').set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[0]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[1]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[2]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[3]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[4]).set('Accept', 'application/json').set('token', token).expect('Content-Type', /json/).expect(201).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/offices').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/offices/:officeId route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/offices/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/offices/:officeId route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/offices/7').set('Accept', 'application/json').expect('Content-Type', /json/).expect(404).end(function (err, response) {
      if (err) throw err;else {
        (0, _chai.expect)(response.statusCode).to.deep.equal(404);
      }

      done();
    });
  });

  it('test GET /office/office-id/result', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/office/1/result').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test isAdmin function for admin', function (done) {
    var req = _nodeMocksHttp2.default.createRequest({
      headers: {
        token: token
      }
    });

    var res = _nodeMocksHttp2.default.createResponse();
    var next = function next() {};

    _Verifications2.default.isAdmin(req, res, next);
    (0, _chai.expect)(req.userData.isAdmin).to.deep.equal('true');

    done();
  });

  it('test isAdmin function for users', function (done) {
    var req = _nodeMocksHttp2.default.createRequest({
      headers: {
        token: token2
      }
    });

    var res = _nodeMocksHttp2.default.createResponse();
    var next = function next() {};

    _Verifications2.default.isAdmin(req, res, next);
    (0, _chai.expect)(res.statusCode).to.deep.equal(403);

    done();
  });

  it('test loggedIn function for admin', function (done) {
    var req = _nodeMocksHttp2.default.createRequest({
      headers: {
        token: token3
      }
    });

    var res = _nodeMocksHttp2.default.createResponse();
    var next = function next() {};

    _Verifications2.default.loggedIn(req, res, next);

    (0, _chai.expect)(req.userData.id).to.deep.equal(4);
    (0, _chai.expect)(req.userData.isAdmin).to.deep.equal('false');

    done();
  });
});