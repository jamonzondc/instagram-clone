import jwt from 'jsonwebtoken';
import { SigninDTO } from './signin/signin.dto';
import { SignupDTO } from './signup/signup.dto';
import { userDAO } from '../user/user.dao';
import { promisify } from 'util';
import { bcrypt } from '../shared/services/bcrypt.service';
import { format, add, Duration } from "date-fns";
import { User } from '../user/user.model';
import { Res } from '../shared/models/res.model';
class AuthService {

    public async sigin(signinDTO: SigninDTO): Promise<Res> {
        const user: User = await userDAO.findOneUserByEmail(signinDTO.email);

        if (!user)
            return { status: 404, data: { message: 'User not found' } };

        const matchPassword = await bcrypt.compare(signinDTO.password, user.password);

        if (!matchPassword)
            return { status: 403, data: { message: 'Authentication error, wrong password' } };

        const date: Date = new Date();
        const payload = {
            id: user._id,
            email: user.email,
            name: user.name,
            image: user.image,
            tokenInfo: {
                init: format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
                exp: add(date, { minutes: 10 }),
            },
        };
        const signPromise = promisify(jwt.sign);
        const token = await signPromise({ payload }, process.env.JWT_WORLD || 'test');
        return { status: 200, data: { token } };
    }
    public async sigup(signupDTO: SignupDTO): Promise<Res> {
        signupDTO.password = await bcrypt.encrypt(signupDTO.password);
        const user: User = await userDAO.save(signupDTO as User);
        return { status: 200, data: { user } };
    }
}
export const authService: AuthService = new AuthService();