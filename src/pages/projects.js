import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import knoword from '../assets/images/knoword.gif';
import pollenize from '../assets/images/pollenize.gif';
import stories from '../assets/images/stories.gif';
import {ConstrainedSection, Spacer} from '../components';
import {Link} from 'react-router-dom';

export const projects = {
  pollenize: {
    title: 'Pollenize',
    gif: pollenize,
    description:
      'My friends and I created a non-profit organization that helps voters make informed decisions.',
    url: 'https://pollenize.org'
  },
  knoword: {
    title: 'Knoword',
    gif: knoword,
    description:
      'Test your vocabulary skills and have fun doing it! Knoword is an educational, addicting word game and a great tool for teachers.',
    url: 'https://playknoword.com'
  },
  stories: {
    title: 'Planet Stories',
    gif: stories,
    description:
      'Create awesome timelapse movies from daily satellite imagery. I built this thing with my awesome team at Planet.',
    url: 'https://planet.com/stories'
  },
  ashland: {
    title: 'Ashland',
    description:
      'Designed physical props to set the scene for a futuristic sci-fi music video.'
  },
  batbstats: {
    title: 'BATB Stats',
    description:
      'Organizing, charting, and analyzing statistics gleaned from games of S.K.A.T.E. played in the legendary contest series, Battle at the Berrics',
    url: 'https://batbstats.trevorblades.com'
  },
  beatbox: {
    title: 'Beatbox Academy',
    description:
      'Multiple-award-winning website advertising a local beatbox instructor. Visitors can make dope beats using only the keys on their keyboards.',
    url: 'http://beatboxacademy.ca'
  },
  epicbucketlist: {
    title: '#EpicBucketList',
    description:
      'A website and contestant management system for a contest hosted by Contiki and The Buried Life. The website is dead, but the video describing the contest lives on!',
    url: 'https://www.youtube.com/watch?v=8KRkdZ83rh4'
  }
};

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
        {Object.keys(projects).map(key => {
          const {title, ...project} = projects[key];
          return (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Typography gutterBottom variant="h5">
                <Link to={`/projects/${key}`}>{title}</Link>
              </Typography>
              <Typography>{project.description}</Typography>
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
