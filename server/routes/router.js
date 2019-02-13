import express from 'express';

import Verifications from '../middlewares/Verifications';
import Auth from '../controllers/Auth';
import Offices from '../controllers/Offices';
import Parties from '../controllers/Parties';
import Office from '../controllers/Office';
import Vote from '../controllers/Vote';

const router = express.Router();

router.post('/auth/login', Auth.login);
router.post('/auth/signup', Auth.signup);

router.patch('/parties/:partyId/name', Verifications.isAdmin, Parties.editPartyById);
router.post('/parties', Verifications.isAdmin, Parties.createParty);
router.delete('/parties/:partyId', Verifications.isAdmin, Parties.deletePartyById);
router.get('/parties/:partyId', Parties.viewPartyById);
router.get('/parties', Parties.viewParties);

router.post('/offices', Verifications.isAdmin, Offices.createOffice);
router.get('/offices', Offices.viewOffices);
router.get('/offices/:officeId', Offices.viewOfficeById);

router.post('/office/:userId/register', Verifications.isAdmin, Office.registerCandidate);
router.get('/office/:officeId/result', Office.viewResult);

router.post('/votes/', Verifications.loggedIn, Vote.castVote);

export default router;
