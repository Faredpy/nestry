import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth-guard";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const configSW = new DocumentBuilder()
        .setTitle('My app NEST')
        .setDescription('Documentation REST API')
        .setVersion('1.0.0')
        .addTag('nestgo')
        .build()
    const document = SwaggerModule.createDocument(app, configSW)
    SwaggerModule.setup('/api/docs', app, document)
    //Все endpoints будут доступны только зарегистрированным пользоватеям
    // app.useGlobalGuards(JwtAuthGuard)

    await app.listen(PORT, () => {
        console.log('Hi bro' + ` ${PORT}`)
    })
}

start()