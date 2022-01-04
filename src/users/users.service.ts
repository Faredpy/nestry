import { Injectable } from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        // здесь необходимо указать, что данная роль принадлежит пользователю,
        // для этого используем метод $set который позволяет перезаписать
        // какое-либо поле и сразу обновить его внутри базы данных
        // поскольку изначально у пользователя ролей нет указываем массив
        // в который добавляем один единственный id
        await user.$set('roles', [role.id])
        return user;
    }

    async getAllUser() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

}
