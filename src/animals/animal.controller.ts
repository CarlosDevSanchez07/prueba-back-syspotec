import { Controller, Get, Post, Body, Put, Param, Delete, Query, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Animal } from './interfaces/animal';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalService.create(createAnimalDto);
  }

  @Get()
  @ApiQuery({ name: 'searchQuery', required: false, type: String })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('searchQuery') searchQuery?: string,
  ) {
    const data = await this.animalService.findAll(page, limit, searchQuery);

    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.animalService.findOne(id);
    return data;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return await this.animalService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.animalService.remove(id);
  }
}
