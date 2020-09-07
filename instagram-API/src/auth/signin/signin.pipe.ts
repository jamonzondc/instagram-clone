import { Response, Request, NextFunction } from "express";
import { validateOrReject, validate } from 'class-validator';
import { SigninDTO } from './signin.dto';

class SigninDTOPipe {

    public async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body: SigninDTO = new SigninDTO(req.body.email, req.body.password);
            await validateOrReject(body);
            next();
        } catch (error) {
            // res.status(402).json({ message: error })
            next(error);
        }
    }
}
export const signinDTOPipe: SigninDTOPipe = new SigninDTOPipe();