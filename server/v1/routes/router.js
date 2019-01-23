import express from 'express';
import Parties from '../controllers/Parties';

const router = express.Router();

router.get('/parties', Parties.viewParties);

export default router;