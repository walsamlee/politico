'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../models/db');

var _db2 = _interopRequireDefault(_db);

var _Validations = require('./Validations');

var _Validations2 = _interopRequireDefault(_Validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offices = {
  createOffice: function createOffice(req, res) {
    var result = _Validations2.default.validateOffice(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }

    _db2.default.addOffice(req.body);

    return res.json({
      status: 201,
      data: {
        id: req.body.id,
        type: req.body.type,
        name: req.body.name
      }
    });
  },
  viewOffices: function viewOffices(req, res) {
    var allOffices = _db2.default.viewOffices();

    return res.json({
      status: 200,
      data: allOffices
    });
  },
  viewOfficeById: function viewOfficeById(req, res) {
    var result = _Validations2.default.validateId(req.params.officeId);

    if (result.error) {
      return res.json({
        status: 400,
        error: result.error.details[0].context.value + ' is an invalid value'
      });
    }

    return res.json({
      status: 200,
      data: _db2.default.viewAnOffice(parseInt(req.params.officeId, 10))
    });
  }
};

exports.default = Offices;