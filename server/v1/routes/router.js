import express from 'express';

import Offices from '../controllers/Offices';
import Parties from '../controllers/Parties';

const router = express.Router();

router.patch('/parties/:partyId/:name', Parties.editPartyById);
router.post('/parties', Parties.createParty);
router.delete('/parties/:partyId', Parties.deletePartyById);
router.get('/parties/:partyId', Parties.viewPartyById);
router.get('/parties', Parties.viewParties);

router.post('/offices', Offices.createOffice);
router.get('/offices', Offices.viewOffices);

export default router;
