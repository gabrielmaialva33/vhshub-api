import { Test, TestingModule } from '@nestjs/testing';

import { createMock } from '@golevelup/ts-jest';

import {
  IUserRepository,
  USERS_REPOSITORY,
} from '@src/modules/users/interfaces/user.interface';
import { UsersService } from '@src/modules/users/services/users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: IUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USERS_REPOSITORY,
          useValue: createMock<IUserRepository>(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<IUserRepository>(USERS_REPOSITORY);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(usersRepository).toBeDefined();
  });
});
