import Layout from '../components/layout';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';

export default function NotFound() {
  return (
    <Layout disableFooter>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <Typography variant="h2">
        Looked everywhere, couldn&apos;t find
      </Typography>
    </Layout>
  );
}
