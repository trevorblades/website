import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import projects from '../../projects';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import withWidth from '@material-ui/core/withWidth';
import {
  ConstrainedSection,
  GridItem,
  Spacer,
  sectionPadding
} from '../../components';
import {Link} from '@reach/router';

const gridSpacing = 40;
const Screenshot = styled.img(props => ({
  display: 'block',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  [theme.breakpoints.down('xs')]: {
    width: '100vw',
    [`margin${props.right ? 'Right' : 'Left'}`]: -sectionPadding,
    marginBottom: gridSpacing,
    borderRadius: 0,
    boxShadow: 'none'
  }
}));

const offset = css({
  marginTop: sectionPadding * -2,
  [theme.breakpoints.down('xs')]: {
    marginTop: -sectionPadding
  }
});

const ProjectsFooter = styled.div({
  textAlign: 'center'
});

const LinkButton = withProps({
  component: Link
})(Button);

const featuredProjects = projects.filter(
  project => project.attributes.featured
);

const Highlights = props => (
  <ConstrainedSection>
    {featuredProjects.map((project, index) => {
      const right = index % 2;
      const image = project.attributes.images[0];
      return (
        <Fragment key={project.id}>
          <Grid
            container
            spacing={props.width === 'xs' ? 0 : gridSpacing}
            direction={right ? 'row-reverse' : null}
            alignItems={!index ? 'flex-start' : 'flex-end'}
          >
            <GridItem sm={12} md={8}>
              <Screenshot
                alt={image.alt}
                src={image.src}
                className={!index && offset}
                right={right}
              />
            </GridItem>
            <GridItem sm={12} md={4}>
              <Typography gutterBottom variant="h4">
                {project.attributes.title}
              </Typography>
              <Typography paragraph>{project.attributes.summary}</Typography>
              <LinkButton to={`/projects/${project.id}`} variant="outlined">
                View project
              </LinkButton>
            </GridItem>
          </Grid>
          <Spacer />
        </Fragment>
      );
    })}
    <ProjectsFooter>
      <Typography gutterBottom variant="subtitle1" color="textSecondary">
        Not satisfied? Want to see more?
      </Typography>
      <LinkButton
        color="primary"
        to="/projects"
        size="large"
        variant="contained"
      >
        All projects
      </LinkButton>
    </ProjectsFooter>
  </ConstrainedSection>
);

Highlights.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(Highlights);
