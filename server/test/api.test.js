import request from 'supertest';
import { expect } from 'chai';
import http from 'node-mocks-http';

import Vote from '../controllers/Vote';
import Auth from '../middlewares/Verifications';
import testdata from './testdata';
import TestTables from '../models/creatTables';
import app from '../app';

let 
  token = '',
  token1 = '',
  token2 = '',
  token3 = '';

describe('CRUD politico app', () => {
  before((done) => {
    TestTables.createTables();

    done();
  });

  it('test POST /api/v1/auth/signup', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send(testdata.userSignup)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/signup', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send(testdata.userSignup2)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/signup', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send(testdata.userSignup3)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send(testdata.user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);

          if(responseData.status === 400) {
            expect(responseData.message).to.be.a('string');
          }
          token = responseData.data[0].token;

          expect(response).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send(testdata.user2)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);

          if(responseData.status === 400) {
            expect(responseData.message).to.be.a('string');
          }
          token1 = responseData.data[0].token;

          expect(response).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send(testdata.user3)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);

          if(responseData.status === 400) {
            expect(responseData.message).to.be.a('string');
          }
          token2 = responseData.data[0].token;

          expect(response).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/auth/login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send(testdata.user4)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);

          if(responseData.status === 400) {
            expect(responseData.message).to.be.a('string');
          }
          token3 = responseData.data[0].token;

          expect(response).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/office/:user-id/register', (done) => {
    request(app)
      .post('/api/v1/office/1/register')
      .send({
        office: testdata.office[0].id
      })
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[0])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[1])
      .set('Accept', 'application/json')
      .set('token', token1)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[2])
      .set('Accept', 'application/json')
      .set('token', token2)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[3])
      .set('Accept', 'application/json')
      .set('token', token3)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[0])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[1])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[2])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[3])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test GET /api/v1/parties/:partyId route', (done) => {
    request(app)
      .get('/api/v1/parties/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test GET /api/v1/parties/:partyId route', (done) => {
    request(app)
      .get('/api/v1/parties/5')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, response) => {
        if (err) throw err;
        else {
          expect(response.statusCode).to.deep.equal(404);
        }

        done();
      });
  });

  it('test PATCH /api/v1/parties/:partyId/name route', (done) => {
    request(app)
      .patch('/api/v1/parties/2/name')
      .send({
        name: 'Alliance for Democracy Party'
      })
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test DELETE /api/v1/parties/:partyId route', (done) => {
    request(app)
      .delete('/api/v1/parties/3')
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/offices route', (done) => {
    request(app)
      .post('/api/v1/offices')
      .send(testdata.office[0])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/offices route', (done) => {
    request(app)
      .post('/api/v1/offices')
      .send(testdata.office[1])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/offices route', (done) => {
    request(app)
      .post('/api/v1/offices')
      .send(testdata.office[2])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/offices route', (done) => {
    request(app)
      .post('/api/v1/offices')
      .send(testdata.office[3])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/offices route', (done) => {
    request(app)
      .post('/api/v1/offices')
      .send(testdata.office[4])
      .set('Accept', 'application/json')
      .set('token', token)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test GET /api/v1/offices route', (done) => {
    request(app)
      .get('/api/v1/offices')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test GET /api/v1/offices/:officeId route', (done) => {
    request(app)
      .get('/api/v1/offices/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test GET /api/v1/offices/:officeId route', (done) => {
    request(app)
      .get('/api/v1/offices/7')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, response) => {
        if (err) throw err;
        else {
          expect(response.statusCode).to.deep.equal(404);
        }

        done();
      });
  });

  it('test GET /office/office-id/result', (done) => {
    request(app)
      .get('/api/v1/office/1/result')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          expect(responseData).to.be.a('object');
        }

        done();
      });
  });

  it('test isAdmin function for admin', (done) => {
      const req = http.createRequest({
          headers: {
              token,
          }
      });

      const res = http.createResponse();
      const next = () => {};

      Auth.isAdmin(req, res, next);
      expect(req.userData.isAdmin).to.deep.equal('true');
      
      done();
  });

  it('test isAdmin function for users', (done) => {
      const req = http.createRequest({
          headers: {
              token: token2,
          }
      });

      const res = http.createResponse();
      const next = () => {};

      Auth.isAdmin(req, res, next);
      expect(res.statusCode).to.deep.equal(403);
      
      done();
  });

  it('test loggedIn function for admin', (done) => {
      const req = http.createRequest({
          headers: {
              token: token3
          }
      });

      const res = http.createResponse();
      const next = () => {};

      Auth.loggedIn(req, res, next);

      expect(req.userData.id).to.deep.equal(4);
      expect(req.userData.isAdmin).to.deep.equal('false');
      
      done();
  }); 
});
