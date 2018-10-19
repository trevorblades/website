import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection} from '../components';

const Project = props => (
  <Fragment>
    <Helmet>
      <title>{props.project.title}</title>
    </Helmet>
    <ConstrainedSection>
      <Typography variant="h2">{props.project.title}</Typography>
    </ConstrainedSection>
  </Fragment>
);

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
