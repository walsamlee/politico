import express from 'express';

import Offices from '../controllers/Offices';

const router = express.Router();

router.get('/offices', Offices.viewOffices);

export default router;