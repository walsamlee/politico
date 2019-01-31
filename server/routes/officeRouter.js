import express from 'express';

import Office from '../controllers/Office';

const router = express.Router();

router.get('/:officeId/result', Office.viewResult);

export default router;