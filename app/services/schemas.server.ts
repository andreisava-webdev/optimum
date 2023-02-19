import { z } from 'zod';

export const sessionUserSchema = z.object({
  id: z.string(),
  email: z.string(),
});

export const userFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string().optional(),
});

export type SessionUserType = z.infer<typeof sessionUserSchema>;
export type UserFormType = z.infer<typeof userFormSchema>;
