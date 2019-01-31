import db from '../models/db';
import Validations from './Validations';

const registerCandidate = (req, res) => {
  const candidateDetails = {
    office: req.params.register,
    user: req.params.userId,
  };
  const result = Validations.validateCandidate(candidateDetails);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  const office = parseInt(req.params.register, 10);
  const user = parseInt(req.params.userId, 10);
  const query = {
    text: 'INSERT INTO candidates(officeid, userid) VALUES($1, $2)',
    values: [office, user],
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
      data: {
        office,
        user,
      },
    });
  });
};

const office = {
  registerCandidate,
};

export default office;
