import express from 'express';
import { salesHistoryController } from './salesHistory.controller';
import auth from '../../middlewares/auth';

const router = express.Router();
// get Sales History
router.get('/sales',auth('seller'), salesHistoryController.getSalesHistory);

export const salesHistoryRoutes = router;
