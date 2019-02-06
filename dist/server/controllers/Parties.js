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
    _db2.default.client.query('SELECT * FROM parties', function (err, result) {
      if (err) {
        return res.json({
          error: 404,
          message: 'Data not retrieived'
        });
      }
      var allParties = [];

      for (var i = 0; i < result.rows.length; i++) {
        var row = {
          id: result.rows[i].partyid,
          name: result.rows[i].name
        };

        allParties.push(row);
      }
      return res.json({
        status: 200,
        data: allParties
      });
    });
  },
  editPartyById: function editPartyById(req, res) {
    var result = _Validations2.default.validateEdit(req.params.partyId, req.body.name);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }

    var partyId = parseInt(req.params.partyId, 10);
    var partyName = req.body.name;

    var query = {
      text: 'SELECT * FROM parties WHERE partyid=$1',
      values: [partyId]
    };

    _db2.default.client.query(query, function (err, result) {
      if (err) {
        return res.json({
          status: 400,
          error: 'Data could not be retireved'
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          status: 404,
          error: 'Party with ID ' + partyId + ' not found'
        });
      }

      _db2.default.client.query('UPDATE parties SET name=$1 WHERE partyid=$2', [partyName, partyId], function (err, result) {
        if (err) {
          return res.json({
            status: 400,
            error: 'Unable to Update row'
          });
        }
        return res.json({
          status: 200,
          data: [{
            id: partyId,
            name: partyName
          }]
        });
      });
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

    _db2.default.client.query('DELETE FROM parties WHERE partyid=$1', [partyId], function (err, result) {
      if (err) {
        return res.json({
          status: 400,
          message: 'Row cannot be deleted'
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          status: 404,
          data: {
            message: 'Party with ID ' + partyId + ' not found'
          }
        });
      }
      return res.json({
        status: 202,
        data: [{
          message: 'Party with ID ' + partyId + ' has been deleted'
        }]
      });
    });
  },
  createParty: function createParty(req, res) {
    if (!req.file) {
      return res.json({
        status: 400,
        message: 'Please upload a party logo'
      });
    }

    var partyData = {
      name: req.body.name,
      hqAddress: req.body.hqAddress,
      logoUrl: req.file.path
    };
    var result = _Validations2.default.validateParty(partyData);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }
    var party = req.body;

    var partyId = req.body.id;
    var partyName = party.name;
    var partyHqAddress = party.hqAddress;

    var query = {
      text: 'INSERT INTO parties(name, hqaddress, logourl) VALUES($1, $2, $3) RETURNING *',
      values: [partyName, partyHqAddress, req.file.path]
    };

    _db2.default.client.query(query, function (err, result) {
      if (err) {
        return res.json({
          status: 400,
          error: err
        });
      }
      return res.json({
        status: 201,
        data: [{
          id: result.rows[0].partyid,
          name: result.rows[0].name,
          logoUrl: result.rows[0].logourl
        }]
      });
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

    _db2.default.client.query('SELECT * FROM parties WHERE partyid=$1', [partyId], function (err, result) {
      if (err) {
        return res.json({
          status: 400,
          message: 'Data could not be retrieved'
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          error: 404,
          message: 'Party with ID ' + partyId + ' could not be found'
        });
      }
      return res.json({
        status: 200,
        data: [{
          id: result.rows[0].partyid,
          name: result.rows[0].name,
          logoUrl: result.rows[0].logourl
        }]
      });
    });
  }
};

exports.default = Parties;