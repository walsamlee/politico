import express from 'express';

import Offices from '../controllers/Offices';
import Parties from '../controllers/Parties';

const router = express.Router();

router.patch('/parties/:partyId/:name', Parties.editPartyById);
router.post('/parties', Parties.createParty);
router.delete('/parties/:partyId', Parties.deletePartyById);

router.post('/offices', Offices.createOffice);

export default router;
