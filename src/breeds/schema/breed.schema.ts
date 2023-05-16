import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BreedDocument = Breed & Document;

@Schema()
export class Breed extends Document {
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
}

const BreedSchema = SchemaFactory.createForClass(Breed);
BreedSchema.index({ name: 'text' });

export { BreedSchema };
