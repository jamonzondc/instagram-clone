import { Response, Request, NextFunction } from "express";
import { authService } from './auth.service';
import { SigninDTO } from './signin/signin.dto';
import { Res } from '../shared/models/res.model';
import { SignupDTO } from "./signup/signup.dto";
class AuthController {

    public async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const siginDTO: SigninDTO = req.body;
            const response: Res = await authService.sigin(siginDTO);
            res.status(response.status).json(response.data);
        } catch (error) {
            next(error);
        }
    }
    public async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const signupDTO: SignupDTO = req.body;
            const response: Res = await authService.sigup(signupDTO);
            res.status(response.status).json(response.data);
        } catch (error) {
            next(error);
        }
    }
}
export const authController = new AuthController();