import { IsString, MinLength, MaxLength, IsEmail, IsNotEmpty } from 'class-validator';

export class SignupDTO {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string = '';

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {
        message: "Password is too short"
    })
    @MaxLength(8, {
        message: "Password is too long"
    })
    readonly password: string = '';

    @IsString()
    @IsNotEmpty()
    readonly name: string = '';

    @IsString()
    readonly image: string | undefined = '';

    constructor(email: string, password: string, name: string, image?: string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.image = image;
    }
}