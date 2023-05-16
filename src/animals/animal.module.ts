import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalController } from './animal.controller';
import { Animal, AnimalSchema } from './schema/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]), 
  ],
  controllers: [AnimalController],
  providers: [AnimalService]
})

export class AnimalModule {}
