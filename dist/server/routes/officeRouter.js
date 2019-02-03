'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Verifications = require('../middlewares/Verifications');

var _Verifications2 = _interopRequireDefault(_Verifications);

var _Office = require('../controllers/Office');

var _Office2 = _interopRequireDefault(_Office);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/:userId/register', _Verifications2.default.isAdmin, _Office2.default.registerCandidate);

router.get('/:officeId/result', _Office2.default.viewResult);

exports.default = router;