import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // this will remove unecessary keys from body (or query / params) object via checking the DTO but not give 400 to api request
    forbidNonWhitelisted: true, // this will give 400 if something extra unknown is coming from body / params / query via checking DTO
    transform:true, // transforms the incoming data with the DTOs, so they will be the instanceof those DTOs
    transformOptions: {
      enableImplicitConversion: true, // auto parse / converts into the required DTOs
    }
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
