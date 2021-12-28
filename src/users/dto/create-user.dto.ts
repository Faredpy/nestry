import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType} from "sequelize-typescript";

export class CreateUserDto {
    @ApiProperty({example: 'a@a.com', description: 'Адрес электронной почты'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly password: string;
}