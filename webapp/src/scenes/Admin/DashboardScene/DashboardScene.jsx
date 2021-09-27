import React from 'react';

import Layout from '@layout/Layout';
import { AdminCount, AdminMap } from '@containers';

const DashboardScene = () => (
  <Layout>
    <AdminCount />
    <AdminMap />
  </Layout>
);

export default DashboardScene;
