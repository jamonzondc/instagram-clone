import { Router } from 'express';
import { signinDTOPipe } from './signin/signin.pipe';
import { signupDTOPipe } from './signup/signup.pipe';
import { authController } from './auth.controller';

const router: Router = Router();
router.post('/signin', signinDTOPipe.validate, authController.signin);
router.post('/signup', signupDTOPipe.validate, authController.signup);

export default router;
