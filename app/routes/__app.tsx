import { Outlet } from '@remix-run/react';

import { Layout } from '~/features/layout';

export default function AppLayoutRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
