import db from '../models/db';

const createTables = () => {
    db.client.query('DROP TABLE IF EXISTS users', (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            }
        }
    });
    
    db.client.query('DROP TABLE IF EXISTS parties', (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            }
        }
    });
    
    db.client.query('DROP TABLE IF EXISTS offices', (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            }
        }
    });
    
    db.client.query('DROP TABLE IF EXISTS votes', (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to drop table'
            }
        }
    });
    
    const sqlUsers = `CREATE TABLE users( 
        userid integer, 
        email text PRIMARY KEY NOT NULL, 
        password text, 
        firstname text, 
        lastname text, 
        othername text, 
        telephone text, 
        privilege text, 
        passporturl text)`;
    
    const sqlParties = `CREATE TABLE parties(
        partyid integer,
        name text,
        hqaddress text,
        logourl text
    )`;
    
    const sqlOffices = `CREATE TABLE offices(
        officeid integer,
        type text,
        name text
    )`;
    
    const sqlVotes = `CREATE TABLE votes(
        officeid integer,
        candidateid integer,
        voterid integer
    )`;
    
    db.client.query(sqlUsers, (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });
    
    db.client.query(sqlParties, (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });
    
    db.client.query(sqlOffices, (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });
    
    db.client.query(sqlVotes, (err, result) => {
        if(err) {
            return {
                status: 400,
                message: 'Unable to create table'
            };
        }
    });
}

const TestTables = {
    createTables
};

export default TestTables;