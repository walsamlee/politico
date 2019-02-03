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
  var result = _Validations2.default.validateVote(req.body);

  if (result.error) {
    return res.json({
      status: 400,
      error: result.error.details[0].context.value + ' is an invalid value'
    });
  }

  var officeId = parseInt(req.body.office, 10);
  var candidateId = parseInt(req.body.candidate, 10);
  var voterId = parseInt(req.body.voter, 10);

  var query = {
    text: 'INSERT INTO votes(officeid, candidateid, voterid) VALUES($1, $2, $3)',
    values: [officeId, candidateId, voterId]
  };

  _db2.default.client.query(query, function (err, result) {
    if (err) {
      return res.json({
        status: 400,
        message: 'You can only cast your vote once for this office'
      });
    }

    return res.json({
      status: 201,
      data: {
        office: officeId,
        candidate: candidateId,
        voter: voterId
      }
    });
  });
};

var Vote = {
  castVote: castVote
};

exports.default = Vote;