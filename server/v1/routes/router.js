import express from 'express';
import Parties from '../controllers/Parties';
import Offices from '../controllers/Offices';

const router = express.Router();

router.post('/parties', Parties.createParty);
router.post('/offices', Offices.createOffice);

export default router;
