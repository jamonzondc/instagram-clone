import { Response, Request, NextFunction } from "express";
import { validateOrReject, validate } from 'class-validator';
import { SignupDTO } from './signup.dto';

class SignupValidation {

    async validate(req: Request, res: Response, next: NextFunction) {
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
export const signupValidation: SignupValidation = new SignupValidation();