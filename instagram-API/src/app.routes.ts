import { Router } from 'express';
import auth from './auth/auth.routes';
import post from './post/post.routes';

const router: Router = Router();

router.use('/auth', auth);
router.use('/posts', post);


export default router;