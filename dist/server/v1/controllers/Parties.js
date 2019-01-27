'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parties = {
  viewParties: function viewParties(req, res) {
    var allParties = _db2.default.viewParties();

    return res.json({
      status: 200,
      data: allParties
    });
  },
  editPartyById: function editPartyById(req, res) {
    var result = _Validations2.default.validateEdit(req.params.partyId, req.params.name);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }

    var partyId = parseInt(req.params.partyId, 10);
    var partyName = req.params.name;

    if (_db2.default.editParty(partyId, partyName)) {
      return res.json({
        status: 204,
        data: [{
          id: partyId,
          name: partyName
        }]
      });
    }
    return res.json({
      status: 404,
      error: 'Party with ID ' + partyId + ' not found'
    });
  },
  deletePartyById: function deletePartyById(req, res) {
    var result = _Validations2.default.validateId(req.params.partyId);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }
    var partyId = parseInt(req.params.partyId, 10);

    if (_db2.default.removeParty(partyId)) {
      return res.json({
        status: 204,
        data: [{
          message: 'Party with ID ' + partyId + ' has been deleted'
        }]
      });
    } else {
      return res.json({
        status: 404,
        error: 'Party with ID ' + partyId + ' not found'
      });
    }
  },
  createParty: function createParty(req, res) {
    var result = _Validations2.default.validateParty(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }
    var newParty = req.body;

    _db2.default.addParty(newParty);

    return res.json({
      status: 200,
      data: [newParty]
    });
  },
  viewPartyById: function viewPartyById(req, res) {
    var result = _Validations2.default.validateId(req.params.partyId);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }
    var partyId = parseInt(req.params.partyId, 10);

    var party = _db2.default.viewParty(partyId);

    if (party.length === 1) {
      return res.json({
        status: 200,
        data: party
      });
    }
    return res.json({
      status: 404,
      error: 'Party with ID ' + partyId + ' not found'
    });
  }
};

exports.default = Parties;