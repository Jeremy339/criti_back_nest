import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ description: 'Nombre de usuario' })
    @IsString({ message: 'El nombre debe ser con caracteres' })
    @IsNotEmpty({ message: 'El nombre no debe estar vacío' })
    name: string;

    @ApiProperty({ description: 'Correo Electrónico' })
    @IsEmail({}, { message: 'El formato debe ser de correo' })
    @IsNotEmpty({ message: 'El correo no debe estar vacío' })
    mail: string;

    @ApiProperty({ description: 'Contraseña' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @IsString({ message: 'La contraseña debe ser una cadena de caracteres' })
    @IsNotEmpty({ message: 'La contraseña no debe estar vacía' })
    password: string;
}