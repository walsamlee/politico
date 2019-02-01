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
  const email = req.body.email;
  const pword = req.body.password;
  const privilege = 0

  bcrypt.hash(pword, 10, (err, hash) => {
    if (err) {
      return res.json({
        status: 400,
        message: 'Password cannot be hashed',
      });
    }

    jwt.sign({
      email,
      privilege: privilege,
    },
    process.env.SECRET,
    {
      expiresIn: '1y',
    }, (err, token) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Unable to generate token',
        });
      }

      const query = {
        text: 'INSERT INTO users(email, password, firstname, lastname, privilege) VALUES($1, $2, $3, $4, $5)',
        values: [email, hash, req.body.firstName, req.body.lastName, privilege],
      };

      db.client.query(query, (err, result) => {
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
              token,
              user: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email,
              },
            },
          ],
        });
      });
    });
  });
};

const Auth = {
  signup,
};

export default Auth;
