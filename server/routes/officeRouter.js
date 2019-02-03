import express from 'express';

import Verifications from '../middlewares/Verifications';
import Office from '../controllers/Office';

const router = express.Router();

router.post('/:userId/register', Verifications.isAdmin, Office.registerCandidate);

router.get('/:officeId/result', Office.viewResult);

export default router;
