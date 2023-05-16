import { IsString } from 'class-validator';
import { Status } from '../interfaces/animal'

export class CreateAnimalDto {
    @IsString()
    description: string;

    @IsString()
    status: Status

    @IsString()
    breed: string;
}
