import { Button, Title } from '@mantine/core';
import { Link } from '@remix-run/react';

import { FullContainer } from '~/components/FullContainer';

export default function Index() {
  return (
    <FullContainer direction="column" align="center" justify="center">
      <Title order={1} lts={2} color="brand">
        OPTIMUM
      </Title>
      <Button component={Link} to="/auth">
        Get Started
      </Button>
    </FullContainer>
  );
}
