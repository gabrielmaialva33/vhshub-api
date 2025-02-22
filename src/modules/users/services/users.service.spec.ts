import { Test, TestingModule } from '@nestjs/testing';

import { createMock } from '@golevelup/ts-jest';

import {
  IUserRepository,
  USERS_REPOSITORY,
} from '@src/modules/users/interfaces/user.interface';
import { UsersService } from '@src/modules/users/services/users.service';
import { CreateUserDto } from '@src/modules/users/dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: jest.Mocked<IUserRepository>;

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
    usersRepository = module.get(USERS_REPOSITORY);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  it('should call create method', async () => {
    // todo - create a factory for CreateUserDto (stub) with https://fakerjs.dev/
    const userData: CreateUserDto = {
      name: 'John Doe',
      email: 'jd@email.com',
      password: '12345678',
      username: 'johndoe',
    };

    // mock create method from repository
    usersRepository.create.mockResolvedValue({
      id: 1,
      ...userData,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // call service method
    const createdUser = await service.create(userData);

    // repository assertions
    expect(usersRepository.create).toBeCalledWith(userData);
    expect(usersRepository.create).toBeCalledTimes(1);

    // service assertions
    expect(createdUser).toBeDefined();
    expect(createdUser.id).toBeDefined();
    expect(createdUser.id).toEqual(expect.any(Number));
  });
});
