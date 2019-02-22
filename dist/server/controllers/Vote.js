'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var castVote = function castVote(req, res) {
  var voterId = parseInt(req.userData.id, 10);

  var voterData = {
    office: req.body.office,
    candidate: req.body.candidate,
    voter: voterId
  };

  var result = _Validations2.default.validateVote(voterData);

  if (result.error) {
    var errMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errMessage.replace(/[^a-zA-Z ]/g, "")
    });
  }

  var officeId = parseInt(req.body.office, 10);
  var candidateId = parseInt(req.body.candidate, 10);

  var query = {
    text: 'INSERT INTO votes(officeid, candidateid, voterid) VALUES($1, $2, $3) RETURNING *',
    values: [officeId, candidateId, voterId]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: 'You can only cast your vote once for this office'
      });
    }
    console.log(result.rows[0]);

    return res.status(201).json({
      status: 201,
      data: {
        office: result.rows[0].officeid,
        candidate: result.rows[0].candidateid,
        voter: result.rows[0].voterid
      }
    });
  });
};

var Vote = {
  castVote: castVote
};

exports.default = Vote;