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
        return res.status(404).json({
          error: 404,
          message: err.detail
        });
      }
      var allParties = [];

      for (var i = 0; i < result.rows.length; i++) {
        var row = {
          id: result.rows[i].partyid,
          name: result.rows[i].name,
          logoUrl: result.rows[i].logourl
        };

        allParties.push(row);
      }
      return res.status(200).json({
        status: 200,
        data: allParties
      });
    });
  },
  editPartyById: function editPartyById(req, res) {
    var result = _Validations2.default.validateEdit(req.params.partyId, req.body.name);

    if (result.error) {
      var errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, "")
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
        return res.status(400).json({
          status: 400,
          error: err.detail
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Party with ID ' + partyId + ' not found'
        });
      }

      _db2.default.client.query('UPDATE parties SET name=$1 WHERE partyid=$2', [partyName, partyId], function (err, result) {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: err.detail
          });
        }
        return res.status(200).json({
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
      var errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, "")
      });
    }

    var partyId = parseInt(req.params.partyId, 10);

    _db2.default.client.query('DELETE FROM parties WHERE partyid=$1', [partyId], function (err, result) {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          data: {
            message: 'Party with ID ' + partyId + ' not found'
          }
        });
      }
      return res.status(200).json({
        status: 200,
        data: [{
          message: 'Party with ID ' + partyId + ' has been deleted'
        }]
      });
    });
  },
  createParty: function createParty(req, res) {
    var result = _Validations2.default.validateParty(req.body);

    if (result.error) {
      var errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, "")
      });
    }

    var query = {
      text: 'INSERT INTO parties(name, hqaddress, logourl) VALUES($1, $2, $3) RETURNING *',
      values: [req.body.name, req.body.hqAddress, req.body.logoUrl]
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
        data: [{
          id: result.rows[0].partyid,
          name: result.rows[0].name
        }]
      });
    });
  },
  viewPartyById: function viewPartyById(req, res) {
    var result = _Validations2.default.validateId(req.params.partyId);

    if (result.error) {
      var errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, "")
      });
    }
    var partyId = parseInt(req.params.partyId, 10);

    _db2.default.client.query('SELECT * FROM parties WHERE partyid=$1', [partyId], function (err, result) {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          error: 404,
          message: 'Party with ID ' + partyId + ' could not be found'
        });
      }
      return res.status(200).json({
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