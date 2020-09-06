import { Router } from 'express';
import auth from './auth/auth.routes';

const router: Router = Router();

router.use('/auth', auth);


export default router;