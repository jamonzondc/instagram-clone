import { Router } from 'express';
import { signinValidation } from './signin/signin.middleware';
import { signupValidation } from './signup/signup.middleware';
import { authController } from './auth.controller';

const router: Router = Router();
router.post('/signin', signinValidation.validate, authController.signin);
router.post('/signup', signupValidation.validate, authController.signup);

export default router;
