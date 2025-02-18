import {
  IUser,
  IUserRepository,
} from '@src/modules/users/interfaces/user.interface';
import { Knex } from 'knex';

import { db } from '@src/database';
import { User } from '../entities/user.entity';

export class UsersRepository implements IUserRepository {
  private db: Knex = db;

  list(): Promise<any[]> {
    return this.db<IUser>(User.tableName);
  }

  async findBy(key: string, value: Knex.Value): Promise<any[]> {
    return this.db<IUser>(User.tableName).where(key, value);
  }

  async fistBy(key: string, value: Knex.Value): Promise<any> {
    return this.db<IUser>(User.tableName).where(key, value).first();
  }

  async create(payload: Knex.DbRecordArr<IUser>): Promise<any> {
    return this.db<IUser>(User.tableName).insert(payload).returning('*');
  }

  async update(id: number, payload: Knex.DbRecordArr<IUser>): Promise<any> {
    return this.db<IUser>(User.tableName)
      .where('id', id)
      .update(payload)
      .returning('*');
  }

  async delete(id: number): Promise<any> {
    return this.db<IUser>(User.tableName).where('id', id).delete();
  }
}
