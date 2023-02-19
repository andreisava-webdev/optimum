import { useEffect } from 'react';

import {
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
              <TextInput name="firstname" placeholder="First name" />
              <TextInput name="lastName" placeholder="Last name" />
            </Group>
          )}
          <TextInput type="email" name="email" placeholder="Email" />
          <PasswordInput name="password" placeholder="Password" />
          {mode === 'register' && (
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm password"
            />
          )}

          <Button type="submit">
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        </Stack>
      </auth.Form>
    </Stack>
  );
};
