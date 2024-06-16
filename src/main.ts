import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ///CORS
  app.enableCors();

  //swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Backend API Nest')
    .setDescription('Backend API Nest')
    .setVersion('Api Rest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  //Class Validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
