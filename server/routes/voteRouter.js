import express from 'express';

import Vote from '../controllers/Vote';

const router = express.Router();

router.post('/', Vote.castVote);

export default router;