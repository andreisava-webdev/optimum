import { z } from 'zod';

export const sessionUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string(),
});

export type SessionUserType = z.infer<typeof sessionUserSchema>;
