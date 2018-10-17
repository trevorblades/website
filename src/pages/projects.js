import Helmet from 'react-helmet';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection} from '../components';

const Projects = () => (
  <ConstrainedSection>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <Typography variant="h2">Projects</Typography>
  </ConstrainedSection>
);

export default Projects;
