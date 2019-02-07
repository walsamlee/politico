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
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  const officeId = parseInt(req.body.office, 10);
  const candidateId = parseInt(req.body.candidate, 10);

  const query = {
    text: 'INSERT INTO votes(officeid, candidateid, voterid) VALUES($1, $2, $3) RETURNING *',
    values: [officeId, candidateId, voterId],
  };

  db.client.query(query, (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'You can only cast your vote once for this office',
      });
    }

    return res.status(201).json({
      status: 201,
      data: {
        office: result.officeid,
        candidate: result.candidateid,
        voter: result.voterid,
      },
    });
  });
};

const Vote = {
  castVote,
};

export default Vote;
