import Header from '../components/header';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection} from '../components';

const Projects = () => (
  <Fragment>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <Header />
    <ConstrainedSection>
      <Typography variant="h2">Projects</Typography>
    </ConstrainedSection>
  </Fragment>
);

export default Projects;
