import { Module } from '@nestjs/common';
import { UsersController } from '@src/modules/users/controllers/users.controller';
import { UsersService } from '@src/modules/users/services/users.service';
import { USERS_REPOSITORY } from '@src/modules/users/interfaces/user.interface';
import { UsersRepository } from '@src/modules/users/repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
