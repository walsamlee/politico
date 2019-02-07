import db from '../models/db';
import Validations from './Validations';

const castVote = (req, res) => {
  const voterId = parseInt(req.userData.id, 10);

  const voterData = {
    office: req.body.office,
    candidate: req.body.candidate,
    voter: voterId
  }

  const result = Validations.validateVote(voterData);

  if (result.error) {
    return res.json({
      status: 400,
      error: `${result.error.details[0].context.value} is an invalid value`,
    });
  }

  const officeId = parseInt(req.body.office, 10);
  const candidateId = parseInt(req.body.candidate, 10);

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
