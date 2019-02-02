import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import db from '../models/db';
import Validations from './Validations';

dotenv.config();

const signup = (req, res) => {
  const result = Validations.validateUser(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }
  const passportUrl = req.body.passportUrl;
  const email = req.body.email;
  const pword = req.body.password;
  const privilege = 0;

  bcrypt.hash(pword, 10, (err, hash) => {
    if (err) {
      return res.json({
        status: 400,
        message: 'Password cannot be hashed',
      });
    }

    const query = {
      text: 'INSERT INTO users(email, password, firstname, lastname, othername, telephone, privilege, passporturl) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
      values: [email, hash, req.body.firstName, req.body.lastName, req.body.otherName, req.body.telephone, privilege, passportUrl],
    };

    db.client.query(query, (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Account could not be created',
        });
      }

      db.client.query('SELECT * FROM users WHERE email=$1', [email], (err, result) => {
        if (err) {
          return res.json({
            status: 400,
            message: 'Data cannot be retrieved',
          });
        }

        jwt.sign({
          id: result.rows[0].userid,
          email: result.rows[0].email,
          privilege: result.rows[0].privilege,
        },
        process.env.SECRET,
        {
          expiresIn: '1y',
        }, (err, loginToken) => {
          if (err) {
            return res.json({
              status: 400,
              message: err,
            });
          }

          return res.json({
            status: 200,
            data: [
              {
                token: loginToken,
                user: {
                  passportUrl: result.rows[0].passporturl,
                  name: `${result.rows[0].firstname} ${result.rows[0].lastname} ${result.rows[0].othername}`,
                  email: result.rows[0].email,
                  phoneNumber: result.rows[0].telephone
                }
              }
            ]
          })
        });        
      });
    });
  });
  
};

const login = (req, res) => {
  const result = Validations.validateUserLogin(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  db.client.query('SELECT * FROM users WHERE email=$1', [req.body.email], (err, result) => {
    if (err) {
      return res.json({
        status: 400,
        message: 'Data cannot be added to database',
      });
    }

    if (result.rowCount === 0) {
      return res.json({
        status: 404,
        error: `User with email ${req.body.email} not found`,
      });
    }

    bcrypt.compare(req.body.password, result.rows[0].password, (err, response) => {
      if(response) {
        jwt.sign({
          id: result.rows[0].userid,
          email: result.rows[0].email,
          privilege: result.rows[0].privilege,
        },
        process.env.SECRET,
        {
          expiresIn: '1y',
        }, (err, loginToken) => {
          if (err) {
            return res.json({
              status: 400,
              message: 'Data cannot be added to database',
            });
          }
  
          return res.json({
            status: 200,
            data: [
              {
                token: loginToken,
                user: {
                  id: result.rows[0].userid,
                  passportUrl: result.rows[0].passporturl,
                  name: `${result.rows[0].firstname} ${result.rows[0].lastname} ${result.rows[0].othername}`,
                  email: result.rows[0].email,
                  phoneNumber: result.rows[0].telephone
                }
              }
            ]
          })
        });
      } else {
        return res.json({
          status: 400,
          message: 'Invalid username or password',
        });
      }
    });
  });
};

const Auth = {

  login,
  signup,
};

export default Auth;
