import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal, AnimalDocument } from './schema/animal.schema';

@Injectable()
export class AnimalService {
  constructor(@InjectModel(Animal.name) private readonly animalModel: Model<AnimalDocument>) {}

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal>{
    return await this.animalModel.create(createAnimalDto);
  }

  async findAll(page: number, limit: number, searchQuery: string): Promise<Animal[]>{
    const filters: FilterQuery<AnimalDocument> = {};
 
    if (searchQuery) {
      filters.$text = {
        $search: searchQuery,
      };
    }
 
    const findQuery = this.animalModel
      .find(filters)
      .populate('breed')
      .sort({ _id: 1 })
      .skip(limit * page);
  
    if (limit) {
      findQuery.limit(limit);
    }
 
    return await findQuery;
  }

  async findOne(id: string): Promise<Animal>{
    return await this.animalModel.findOne({ _id: id }).populate('breed');
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<Animal>{
    return await this.animalModel.findOneAndUpdate({ _id: id }, updateAnimalDto, {
      new: true
    });
  }

  async remove(id: string) {
    return await this.animalModel.findOneAndRemove({ _id: id });
  }
}
