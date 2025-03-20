import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';

import {
  CreateUserDto,
  createUserSchema,
} from '@src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/modules/users/dto/update-user.dto';
import { UsersService } from '@src/modules/users/services/users.service';

import { ZodValidationPipe } from '@src/pipes/zod-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  create(
    @Body()
    data: CreateUserDto,
  ) {
    return this.usersService.create(data);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
