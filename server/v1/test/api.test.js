import request from 'supertest';
import { expect } from 'chai';

import testdata from './testdata';
import app from '../app';

describe('CRUD politico app', () => {
    it('test POST /api/v1/parties route', (done) => {
        request(app)
            .post('/api/v1/parties')
            .send(testdata.partyPost)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response).to.be.a('object');
                    expect(response.body.data).to.deep.equal(testdata.partyPost);
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
                    expect(response.body).to.be.a('object');
                    expect(response.body.data).to.deep.equal(testdata.afterPostParty)
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
                    expect(response.body).to.be.a('object');
                    expect(response.body.data.id).to.deep.equal(testdata.party[0].id);
                    expect(response.body.data.name).to.deep.equal(testdata.party[0].name);
                    expect(response.body.data.logoUrl).to.deep.equal(testdata.party[0].logoUrl);
                }
                
                done();
            });
    });

    it('test PATCH /api/v1/parties/:partyId/:name route', (done) => {
        request(app)
            .patch('/api/v1/parties/4/Alliance for Democracy Party')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.body).to.be.a('object');
                    expect(response.body.data.id).to.deep.equal(4);
                    expect(response.body.data.name).to.deep.equal('Alliance for Democracy Party');
                }
                
                done();
            });
    });

    it('test DELETE /api/v1/parties/:partyId route', (done) => {
        request(app)
            .delete('/api/v1/parties/3')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.body).to.be.a('object');
                    expect(response.body.data.message).to.deep.equal('Party with ID 3 has been deleted');
                }
                
                done();
            });
    });

    it('test POST /api/v1/offices route', (done) => {
        request(app)
            .post('/api/v1/offices')
            .send(testdata.officePost)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if(err) throw err;
                else {
                    expect(response.body).to.be.a('object');
                    expect(response.body.data).to.deep.equal(testdata.officePost);
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
                    expect(response.body).to.be.a('object');
                    expect(response.body.data).to.deep.equal(testdata.afterPostOffice);
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
                    expect(response.body).to.be.a('object');
                    expect(response.body.data[0]).to.deep.equal(testdata.office[2]);
                }
                
                done();
            });
    });

}); 