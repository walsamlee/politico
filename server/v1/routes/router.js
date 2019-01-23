import express from 'express';
import Parties from '../controllers/Parties';

const router = express.Router();

router.get('/parties/:partyId', Parties.viewPartyById);

export default router;