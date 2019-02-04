'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _testdata = require('./testdata');

var _testdata2 = _interopRequireDefault(_testdata);

var _creatTables = require('../models/creatTables');

var _creatTables2 = _interopRequireDefault(_creatTables);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  it('test POST /api/v1/auth/login', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/auth/login').send(_testdata2.default.user).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(response).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/office/:user-id/register', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/office/1/register').set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[0]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[1]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/votes/', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/votes').send(_testdata2.default.votes[2]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[0]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[1]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[2]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/parties').send(_testdata2.default.party[3]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test GET /api/v1/parties route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/parties').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
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

  it('test PATCH /api/v1/parties/:partyId/name route', function (done) {
    (0, _supertest2.default)(_app2.default).patch('/api/v1/parties/2/name').send('Alliance for Democracy Party').set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test DELETE /api/v1/parties/:partyId route', function (done) {
    (0, _supertest2.default)(_app2.default).delete('/api/v1/parties/3').set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[0]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[1]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[2]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[3]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
      }

      done();
    });
  });

  it('test POST /api/v1/offices route', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/offices').send(_testdata2.default.office[4]).set('Accept', 'application/json').set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs').expect('Content-Type', /json/).expect(200).end(function (err, response) {
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

  it('test GET /api/v1/offices/:partyId route', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/offices/3').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, response) {
      if (err) throw err;else {
        var responseData = JSON.parse(response.text);
        (0, _chai.expect)(responseData).to.be.a('object');
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
});