import { Router } from 'express';
import { postController } from './post.controller';
import {postDTOPipe} from './post.pipe';
import {jWTGuard} from '../shared/middleware/jwt-guard.guard';

const router: Router = Router();

router.post('/',jWTGuard.canActivate, postDTOPipe.validate, postController.save);
router.get('/',jWTGuard.canActivate, postController.findAll);

export default router;