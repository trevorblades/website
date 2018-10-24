import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import projects from '../projects';
import {ConstrainedSection, Spacer} from '../components';
import {Link} from 'react-router-dom';

// export const projects = {
//   batbstats: {
//     title: 'BATB Stats',
//     summary:
//       'Organizing, charting, and analyzing statistics gleaned from games of S.K.A.T.E. played in the legendary contest series, Battle at the Berrics',
//     url: 'https://batbstats.trevorblades.com'
//   },
//   epicbucketlist: {
//     title: '#EpicBucketList',
//     summary:
//       'A website and contestant management system for a contest hosted by Contiki and The Buried Life. The website is dead, but the video describing the contest lives on!',
//     url: 'https://www.youtube.com/watch?v=8KRkdZ83rh4'
//   }
// };

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
