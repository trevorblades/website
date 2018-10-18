import Helmet from 'react-helmet';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection} from '../components';

const NotFound = () => (
  <ConstrainedSection>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <Typography variant="h2">404 could not locate</Typography>
  </ConstrainedSection>
);

export default NotFound;
