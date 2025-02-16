import { db } from '@src/database';
import { z } from 'zod';
import { IUser } from '../interfaces/user.interface';

export const createUserSchema = z.object({
  name: z.string().min(1),
  username: z
    .string()
    .min(1)
    .refine(async (value) => {
      const isExiting = await db<IUser>('users').where({ username: value });

      if (isExiting.length > 0) return false;
      return true;
    }),
  email: z.string().email('This is not a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
export type CreateUserDto = z.infer<typeof createUserSchema>;
