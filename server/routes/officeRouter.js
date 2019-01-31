import express from 'express';

import Office from '../controllers/Office';

const router = express.Router();

router.post('/:userId/:register', Office.registerCandidate);

export default router;
