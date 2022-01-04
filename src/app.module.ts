import {Module} from "@nestjs/common"
import {SequelizeModule} from "@nestjs/sequelize"
import {UsersModule} from "./users/users.module";
import {RolesModule} from './roles/roles.module';
// import {ConfigModule} from "@nestjs/config";
import {config} from "dotenv"
import {User} from "./users/users.model";
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
config()

@Module({
    controllers: [],
    providers: [],
    imports: [
        // ConfigModule.forRoot({
        //     envFilePath: `${process.env.NODE_ENV}.env`
        // }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
             password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            // еще один класс флаг, чтобы секвалайз создавал таблицы в бд на основании тех моделей которые мы будем создавать
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
    ]
})
export class AppModule {}