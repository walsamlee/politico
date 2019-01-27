'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Offices = require('../controllers/Offices');

var _Offices2 = _interopRequireDefault(_Offices);

var _Parties = require('../controllers/Parties');

var _Parties2 = _interopRequireDefault(_Parties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.patch('/parties/:partyId/:name', _Parties2.default.editPartyById);
router.post('/parties', _Parties2.default.createParty);
router.delete('/parties/:partyId', _Parties2.default.deletePartyById);
router.get('/parties/:partyId', _Parties2.default.viewPartyById);
router.get('/parties', _Parties2.default.viewParties);

router.post('/offices', _Offices2.default.createOffice);
router.get('/offices', _Offices2.default.viewOffices);
router.get('/offices/:officeId', _Offices2.default.viewOfficeById);

exports.default = router;