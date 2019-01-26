import express from 'express';
import Offices from '../controllers/Offices';

const router = express.Router();

router.post('/offices', Offices.createOffice);

export default router;

