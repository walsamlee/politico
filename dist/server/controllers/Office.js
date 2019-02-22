'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runForOffice = function runForOffice(req, res) {
  var aspirantDetails = {
    user: req.body.id,
    office: req.body.office,
    party: req.body.party
  };

  var result = _Validations2.default.validateAspirant(aspirantDetails);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  var user = parseInt(req.body.id, 10);
  var office = parseInt(req.body.office, 10);
  var party = parseInt(req.body.party, 10);

  var query = {
    text: 'INSERT INTO aspirants(userid, officeid, partyid) VALUES($1, $2, $3) RETURNING *',
    values: [user, office, party]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: err.detail
      });
    }

    return res.status(201).json({
      status: 201,
      data: result.rows[0]
    });
  });
};

var viewAspirants = function viewAspirants(req, res) {
  _db2.default.client.query('SELECT * FROM aspirants', function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: 'Data cannot be retrieved from the database'
      });
    }

    return res.status(200).json({
      status: 200,
      data: result.rows
    });
  });
};

var registerCandidate = function registerCandidate(req, res) {
  var candidateDetails = {
    office: req.body.office,
    user: req.params.userId
  };

  var result = _Validations2.default.validateCandidate(candidateDetails);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  var office = parseInt(req.body.office, 10);
  var user = parseInt(req.params.userId, 10);
  var query = {
    text: 'INSERT INTO candidates(officeid, userid) VALUES($1, $2)',
    values: [office, user]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: err
      });
    }

    return res.status(201).json({
      status: 201,
      data: {
        office: office,
        user: user
      }
    });
  });
};

var viewResult = function viewResult(req, res) {
  var result = _Validations2.default.validateId(req.params.officeId);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  var officeId = parseInt(req.params.officeId, 10);

  var query = {
    text: 'SELECT\n      candidateid,\n      COUNT (candidateid)\n      FROM\n      votes\n      WHERE officeid=$1\n      GROUP BY\n      candidateid',
    values: [officeId]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: 'Data cannot be retrieved'
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: 'Office with ID ' + officeId + ' not found'
      });
    }

    var voteCasted = result.rows;
    var electionResult = [];

    for (var i = 0; i < voteCasted.length; i++) {
      electionResult.push({
        office: officeId,
        candidate: voteCasted[i].candidateid,
        result: parseInt(voteCasted[i].count, 10)
      });
    }

    return res.status(200).json({
      status: 200,
      data: electionResult
    });
  });
};

var Results = {
  registerCandidate: registerCandidate,
  viewResult: viewResult,
  runForOffice: runForOffice,
  viewAspirants: viewAspirants
};

exports.default = Results;