import { CreateUserDto } from '@src/modules/users/dto/create-user.dto';

export const USERS_REPOSITORY = Symbol.for('USERS_REPOSITORY');

export interface IUserRepository {
  list(): Promise<any[]>;

  findAll(key: string, value: any): Promise<any[]>;

  firstBy(key: string, value: any): Promise<any>;

  create(payload: CreateUserDto): Promise<IUser>;

  update(id: number, payload: any): Promise<any>;

  delete(id: number): Promise<any>;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
