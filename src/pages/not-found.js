import Header from '../components/header';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection} from '../components';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <Header />
    <ConstrainedSection>
      <Typography variant="h2">404 could not locate</Typography>
    </ConstrainedSection>
  </Fragment>
);

export default NotFound;
