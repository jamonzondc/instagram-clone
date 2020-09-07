import { Response, Request, NextFunction } from "express";
import { validateOrReject, validate } from 'class-validator';
import { SignupDTO } from './signup.dto';

class SignupDTOPipe {

    public async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body: SignupDTO = new SignupDTO(req.body.email, req.body.password, req.body.name, req.body.image);
            await validateOrReject(body);
            next();
        } catch (error) {
            // res.status(402).json({ message: error })
            next(error);
        }
    }
}
export const signupDTOPipe: SignupDTOPipe = new SignupDTOPipe();