import { Button, Flex, Group, Text } from '@mantine/core';
import { Link } from '@remix-run/react';

export const PageHeader = ({ children }: any) => {
  return (
    <Flex align="center" justify="space-between" h={50} px={20} bg="gray.2">
      <Group>{children}</Group>
      <Group>
        <Text>Hello Andrei</Text>
        <Button component={Link} to="/logout" color="red">
          Logout
        </Button>
      </Group>
    </Flex>
  );
};
