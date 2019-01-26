import express from 'express';
import Auth from '../middlewares/Auth'
import Parties from '../controllers/Parties'

const router = express.Router();

router.post('/parties', Parties.createParty);

export default router;