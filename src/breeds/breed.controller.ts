import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, DefaultValuePipe, Put } from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Breed } from './interfaces/breed';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Post()
  async create(@Body() createBreedDto: CreateBreedDto) {
    return await this.breedService.create(createBreedDto);
  }

  @Get()
  @ApiQuery({ name: 'searchQuery', required: false, type: String })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('searchQuery') searchQuery?: string,
  ) {
    const data = await this.breedService.findAll(page, limit, searchQuery);

    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.breedService.findOne(id);
    return data;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto) {
    return await this.breedService.update(id, updateBreedDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.breedService.remove(id);
  }
}
