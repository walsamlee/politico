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

    var data = [];

    for (var i = 0; i < allParties.length; i++) {
      data.push({
        id: allParties[i].id,
        name: allParties[i].name,
        logoUrl: allParties[i].logoUrl
      });
    }

    return res.json({
      status: 200,
      data: data
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
    var newPartyId = req.body.id;
    if (typeof newPartyId === 'string') newPartyId = parseInt(newPartyId, 10);

    var newPartyName = req.body.name;
    var newPartyHq = req.body.hqAddress;
    var newPartyLogo = req.body.logoUrl;

    var newParty = {
      id: newPartyId,
      name: newPartyName,
      hqAddress: newPartyHq,
      logoUrl: newPartyLogo
    };

    _db2.default.addParty(newParty);

    return res.json({
      status: 200,
      data: [{
        id: newParty.id,
        name: newParty.name
      }]
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
        data: [{
          id: party[0].id,
          name: party[0].name,
          logoUrl: party[0].logoUrl
        }]
      });
    }
    return res.json({
      status: 404,
      error: 'Party with ID ' + partyId + ' not found'
    });
  }
};

exports.default = Parties;