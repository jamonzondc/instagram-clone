import { verify, sign, VerifyErrors } from 'jsonwebtoken';
import { JWTPayLoad } from './jwt-payload.interfaces';

class JWTService {

    public async verify(token: string): Promise<JWTPayLoad> {
        return new Promise((resolve, reject) => {
            verify(token, process.env.JWT_WORLD || 'test', (err: (VerifyErrors | null), decoded: (object | undefined)) => {
                console.log('verify--> ', err)
                if (err)
                    reject(err);
                resolve(decoded as JWTPayLoad);
            });
        });
    }
    public async sign(jwtPayLoad: JWTPayLoad): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            sign(jwtPayLoad, process.env.JWT_WORLD || 'test', (err: Error | null, encoded: string | undefined) => {
                if (err)
                    reject(err);
                resolve(encoded);
            });
        });
    }
}
export const jwtService: JWTService = new JWTService();