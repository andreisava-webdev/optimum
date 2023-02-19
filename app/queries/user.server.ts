import bcrypt from 'bcryptjs';

import { db } from '~/services/db.server';
import type { UserFormType } from '~/services/schemas.server';

export const createUser = async (user: UserFormType) => {
  try {
    return await db.user.create({
      data: {
        firstName: user.firstName as string,
        lastName: user.lastName as string,
        email: user.email,
        passwordHash: await bcrypt.hash(user.password, 10),
      },
    });
  } catch (error) {
    throw error;
  }
};
