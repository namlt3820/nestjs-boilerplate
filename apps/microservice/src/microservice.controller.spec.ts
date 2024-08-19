import { Test, TestingModule } from '@nestjs/testing';

import { MicroserviceController } from './microservice.controller';

describe('MicroserviceController', () => {
  let microserviceController: MicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceController],
      providers: [],
    }).compile();

    microserviceController = app.get<MicroserviceController>(
      MicroserviceController,
    );
  });
});
