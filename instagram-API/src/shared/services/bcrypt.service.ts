import { genSalt, hash, compare } from 'bcryptjs';

class Bcrypt {
    public async encrypt(password: string): Promise<string> {
        try {
            const salt: string = await genSalt(10);
            const crypt: string = await hash(password, salt);
            return crypt;
        } catch (error) {
            throw error
        }
    }

    public async compare(password: string, confirmPassword: string): Promise<boolean> {
        try {
            return await compare(password, confirmPassword);
        } catch (error) {
            throw error
        }
    }
}
export const bcrypt: Bcrypt = new Bcrypt();