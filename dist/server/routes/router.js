'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Verifications = require('../middlewares/Verifications');

var _Verifications2 = _interopRequireDefault(_Verifications);

var _Auth = require('../controllers/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _Offices = require('../controllers/Offices');

var _Offices2 = _interopRequireDefault(_Offices);

var _Parties = require('../controllers/Parties');

var _Parties2 = _interopRequireDefault(_Parties);

var _Office = require('../controllers/Office');

var _Office2 = _interopRequireDefault(_Office);

var _Vote = require('../controllers/Vote');

var _Vote2 = _interopRequireDefault(_Vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/auth/login', _Auth2.default.login);
router.post('/auth/signup', _Auth2.default.signup);

router.patch('/parties/:partyId/name', _Verifications2.default.isAdmin, _Parties2.default.editPartyById);
router.post('/parties', _Verifications2.default.isAdmin, _Parties2.default.createParty);
router.delete('/parties/:partyId', _Verifications2.default.isAdmin, _Parties2.default.deletePartyById);
router.get('/parties/:partyId', _Parties2.default.viewPartyById);
router.get('/parties', _Parties2.default.viewParties);

router.post('/offices', _Verifications2.default.isAdmin, _Offices2.default.createOffice);
router.get('/offices', _Offices2.default.viewOffices);
router.get('/offices/:officeId', _Offices2.default.viewOfficeById);

router.post('/office/:userId/register', _Verifications2.default.isAdmin, _Office2.default.registerCandidate);
router.get('/office/:officeId/result', _Office2.default.viewResult);

router.post('/votes/', _Verifications2.default.loggedIn, _Vote2.default.castVote);

exports.default = router;