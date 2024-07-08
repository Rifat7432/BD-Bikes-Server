import express from 'express';
import { authenticationZodSchema } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { authenticationControllers } from './auth.controller';



const router = express.Router();

router.post('/login',validateRequest(authenticationZodSchema.loginUserZodSchema),authenticationControllers.loginUser);


export const authRoutes = router;
