import request from 'supertest';
import { expect } from 'chai';

import testdata from './testdata';
import TestTables from '../models/creatTables';
import app from '../app';

describe('CRUD politico app', () => {
    before((done) => {
        TestTables.createTables();
        
        done();
    });

    it('test POST /auth/signup', (done) => {
        request(app)
            .post('/auth/signup')
            .send(testdata.userSignup)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    const responseData = JSON.parse(response.text);
                    expect(responseData.data).to.be.a('array');
                }
                
                done();
            });
    });

    it('test POST /auth/login', (done) => {
        request(app)
            .get('/auth/login')
            .send(testdata.user)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    const responseData = JSON.parse(response.text);
                    expect(response).to.be.a('object');
                }
                
                done();
            });
    });

    it('test POST /office/:user-id/register', (done) => {
        request(app)
            .post('/office/1/register')
            .set('Accept', 'application/json')
            .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBwb2xpdGljby5jb20iLCJwcml2aWxlZ2UiOjEsImlhdCI6MTU0OTI3OTA1OCwiZXhwIjoxNTgwODM2NjU4fQ.sguNRCbjJnuClxweboGBQLaV08IwWjDrzre_xJpmTUs')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    const responseData = JSON.parse(response.text);
                    expect(responseData).to.be.a('object');
                }
                
                done();
            });
    });

    it('test POST /votes/', (done) => {
        request(app)
            .post('/api/v1/parties')
            .send(testdata.votes[0])
            .set('Accept', 'application/json')
            .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoidXNlcjM5QHBvbGl0aWNvLmNvbSIsInByaXZpbGVnZSI6MCwiaWF0IjoxNTQ5MTA2MTcyLCJleHAiOjE1ODA2NjM3NzJ9.ogihykbfqsV-i1JrBb-mSDYoyoRDwED1ifadHCP94-Y')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
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
                if(err) throw err;
                else {
                    const responseData = JSON.parse(response.text);
                    expect(responseData).to.be.a('object');
                }
                
                done();
            });
    });

    it('test GET /office/office-id/result', (done) => {
        request(app)
            .get('/office/1/result')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    const responseData = JSON.parse(response.text);
                    expect(responseData).to.be.a('object');
                }
                
                done();
            });
    });

}); 