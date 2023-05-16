import { Test, TestingModule } from '@nestjs/testing';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { BreedService } from './breed.service';

describe('BreedService', () => {
  let service: BreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedService],
    }).compile();

    service = module.get<BreedService>(BreedService);
  });

  describe('Test service', () => {
    it('should call findOne method with expected param', async () => {
      const findOneSpy = jest.spyOn(service, 'findOne');
      const findOneOptions = 'Id';
      service.findOne(findOneOptions);
      expect(findOneSpy).toHaveBeenCalledWith(findOneOptions);
    });

    it('calling create task method', async () => {
      const createSpy = jest.spyOn(service, 'create');
      const dto = new CreateBreedDto();
      service.create(dto);
      expect(createSpy).toHaveBeenCalledWith(dto);
    });

    it('should call update method with expected params', async () => {
      const updateSpy = jest.spyOn(service, 'update');
      const taskId = 'taskId';
      const dto = new UpdateBreedDto();
      service.update(taskId, dto);
      expect(updateSpy).toHaveBeenCalledWith(taskId, dto);
    });
  
    it('should call delete method with expected param', async () => {
      const removeSpy = jest.spyOn(service, 'remove');
      const taskId = 'taskId';
      service.remove(taskId);
      expect(removeSpy).toHaveBeenCalledWith(taskId);
    });
  })
});
