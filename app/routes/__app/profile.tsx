import { Title } from '@mantine/core';
import type { LoaderFunction } from '@remix-run/node';

import { PageHeader } from '~/components/PageHeader';
import { requireAuthentication } from '~/services/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  return await requireAuthentication(request);
};

export default function ProfileRoute() {
  return (
    <>
      <PageHeader></PageHeader>
      <Title>PROFILE</Title>
    </>
  );
}
