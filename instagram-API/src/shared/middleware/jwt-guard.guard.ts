import { Response, Request, NextFunction } from "express";
import { jwtService, TokenInfo, JWTPayLoad } from "../jwt";

class JWTGuard {

    public async canActivate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // Beare 3213213.fffwef.321312321
            let token: string | undefined = req.headers['authorization']?.split(' ')[1];
            //verify the headers
            if (!token) {
                res.status(403).json({ message: 'The header autorization dont exist' });
                return;
            }
            //verify token and decode
            const tokenDecode = await jwtService.verify(token);

            // If everything fine, update token
            const payload: JWTPayLoad = {
                _id: tokenDecode._id,
                email: tokenDecode.email,
                name: tokenDecode.name,
                image: tokenDecode.image,
                tokenInfo: new TokenInfo()
            };
            //create the new token
            token = await jwtService.sign(payload);
            res.setHeader('authorization', `Bearer ${token}`);
            next();
        } catch (error) {
            next(error);
        }
    }

}
export const jWTGuard: JWTGuard = new JWTGuard();