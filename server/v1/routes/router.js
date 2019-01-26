import express from 'express';

import Office from '../controllers/Offices';

const router = express.Router();

router.get('/offices/:officeId', Office.viewOfficeById);

export default router;