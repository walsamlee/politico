import db from '../models/db';
import Validations from './Validations';

const castVote = (req, res) => {
  const result = Validations.validateVote(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  const officeId = parseInt(req.body.office, 10);
  const candidateId = parseInt(req.body.candidate, 10);
  const voterId = parseInt(req.body.voter, 10);

  const query = {
    text: 'INSERT INTO votes(officeid, candidateid, voterid) VALUES($1, $2, $3)',
    values: [officeId, candidateId, voterId],
  };

  db.client.query(query, (err, result) => {
    if (err) {
      return res.json({
        status: 400,
        message: 'You can only cast your vote once for this office',
      });
    }

    return res.json({
      status: 201,
      data: {
        office: officeId,
        candidate: candidateId,
        voter: voterId,
      },
    });
  });
};

const Vote = {
  castVote,
};

export default Vote;
