import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserZodValidation } from './user.validation';



const router = express.Router();

router.post(
  '/register',
  validateRequest(UserZodValidation.createUserZodValidation),
  userController.createUser,
);
export const userRoutes = router;
