import { Test, TestingModule } from '@nestjs/testing';
import { IUserRepository } from '../interfaces/user.interface';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: IUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
