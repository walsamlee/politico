import express from 'express';

import Verifications from '../middlewares/Verifications';
import Offices from '../controllers/Offices';
import Parties from '../controllers/Parties';

const router = express.Router();

router.patch('/parties/:partyId/name', Verifications.isAdmin, Parties.editPartyById);
router.post('/parties', Verifications.isAdmin, Parties.createParty);
router.delete('/parties/:partyId', Verifications.isAdmin, Parties.deletePartyById);
router.get('/parties/:partyId', Parties.viewPartyById);
router.get('/parties', Parties.viewParties);

router.post('/offices', Verifications.isAdmin, Offices.createOffice);
router.get('/offices', Offices.viewOffices);
router.get('/offices/:officeId', Offices.viewOfficeById);

export default router;
