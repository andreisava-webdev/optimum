import type { ActionFunction, LoaderFunction } from '@remix-run/node';

import { FullContainer } from '~/components/FullContainer';
import { AuthForm, AuthHero, loginUser, registerUser } from '~/features/auth';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: '/profile',
  });
};

export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const mode = url.searchParams.get('mode');

  if (!mode || (mode !== 'login' && mode !== 'register'))
    throw new Response('Invalid url', { status: 400 });

  const formData = await request.formData();

  if (mode === 'register') {
    return await registerUser(request, formData);
  }

  if (mode === 'login') {
    return await loginUser(request, formData);
  }
};

export default function AuthRoute() {
  return (
    <FullContainer>
      <AuthHero />

      <AuthForm />
    </FullContainer>
  );
}
