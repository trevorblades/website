import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
      <Typography gutterBottom variant="h2">
        {props.project.title}
      </Typography>
      <GridList cellHeight={350} cols={3}>
        {props.project.images.map(image => (
          <GridListTile key={image.src} cols={image.cols || 1}>
            <img src={image.src} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </ConstrainedSection>
  </Fragment>
);

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
