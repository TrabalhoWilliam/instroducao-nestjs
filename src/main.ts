import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Minha API')
    .setDescription('Documentação automática gerada pelo Swagger')
    .setVersion('1.0')
    .addBearerAuth() // Para autenticação via JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    transform: true, // ativa a transformação usando class-transformer
    whitelist: true, // remove propriedades não declaradas no DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
