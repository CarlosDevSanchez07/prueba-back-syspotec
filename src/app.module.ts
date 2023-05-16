import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './animals/animal.module';
import { BreedModule } from './breeds/breed.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST || '127.0.0.1'}:${process.env.MONGO_PORT || '27017'}/test-prueba`),
    AnimalModule,
    BreedModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
