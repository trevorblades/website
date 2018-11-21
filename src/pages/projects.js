import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import projects from '../projects';
import {ConstrainedSection, Spacer} from '../components';
import {Link} from '@reach/router';

const Projects = () => (
  <Fragment>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <ConstrainedSection>
      <Typography variant="h2">I made this</Typography>
      <Typography variant="subtitle1">
        Projects that I&apos;ve worked on over the years
      </Typography>
      <Spacer />
      <Grid container spacing={40}>
        {projects.map(project => {
          return (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Typography gutterBottom variant="h5">
                <Link to={`/projects/${project.id}`}>
                  {project.attributes.title}
                </Link>
              </Typography>
              <Typography>{project.attributes.summary}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </ConstrainedSection>
    <Divider />
    <Footer />
  </Fragment>
);

export default Projects;
