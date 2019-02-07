import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import db from '../models/db';
import Validations from './Validations';

dotenv.config();

const signup = (req, res) => {
  const result = Validations.validateUser(req.body);

  if (result.error) {
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }
  
  const pword = req.body.password;
  const isAdmin = false;

  bcrypt.hash(pword, 10, (err, hash) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'Password cannot be hashed',
      });
    }

    const query = {
      text: 'INSERT INTO users(email, password, firstname, lastname, othername, telephone, privilege, passporturl) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
      values: [req.body.email, hash, req.body.firstname, req.body.lastname, req.body.othername, req.body.phoneNumber, isAdmin, req.body.passportUrl],
    };

    db.client.query(query, (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail.replace(/[=,(,)]/gi, ''),
        });
      }

      db.client.query('SELECT * FROM users WHERE email=$1', [req.body.email], (err, result) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            message: err.detail.replace(/[=,(,)]/gi, ''),
          });
        }

        jwt.sign({
          id: result.rows[0].userid,
          isAdmin: result.rows[0].privilege
        },
        process.env.SECRET,
        {
          expiresIn: '1y',
        }, (err, loginToken) => {
          if (err) {
            return res.status(400).json({
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
                  id: result.rows[0].userid,
                  passportUrl: result.rows[0].passporturl,
                  name: `${result.rows[0].firstname} ${result.rows[0].lastname} ${result.rows[0].othername}`,
                  email: result.rows[0].email,
                  phoneNumber: result.rows[0].telephone,
                  isAdmin: result.rows[0].privilege,
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
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  db.client.query('SELECT * FROM users WHERE email=$1', [req.body.email], (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'Data cannot be added to database',
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: `User with email ${req.body.email} not found`,
      });
    }

    bcrypt.compare(req.body.password, result.rows[0].password, (err, response) => {
      if(response) {
        jwt.sign({
          id: result.rows[0].userid,
          isAdmin: result.rows[0].privilege,
        },
        process.env.SECRET,
        {
          expiresIn: '1y',
        }, (err, loginToken) => {
          if (err) {
            return res.status(400).json({
              status: 400,
              message: 'Error generating token',
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
                  phoneNumber: result.rows[0].telephone,
                  isAdmin: result.rows[0].privilege
                }
              }
            ]
          })
        });
      } else {
        return res.status(400).json({
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
