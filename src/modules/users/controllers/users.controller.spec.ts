import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from '@src/modules/users/services/users.service';
import { UsersController } from '@src/modules/users/controllers/users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
