import { Test, TestingModule } from '@nestjs/testing';
import { ProjecstController } from './projecst.controller';

describe('ProjecstController', () => {
  let controller: ProjecstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjecstController],
    }).compile();

    controller = module.get<ProjecstController>(ProjecstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
