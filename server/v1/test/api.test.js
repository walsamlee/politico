import request from 'supertest';
import { expect } from 'chai';

import testdata from './testdata';
import app from '../app';

describe('CRUD politico app', () => {
    it('test POST /api/v1/party route', (done) => {
        request(app)
            .post('/api/v1/party')
            .send(testdata.partyPost)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test GET /api/v1/party route', (done) => {
        request(app)
            .get('/api/v1/party')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.status).to.be.a('array');
                }
                
                done();
            });
    });

    it('test GET /api/v1/party/:partyId route', (done) => {
        request(app)
            .get('/api/v1/party/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test PUT /api/v1/party/:partyId/:name route', (done) => {
        request(app)
            .patch('/api/v1/party/4/Alliance for Democracy Party')
            .send(testdata.partyPut)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test DELETE /api/v1/party/:partyId route', (done) => {
        request(app)
            .delete('/api/v1/party/3')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test POST /api/v1/office route', (done) => {
        request(app)
            .post('/api/v1/office')
            .send(testdata.officePost)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test PUT /api/v1/office/:partyId route', (done) => {
        request(app)
            .put('/api/v1/office/4')
            .send(testdata.officePut)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

    it('test DELETE /api/v1/office/:partyId route', (done) => {
        request(app)
            .delete('/api/v1/office/3')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.data).to.be.a('object');
                }
                
                done();
            });
    });

}); 