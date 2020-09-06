import { User } from "./user.model";
import { UserSchema, UserDocument } from "./user.schema";

class UserDAO {

    public async findOneUserByEmail(email: string): Promise<User> {
        const user: User = await UserSchema.findOne({ email }).lean() as User;
        return user;
    }
    public async save(user: User): Promise<User> {
        const newUuser: User = await new UserSchema(user).save();
        return newUuser;
    }

}
export const userDAO = new UserDAO();