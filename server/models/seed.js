import db from '../models/db';

const admin = () => {
    const
        email = 'user1@politico.com',
        password = '$2b$10$M4CrW.a0sfW1SbgWKFBi0OAAWCR5jYAX6YzFeQ7c9dsTS/l6EHHzG',
        firstname = 'Akinwale',
        lastname = 'Samuel',
        othername = 'Michael',
        telephone = '1234567890',
        privilege = 'true',
        passporturl = 'uploads/mypic.png';

    const adminQuery = {
        text: 'INSERT INTO users(email, password, firstname, lastname, othername, telephone, privilege, passporturl) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values: [email, password, firstname, lastname, othername, telephone, privilege, passporturl] 
    }
        ;

    db.client.query(adminQuery, (err, result) => {
        if(err) {
            console.log(err);
        }
    })
}

const Seed = {
    admin
}

export default Seed;