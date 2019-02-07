import request from 'supertest';
import { expect } from 'chai';
import http from 'node-mocks-http';

import Vote from '../controllers/Vote';
import Auth from '../middlewares/Verifications';
import testdata from './testdata';
import TestTables from '../models/creatTables';
import app from '../app';

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

  it('test POST /api/v1/auth/login', (done) => {
    request(app)
      .get('/api/v1/auth/login')
      .send(testdata.user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        if (err) throw err;
        else {
          const responseData = JSON.parse(response.text);
          if(responseData.status === 400) {
            expect(responseData.message).to.deep.equal('Invalid username or password');
          }
          expect(response).to.be.a('object');
        }

        done();
      });
  });

  it('test POST /api/v1/office/:user-id/register', (done) => {
    request(app)
      .post('/api/v1/office/1/register')
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[0])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y')
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

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[1])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y')
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

  it('test POST /api/v1/votes/', (done) => {
    request(app)
      .post('/api/v1/votes')
      .send(testdata.votes[2])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y')
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

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[0])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[1])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[2])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test POST /api/v1/parties route', (done) => {
    request(app)
      .post('/api/v1/parties')
      .send(testdata.party[3])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test GET /api/v1/parties route', (done) => {
    request(app)
      .get('/api/v1/parties')
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

  it('test PATCH /api/v1/parties/:partyId/name route', (done) => {
    request(app)
      .patch('/api/v1/parties/2/name')
      .send('Alliance for Democracy Party')
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .send(testdata.office[1])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .send(testdata.office[2])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .send(testdata.office[3])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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
      .send(testdata.office[4])
      .set('Accept', 'application/json')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
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

  it('test GET /api/v1/offices/:partyId route', (done) => {
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
      const adminTestDecode = {
          "id": 3,
          "email": "user3@politico.com",
          "privilege": 1,
          "iat": 1549401664,
          "exp": 1580959264
        }
      const req = http.createRequest({
          headers: {
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0Bwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTQwMTY2NCwiZXhwIjoxNTgwOTU5MjY0fQ.0l8bspMrUvO9bYB3koEG6qSP0xtwni3xOJ245S0qBPo"
          }
      });

      const res = http.createResponse();
      const next = () => {};

      Auth.isAdmin(req, res, next);
      
      expect(req.userData).to.deep.equal(adminTestDecode);
      expect(req.userData.privilege).to.deep.equal(adminTestDecode.privilege);
      
      done();
  });

  it('test loggedIn function for admin', (done) => {
      const adminTestDecode = {
          "id": 3,
          "email": "user3@politico.com",
          "privilege": 1,
          "iat": 1549401664,
          "exp": 1580959264
        }
      const req = http.createRequest({
          headers: {
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0Bwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTQwMTY2NCwiZXhwIjoxNTgwOTU5MjY0fQ.0l8bspMrUvO9bYB3koEG6qSP0xtwni3xOJ245S0qBPo"
          }
      });

      const res = http.createResponse();
      const next = () => {};

      Auth.loggedIn(req, res, next);
      
      expect(req.userData).to.deep.equal(adminTestDecode);
      
      done();
  });

  it('test cast vote function for admin', (done) => {
      const testVote = {
        office: 1,
        candidate: 4,
        voter: 1,
      }

      const req = http.createRequest({
        body: testVote,
        headers: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0Bwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTQwMTY2NCwiZXhwIjoxNTgwOTU5MjY0fQ.0l8bspMrUvO9bYB3koEG6qSP0xtwni3xOJ245S0qBPo"
        }

      });

      const res = http.createResponse();
      const next = () => {};

      Vote.castVote(req, res);
      expect(res.statusCode).to.deep.equal(200);
      
      done();
  });
  
});
