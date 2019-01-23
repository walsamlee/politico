import express from 'express';
import Parties from '../controllers/Parties';

const router = express.Router();

router.delete('/parties/:partyId', Parties.deletePartyById);

export default router;