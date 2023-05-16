import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose } from 'mongoose';
import { BreedSchema, Breed } from '../../breeds/schema/breed.schema';

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal extends Document {
  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
    enum: ['ACTIVE', 'INACTIVE'],
  })
  status: string;

  @Prop({
    type: Date,
    default: new Date(),
  })
  createdAt: Date;

  @Prop({ type: SchemaMongoose.Types.ObjectId, required: true, ref: "Breed" })
  breed: Breed;
}

const AnimalSchema = SchemaFactory.createForClass(Animal);
AnimalSchema.index({ name: 'text' });

export { AnimalSchema };
