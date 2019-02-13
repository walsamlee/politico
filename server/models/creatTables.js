import db from '../models/db';
import Seed from '../models/seed';

const createTables = () => {
    const sqlUsers = `CREATE TABLE users( 
        userid serial, 
        email text PRIMARY KEY NOT NULL, 
        password text, 
        firstname text, 
        lastname text, 
        othername text, 
        telephone text, 
        privilege text, 
        passporturl text)`;
    
    const sqlParties = `CREATE TABLE parties(
        partyid serial,
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

    const sqlCandidates = `CREATE TABLE candidates(
        officeid integer,
        userid integer,
        PRIMARY KEY (officeid, userid)
    )`;

    db.client.query('DROP TABLE IF EXISTS users', (err, result) => {
        if(err) {
            console.log(err)
        }

        db.client.query(sqlUsers, (err, result) => {
            if(err) {
                console.log(err)
            }
    
            Seed.admin();
        });
    });
    
    db.client.query('DROP TABLE IF EXISTS parties', (err, result) => {
        if(err) {
            console.log(err)
        }
    
        db.client.query(sqlParties, (err, result) => {
            if(err) {
                console.log(err)
            }
        });
    });
    
    db.client.query('DROP TABLE IF EXISTS offices', (err, result) => {
        if(err) {
            console.log(err)
        }
    
        db.client.query(sqlOffices, (err, result) => {
            if(err) {
                console.log(err)
            }
        });
    });
    
    db.client.query('DROP TABLE IF EXISTS votes', (err, result) => {
        if(err) {
            console.log(err)
        }
    
        db.client.query(sqlVotes, (err, result) => {
            if(err) {
                console.log(err)
            }
        });
    });

    db.client.query('DROP TABLE IF EXISTS candidates', (err, result) => {
        if(err) {
            console.log(err)
        }
    
        db.client.query(sqlCandidates, (err, result) => {
            if(err) {
                console.log(err)
            }
        });
    });
}

const TestTables = {
    createTables
};

export default TestTables;