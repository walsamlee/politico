import db from '../models/db';
import Validations from './Validations';

const registerCandidate = (req, res) => {
  const candidateDetails = {
    office: req.body.office,
    user: req.params.userId,
  };
  const result = Validations.validateCandidate(candidateDetails);

  if (result.error) {
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  const office = parseInt(req.body.office, 10);
  const user = parseInt(req.params.userId, 10);
  const query = {
    text: 'INSERT INTO candidates(officeid, userid) VALUES($1, $2)',
    values: [office, user],
  };

  db.client.query(query, (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: err.detail,
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        office,
        user,
      },
    });
  });
};

const viewResult = (req, res) => {
  const result = Validations.validateId(req.params.officeId);

  if (result.error) {
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  const officeId = parseInt(req.params.officeId, 10);

  const query = {
    text: `SELECT
      candidateid,
      COUNT (candidateid)
      FROM
      votes
      WHERE officeid=$1
      GROUP BY
      candidateid`,
    values: [officeId],
  };

  db.client.query(query, (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: 'Data cannot be retrieved',
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        message: `Office with ID ${officeId} not found`,
      });
    }

    const voteCasted = result.rows;
    const electionResult = [];

    for (let i = 0; i < voteCasted.length; i++) {
      electionResult.push({
        office: officeId,
        candidate: voteCasted[i].candidateid,
        result: parseInt(voteCasted[i].count, 10),
      });
    }

    return res.status(200).json({
      status: 200,
      data: electionResult,
    });
  });
};

const Results = {
  registerCandidate,
  viewResult,
};

export default Results;
