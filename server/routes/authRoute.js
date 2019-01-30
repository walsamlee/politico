import express from 'express';

import Auth from '../controllers/Auth';

const router = express.Router();

router.get('/login', Auth.login);

export default router;