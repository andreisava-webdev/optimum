import { Stack } from '@mantine/core';

import { FullContainer } from '~/components/FullContainer';

import { Sidebar } from './Sidebar';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <FullContainer>
      <Sidebar />
      <Stack w="100%" h="100%" spacing={0}>
        {children}
      </Stack>
    </FullContainer>
  );
};
