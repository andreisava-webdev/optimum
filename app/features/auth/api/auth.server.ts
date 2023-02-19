import { AuthorizationError } from 'remix-auth';

import { createUser } from '~/queries/user.server';
import { authenticator } from '~/services/auth.server';
import { db } from '~/services/db.server';
import { badRequest } from '~/services/request.server';
import { userFormSchema } from '~/services/schemas.server';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '~/services/validation.server';

export const registerUser = async (request: Request, formData: FormData) => {
  const form = userFormSchema.parse(Object.fromEntries(formData));
  const checkUser = await db.user.findUnique({ where: { email: form.email } });

  if (checkUser)
    return badRequest(
      { formErrors: { email: 'Email already registered' } },
      400
    );

  const formErrors = {
    firstName: validateName(form.firstName as string),
    lastName: validateName(form.lastName as string),
    email: validateEmail(form.email),
    password: validatePassword(form.password),
    confirmPassword:
      form.confirmPassword !== form.password ? 'Passwords must match' : null,
  };

  if (Object.values(formErrors).some(Boolean))
    return badRequest({ formErrors }, 400);

  await createUser(form);

  return await loginUser(request, formData);
};

export const loginUser = async (request: Request, formData: FormData) => {
  try {
    return await authenticator.authenticate('user-pass', request, {
      successRedirect: '/profile',
      throwOnError: true,
      context: { formData },
    });
  } catch (err) {
    if (err instanceof Response) return err;
    if (err instanceof AuthorizationError)
      return badRequest(
        {
          formErrors: {
            email: 'Invalid credentials',
            password: 'Invalid credentials',
          },
        },
        401
      );
    throw err;
  }
};
