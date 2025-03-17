import { Test, TestingModule } from '@nestjs/testing';

import { createMock } from '@golevelup/ts-jest';

import {
  IUserRepository,
  USERS_REPOSITORY,
} from '@src/modules/users/interfaces/user.interface';
import { UsersService } from '@src/modules/users/services/users.service';

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

  describe('findOne method user', () => {
    it('should return one user', async () => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: '12345678',
        username: 'johndoe',
      };

      usersRepository.firstBy = jest.fn().mockResolvedValue({
        ...userData,
        created_at: new Date(),
        updated_at: new Date(),
      });

      const result = await service.findOne(userData.id);

      expect(usersRepository.firstBy).toHaveBeenCalledWith('id', userData.id);

      expect(result).toBeDefined();
      expect(result.id).toBe(userData.id);
    });
  });
});
