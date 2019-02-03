'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Verifications = require('../middlewares/Verifications');

var _Verifications2 = _interopRequireDefault(_Verifications);

var _Vote = require('../controllers/Vote');

var _Vote2 = _interopRequireDefault(_Vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _Verifications2.default.loggedIn, _Vote2.default.castVote);

exports.default = router;