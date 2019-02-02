import express from 'express';

import Verifications from '../middlewares/Verifications';
import Offices from '../controllers/Offices';
import Parties from '../controllers/Parties';

const router = express.Router();

router.patch('/parties/:partyId/name', Verifications.loggedIn, Parties.editPartyById);
router.post('/parties', Verifications.loggedIn, Parties.createParty);
router.delete('/parties/:partyId', Verifications.loggedIn, Parties.deletePartyById);
router.get('/parties/:partyId', Parties.viewPartyById);
router.get('/parties', Parties.viewParties);

router.post('/offices', Verifications.loggedIn, Offices.createOffice);
router.get('/offices', Offices.viewOffices);
router.get('/offices/:officeId', Offices.viewOfficeById);

export default router;
