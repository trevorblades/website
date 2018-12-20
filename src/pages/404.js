import Helmet from 'react-helmet';
import Layout from '../components/layout';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function NotFound() {
  return (
    <Layout disableFooter>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <Typography variant="h2">404 could not locate</Typography>
    </Layout>
  );
}
