import { Test, TestingModule } from '@nestjs/testing';
import { UseCaseService } from './use-case.service';

describe('UseCaseService', () => {
  let service: UseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UseCaseService],
    }).compile();

    service = module.get<UseCaseService>(UseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
