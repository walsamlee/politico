'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerCandidate = function registerCandidate(req, res) {
  var candidateDetails = {
    office: req.body.office,
    user: req.params.userId
  };
  var result = _Validations2.default.validateCandidate(candidateDetails);

  if (result.error) {
    return res.json({
      status: 400,
      error: result.error.details[0].context.value + ' is an invalid value'
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
      return res.json({
        status: 400,
        message: 'Cannot add user to this office! User may already be registered for this office'
      });
    }

    return res.json({
      status: 200,
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
    return res.json({
      status: 400,
      error: result.error.details[0].context.value + ' is an invalid value'
    });
  }

  var officeId = parseInt(req.params.officeId, 10);

  var query = {
    text: 'SELECT\n      candidateid,\n      COUNT (candidateid)\n      FROM\n      votes\n      WHERE officeid=$1\n      GROUP BY\n      candidateid',
    values: [officeId]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.json({
        status: 400,
        message: 'Data cannot be retrieved'
      });
    }

    if (result.rowCount === 0) {
      return res.json({
        status: 404,
        message: 'Office with ID ' + officeId + ' not found'
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

    return res.json({
      status: 200,
      data: electionResult
    });
  });
};

var Results = {
  registerCandidate: registerCandidate,
  viewResult: viewResult
};

exports.default = Results;