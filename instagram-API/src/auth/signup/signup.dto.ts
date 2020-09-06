import { IsString, MinLength, MaxLength, IsEmail, IsNotEmpty } from 'class-validator';

export class SignupDTO {

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

    @IsString()
    @IsNotEmpty()
    name: string = '';

    @IsString()
    image: string | undefined = '';

    constructor(email: string, password: string, name: string, image?: string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.image = image;
    }
}