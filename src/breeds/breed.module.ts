import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BreedController } from './breed.controller';
import { Breed, BreedSchema } from './schema/breed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]), 
  ],
  controllers: [BreedController],
  providers: [BreedService]
})

export class BreedModule {}
