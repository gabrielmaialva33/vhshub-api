import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/modules/users/dto/update-user.dto';
import {
  IUserRepository,
  USERS_REPOSITORY,
} from '@src/modules/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUserRepository,
  ) {}

  create(data: CreateUserDto) {
    return this.usersRepository.create(data);
  }

  findAll() {
    return this.usersRepository.list();
  }

  findOne(id: number) {
    return this.usersRepository.fistBy('id', id);
  }

  update(id: number, data: UpdateUserDto) {
    return this.usersRepository.update(id, data);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
