export const USERS_REPOSITORY = Symbol.for('USERS_REPOSITORY');

export interface IUserRepository {
  list(): Promise<any[]>;

  findBy(key: string, value: any): Promise<any[]>;

  fistBy(key: string, value: any): Promise<any>;

  create(payload: any): Promise<any>;

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
