
import { SigninDTO } from './signin/signin.dto';
import { SignupDTO } from './signup/signup.dto';
import { userDAO } from '../user/user.dao';
import { bcrypt } from '../shared/services/bcrypt.service';
import { User } from '../user/user.model';
import { Res } from '../shared/models/res.model';
import { jwtService, TokenInfo, JWTPayLoad } from '../shared/jwt';

class AuthService {

    public async sigin(signinDTO: SigninDTO): Promise<Res> {
        const user: User = await userDAO.findOneUserByEmail(signinDTO.email);

        if (!user)
            return { status: 404, data: { message: 'User not found' } };

        const matchPassword = await bcrypt.compare(signinDTO.password, user.password);

        if (!matchPassword)
            return { status: 403, data: { message: 'Authentication error, wrong password' } };

        const payload: JWTPayLoad = {
            _id: user._id,
            email: user.email,
            name: user.name,
            image: user.image,
            tokenInfo: new TokenInfo()
        };
        const token: string | undefined = await jwtService.sign(payload);
        return { status: 200, data: { token } };
    }
    public async sigup(signupDTO: SignupDTO): Promise<Res> {
        let user: User = signupDTO as User;
        user.password = await bcrypt.encrypt(signupDTO.password);
        user = await userDAO.save(signupDTO as User);
        return { status: 200, data: { user } };
    }
}
export const authService: AuthService = new AuthService();