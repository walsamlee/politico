import db from '../models/db';
import Validations from './Validations';

const signup = (req, res) => {
  const result = Validations.validateUser(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  const query = {
    text: 'INSERT INTO users(email, password, firstname, lastname) VALUES($1, $2, $3, $4)',
    values: [req.body.email, req.body.password, req.body.firstName, req.body.lastName],
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
          token: 0,
          user: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
          },
        },
      ],
    });
  });
};

const Auth = {
  signup,
};

export default Auth;
