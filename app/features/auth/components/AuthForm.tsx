import { useEffect } from 'react';

import {
  Anchor,
  Button,
  Flex,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Link } from '@remix-run/react';
import { useFetcher, useSearchParams } from 'react-router-dom';

export const AuthForm = () => {
  const auth = useFetcher();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const errors = auth.data?.formErrors;
  const isSubmitting = auth.state === 'submitting';

  useEffect(() => {
    if (!mode || (mode !== 'login' && mode !== 'register')) {
      setSearchParams({ mode: 'login' });
    }
  }, [mode, setSearchParams]);

  return (
    <Stack w="40%" h="100%" p={20}>
      <Flex w="100%" align="center" justify="space-between" mb={30}>
        <Text
          ff="Unbounded, Rubik, sans-serif"
          color="brand"
          fw={600}
          size={20}
          transform="uppercase"
          lts={2}
        >
          Optimum
        </Text>
        <Button
          component={Link}
          to={`/auth?mode=${mode === 'login' ? 'register' : 'login'}`}
          variant="outline"
        >
          {mode === 'login' ? 'Sign Up' : 'Sign In'}
        </Button>
      </Flex>

      <Title order={1} size={25}>
        {mode === 'login' ? 'Sign In' : 'Sign Up'}
      </Title>

      <auth.Form method="post">
        <Stack mt={20}>
          {mode === 'register' && (
            <Group grow>
              <TextInput
                name="firstName"
                placeholder="First name"
                error={errors?.firstName}
              />
              <TextInput
                name="lastName"
                placeholder="Last name"
                error={errors?.lastName}
              />
            </Group>
          )}
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            error={errors?.email}
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            error={errors?.password}
          />
          {mode === 'register' && (
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm password"
              error={errors?.confirmPassword}
            />
          )}

          <Button type="submit" loading={isSubmitting}>
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        </Stack>
      </auth.Form>

      <Text size={14}>
        {mode === 'login' ? (
          <>
            Don't have an account?{' '}
            <Anchor component={Link} to="/auth?mode=register">
              Sign Up
            </Anchor>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Anchor component={Link} to="/auth?mode=register">
              Sign in
            </Anchor>
          </>
        )}
      </Text>
    </Stack>
  );
};
