import { z } from 'zod';
import { User } from '../entities/user.entity';

export const updateUserSchema = z
  .object({
    name: z.string().min(1).optional(),

    username: z
      .string()
      .min(1)
      .refine(async (value) => User.isUnique('username', value), {
        message: 'Username already exists',
      })
      .optional(),

    email: z
      .string()
      .email('This is not a valid email')
      .refine(async (value) => User.isUnique('email', value), {
        message: 'Email already exists',
      })
      .refine((value) => User.emailRegex.test(value), {
        message: 'Ensure email follows a valid format.',
      })
      .optional(),

    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .refine((value) => User.passwordRegex.test(value), {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
      })
      .optional(),
  })
  .partial();

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
