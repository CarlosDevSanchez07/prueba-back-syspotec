import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed, BreedDocument } from './schema/breed.schema';

@Injectable()
export class BreedService {
  constructor(@InjectModel(Breed.name) private readonly breedModel: Model<BreedDocument>) {}

  async create(createBreedDto: CreateBreedDto): Promise<Breed>{
    return await this.breedModel.create(createBreedDto);
  }

  async findAll(page: number, limit: number, searchQuery: string): Promise<Breed[]>{
    const filters: FilterQuery<BreedDocument> = {};
 
    if (searchQuery) {
      filters.$text = {
        $search: searchQuery,
      };
    }
 
    const findQuery = this.breedModel
      .find(filters)
      .sort({ _id: 1 })
      .skip(limit * page);
  
    if (limit) {
      findQuery.limit(limit);
    }
 
    return await findQuery;
  }

  async findOne(id: string): Promise<Breed>{
    return await this.breedModel.findOne({ _id: id });
  }

  async update(id: string, updateBreedDto: UpdateBreedDto): Promise<Breed>{
    return await this.breedModel.findOneAndUpdate({ _id: id }, updateBreedDto, {
      new: true
    });
  }

  async remove(id: string) {
    return await this.breedModel.findOneAndRemove({ _id: id });
  }
}
