import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

describe('AnimalController', () => {
  let controller: AnimalController;
  let service: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [AnimalService],
    }).compile();

    controller = module.get<AnimalController>(AnimalController);
    service = module.get<AnimalService>(AnimalService);
  });

  describe('Task controller test', () => {

    it("calling create method", () => {
      const dto = new CreateAnimalDto();
      expect(controller.create(dto)).not.toEqual(null);
    })
  
    it("calling create method", () => {
      const dto = new CreateAnimalDto();
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
