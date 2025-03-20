import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';

import { UsersService } from '@src/modules/users/services/users.service';
import { UsersController } from '@src/modules/users/controllers/users.controller';
import {
  IUserRepository,
  USERS_REPOSITORY,
} from '@src/modules/users/interfaces/user.interface';

describe('UsersController', () => {
  let controller: UsersController;
  let usersRepository: IUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: USERS_REPOSITORY,
          useValue: createMock<IUserRepository>(),
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersRepository = module.get<IUserRepository>(USERS_REPOSITORY);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(usersRepository).toBeDefined();
  });
});
