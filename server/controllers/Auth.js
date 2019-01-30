import db from '../models/db';
import Validations from './Validations';

const login = (req, res) => {
  const result = Validations.validateUserLogin(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  db.client.query('SELECT * FROM users WHERE email=$1 AND password=$2', [req.body.email, req.body.password], (err, result) => {
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

    return res.json({
      status: 200,
      data: [
        {
          token: 0,
          user: {
            firstName: result.rows[0].firstname,
            lastName: result.rows[0].lastname,
            email: result.rows[0].email,
          },
        },
      ],
    });
  });
};

const Auth = {
  login,
};

export default Auth;
