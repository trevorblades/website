import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import withProps from 'recompose/withProps';
import {ConstrainedSection, Spacer} from '../components';

const GridItem = withProps({item: true})(Grid);

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
      <Spacer />
      <Grid container spacing={40}>
        <GridItem xs={12} sm={8}>
          <Typography>{props.project.description}</Typography>
        </GridItem>
        <GridItem xs={12} sm={4}>
          {props.project.awards.map((award, index, array) => (
            <Typography
              key={award.title}
              gutterBottom={index < array.length - 1}
              variant="subtitle1"
            >
              {award.win ? '🏆' : '🏅'} {award.title}
            </Typography>
          ))}
        </GridItem>
      </Grid>
    </ConstrainedSection>
    <Divider />
    <Footer />
  </Fragment>
);

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
