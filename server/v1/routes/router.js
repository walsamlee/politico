import express from 'express';

import Parties from '../controllers/Parties';
import Offices from '../controllers/Offices';

const router = express.Router();

router.patch('/parties/:partyId/:name', Parties.editPartyById);
router.post('/parties', Parties.createParty);
router.delete('/parties/:partyId', Parties.deletePartyById);
router.get('/parties/:partyId', Parties.viewPartyById);

router.post('/offices', Offices.createOffice);

export default router;
