import { FullContainer } from '~/components/FullContainer';
import { AuthForm, AuthHero } from '~/features/auth';

export default function AuthRoute() {
  return (
    <FullContainer>
      <AuthHero />

      <AuthForm />
    </FullContainer>
  );
}
