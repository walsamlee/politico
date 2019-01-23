import express from 'express';
import Parties from '../controllers/Parties';

const router = express.Router();

router.patch('/parties/:partyId/:name', Parties.editPartyById);

export default router;