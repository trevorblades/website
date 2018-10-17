import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import knoword from '../../assets/images/knoword.gif';
import pollenize from '../../assets/images/pollenize.gif';
import stories from '../../assets/images/stories.gif';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import {ConstrainedSection, sectionPadding} from '../../components';
import {Link} from 'react-router-dom';

const GridItem = withProps({
  item: true
})(Grid);

const Spacer = styled.div({
  height: sectionPadding * 1.5
});

const Screenshot = styled.img({
  display: 'block',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
});

const offset = css({
  marginTop: sectionPadding * -2
});

const LinkButton = withProps({
  component: Link
})(Button);

const ProjectsFooter = styled.div({
  textAlign: 'center'
});

const projects = {
  pollenize: {
    title: 'Pollenize',
    image: pollenize,
    description:
      'My friends and I created a non-profit organization that helps voters make informed decisions.'
  },
  knoword: {
    title: 'Knoword',
    image: knoword,
    description:
      'Test your vocabulary skills and have fun doing it! Knoword is an educational, addicting word game and a great tool for teachers.'
  },
  stories: {
    title: 'Planet Stories',
    image: stories,
    description:
      'Create awesome timelapse movies from daily satellite imagery. I built this thing with my awesome team at Planet <3'
  }
};

const Highlights = () => (
  <ConstrainedSection>
    {Object.keys(projects).map((key, index) => {
      const project = projects[key];
      return (
        <Fragment key={key}>
          <Grid
            container
            spacing={40}
            direction={index % 2 ? 'row-reverse' : null}
          >
            <GridItem sm={12} md={8}>
              <Screenshot src={project.image} className={!index && offset} />
            </GridItem>
            <GridItem sm={12} md={4}>
              <Typography gutterBottom variant="h4">
                {project.title}
              </Typography>
              <Typography paragraph>{project.description}</Typography>
              <LinkButton to={`/projects/${key}`} variant="outlined">
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
        I don&apos;t blame you
      </LinkButton>
    </ProjectsFooter>
  </ConstrainedSection>
);

export default Highlights;
