'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateParty = function validateParty(party) {
  var schema = {
    name: _joi2.default.string().required(),
    hqAddress: _joi2.default.string().required(),
    logoUrl: _joi2.default.string().required()
  };

  return _joi2.default.validate(party, schema);
};

var validateOffice = function validateOffice(office) {
  var schema = {
    id: _joi2.default.number().integer().positive().required(),
    type: _joi2.default.string().required(),
    name: _joi2.default.string().required()
  };

  return _joi2.default.validate(office, schema);
};

var validateId = function validateId(id) {
  var officeId = {
    id: id
  };

  var schema = {
    id: _joi2.default.number().integer().required()
  };

  return _joi2.default.validate(officeId, schema);
};

var validateEdit = function validateEdit(id, name) {
  var partyDetails = {
    id: id,
    name: name
  };
  var schema = {
    id: _joi2.default.number().integer().required(),
    name: _joi2.default.string().required()
  };

  return _joi2.default.validate(partyDetails, schema);
};

var validateUser = function validateUser(user) {
  var schema = {
    passportUrl: _joi2.default.string().allow(''),
    email: _joi2.default.string().email({ minDomainAtoms: 2 }).required(),
    password: _joi2.default.required(),
    firstname: _joi2.default.string().required(),
    lastname: _joi2.default.string().required(),
    othername: _joi2.default.string().allow(''),
    phoneNumber: _joi2.default.number().integer().required()
  };

  return _joi2.default.validate(user, schema);
};

var validateCandidate = function validateCandidate(candidate) {
  var schema = {
    office: _joi2.default.number().integer().required(),
    user: _joi2.default.number().integer().required()
  };

  return _joi2.default.validate(candidate, schema);
};

var validateVote = function validateVote(vote) {
  var schema = {
    office: _joi2.default.number().integer().required(),
    candidate: _joi2.default.number().integer().required(),
    voter: _joi2.default.number().integer().required()
  };

  return _joi2.default.validate(vote, schema);
};

var validateUserLogin = function validateUserLogin(user) {
  var schema = {
    email: _joi2.default.string().email({ minDomainAtoms: 2 }).required(),
    password: _joi2.default.string().required()
  };

  return _joi2.default.validate(user, schema);
};

var Validatitions = {
  validateParty: validateParty,
  validateOffice: validateOffice,
  validateId: validateId,
  validateEdit: validateEdit,
  validateUserLogin: validateUserLogin,
  validateUser: validateUser,
  validateCandidate: validateCandidate,
  validateVote: validateVote
};

exports.default = Validatitions;