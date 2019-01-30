import express from 'express';

import Auth from '../controllers/Auth';

const router = express.Router();

router.post('/signup', Auth.signup);

export default router;