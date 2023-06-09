import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder() 
    .setTitle('Test REST Api')
    .setDescription('Api REST mongo, nestjs')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, options); 

  SwaggerModule.setup('docs', app, document);

  await app.listen(4001);
}
bootstrap();
