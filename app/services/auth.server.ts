import bcrypt from 'bcryptjs';
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';

import { db } from './db.server';
import type { SessionUserType } from './schemas.server';
import { sessionStorage } from './session.server';

export const authenticator = new Authenticator<SessionUserType>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email') as string;
    const password = form.get('password') as string;
    const user = await db.user.findUnique({ where: { email } });

    console.log(user);

    if (!user) throw new AuthorizationError('Invalid credentials');

    const checkPassword = await bcrypt.compare(password, user.passwordHash);

    if (!checkPassword) throw new AuthorizationError('Invalid credentials');

    return { id: user.id, email: user.email };
  }),
  'user-pass'
);

export const requireAuthentication = async (request: Request) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth',
  });
};
