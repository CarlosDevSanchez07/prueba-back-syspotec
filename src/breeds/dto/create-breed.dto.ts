import { IsString } from 'class-validator';
import { Status } from '../interfaces/breed'

export class CreateBreedDto {
    @IsString()
    description: string;

    @IsString()
    status: Status;
}
