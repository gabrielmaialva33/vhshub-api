import { db } from '@src/database';
import { IUser } from '../interfaces/user.interface';

export class User {
  static tableName = 'users';

  static isUnique = async (field: keyof IUser, value: string) => {
    const exiting = await db<IUser>(this.tableName)
      .where({ [field]: value })
      .first();
    return !exiting;
  };

  static passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-={}[\]:;"'<>,.?/|]).{8,}$/;
}
