import { IsString, MinLength, MaxLength, IsEmail, IsNotEmpty } from 'class-validator';

export class SigninDTO {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string = '';

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {
        message: "Password is too short"
    })
    @MaxLength(8, {
        message: "Password is too long"
    })
    password: string = '';

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}