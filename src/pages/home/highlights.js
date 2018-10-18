import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import {ConstrainedSection, Spacer, sectionPadding} from '../../components';
import {Link} from 'react-router-dom';
import {projects} from '../projects';

const GridItem = withProps({
  item: true
})(Grid);

const Screenshot = styled.img({
  display: 'block',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
});

const offset = css({
  marginTop: sectionPadding * -2
});

const ProjectsFooter = styled.div({
  textAlign: 'center'
});

const Highlights = () => (
  <ConstrainedSection>
    {Object.keys(projects)
      .slice(0, 3)
      .map((key, index) => {
        const project = projects[key];
        return (
          <Fragment key={key}>
            <Grid
              container
              spacing={40}
              direction={index % 2 ? 'row-reverse' : null}
            >
              <GridItem sm={12} md={8}>
                <Screenshot src={project.gif} className={!index && offset} />
              </GridItem>
              <GridItem sm={12} md={4}>
                <Typography gutterBottom variant="h4">
                  {project.title}
                </Typography>
                <Typography paragraph>{project.description}</Typography>
                <Button
                  component="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  View project
                </Button>
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
      <Button
        component={Link}
        color="primary"
        to="/projects"
        size="large"
        variant="contained"
      >
        All projects
      </Button>
    </ProjectsFooter>
  </ConstrainedSection>
);

export default Highlights;
