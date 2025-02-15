import { Knex } from 'knex';
import {
  IUser,
  IUserRepository,
} from '@src/modules/users/interfaces/user.interface';

import { db } from '@src/database';

export class UsersRepository implements IUserRepository {
  private db: Knex = db;

  list(): Promise<any[]> {
    return this.db<IUser>('users');
  }

  async findBy(key: string, value: Knex.Value): Promise<any[]> {
    return this.db<IUser>('users').where(key, value);
  }

  async fistBy(key: string, value: Knex.Value): Promise<any> {
    return this.db<IUser>('users').where(key, value).first();
  }

  async create(payload: Knex.DbRecordArr<IUser>): Promise<any> {
    return this.db<IUser>('users').insert(payload).returning('*');
  }

  async update(id: number, payload: Knex.DbRecordArr<IUser>): Promise<any> {
    return this.db<IUser>('users')
      .where('id', id)
      .update(payload)
      .returning('*');
  }

  async delete(id: number): Promise<any> {
    return this.db<IUser>('users').where('id', id).delete();
  }
}
