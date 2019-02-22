import db from '../models/db';
import Validations from './Validations';

const runForOffice = (req, res) => {
  const aspirantDetails = {
    user: req.body.id,
    office: req.body.office,
    party: req.body.party,
  }

  const result = Validations.validateAspirant(aspirantDetails);

  if(result.error) {
    const errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, ""),
    });
  }

  const user = parseInt(req.body.id, 10);
  const office = parseInt(req.body.office, 10);
  const party = parseInt(req.body.party, 10);

  const query = {
    text: 'INSERT INTO aspirants(userid, officeid, partyid) VALUES($1, $2, $3) RETURNING *',
    values: [user, office, party]
  }

  db.client.query(query, (err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: err.detail,
      });
    }

    return res.status(201).json({
      status: 201,
      data: result.rows[0],
    });    
  })
}

const viewAspirants = (req, res) => {
  db.client.query('SELECT * FROM aspirants', (err, result) => {
    if(err) {
      return res.status(400).json({
        status: 400,
        error: 'Data cannot be retrieved from the database',
      });
    }

    return res.status(200).json({
      status: 200,
      data: result.rows,
    });
  });
}

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
        error: err,
      });
    }

    return res.status(201).json({
      status: 201,
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
        error: 'Data cannot be retrieved',
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: `Office with ID ${officeId} not found`,
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
  runForOffice,
  viewAspirants,
};

export default Results;
