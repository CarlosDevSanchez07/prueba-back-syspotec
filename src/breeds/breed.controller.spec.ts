import { Test, TestingModule } from '@nestjs/testing';
import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

describe('BreedController', () => {
  let controller: BreedController;
  let service: BreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedController],
      providers: [BreedService],
    }).compile();

    controller = module.get<BreedController>(BreedController);
    service = module.get<BreedService>(BreedService);
  });

  describe('Task controller test', () => {

    it("calling create method", () => {
      const dto = new CreateBreedDto();
      expect(controller.create(dto)).not.toEqual(null);
    })
  
    it("calling create method", () => {
      const dto = new CreateBreedDto();
      controller.create(dto);
      expect(service.create).toHaveBeenCalled();
      expect(service.create).toHaveBeenCalledWith(dto);
    })
  
    it("calling getAll method", () => {
      controller.findAll(1, 10);
      expect(service.findAll).toHaveBeenCalled();
    })
  
    it("calling find findOne method", () => {
      const id = 'Id';
      controller.findOne(id);
      expect(service.findOne).toHaveBeenCalled();
    })

  });
});
