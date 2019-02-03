import express from 'express';

import Verifications from '../middlewares/Verifications';
import Vote from '../controllers/Vote';

const router = express.Router();

router.post('/', Verifications.loggedIn, Vote.castVote);

export default router;