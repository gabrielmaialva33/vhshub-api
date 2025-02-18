import { db } from '@src/database';
import { z } from 'zod';
import { IUser } from '../interfaces/user.interface';

const isUnique = async (field: keyof IUser, value: string) => {
  const exiting = await db<IUser>('users')
    .where({ [field]: value })
    .first();
  return !exiting;
};

export const createUserSchema = z.object({
  name: z.string().min(1),
  username: z
    .string()
    .min(1)
    .refine(async (value) => isUnique('username', value), {
      message: 'Username already exists',
    }),
  email: z
    .string()
    .email('This is not a valid email')
    .refine(async (value) => isUnique('email', value), {
      message: 'Email already exists',
    }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
