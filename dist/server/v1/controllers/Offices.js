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

    var officeId = req.body.id;

    if (typeof officeId === 'string') officeId = parseInt(officeId, 10);

    var officeType = req.body.type;
    var officeName = req.body.name;

    var office = {
      id: officeId,
      type: officeType,
      name: officeName
    };

    _db2.default.addOffice(office);

    return res.json({
      status: 201,
      data: [office]
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