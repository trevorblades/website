import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import america from '../assets/images/pollenize/america.jpg';
import difficulties from '../assets/images/knoword/difficulties.png';
import knoword from '../assets/images/knoword.gif';
import logo from '../assets/images/pollenize/logo.png';
import pollenize from '../assets/images/pollenize.gif';
import stories from '../assets/images/stories.gif';
import students from '../assets/images/pollenize/students.jpg';
import toronto from '../assets/images/pollenize/toronto.png';
import {ConstrainedSection, Spacer} from '../components';
import {Link} from 'react-router-dom';

export const projects = {
  pollenize: {
    title: 'Pollenize',
    summary:
      'Interactive, unbiased election guides with diverse sources, compare tools, and colorful illustrations',
    description:
      'Started in 2014 with a group of friends, Pollenize is a non-profit organization that helps voters make informed decisions. We produce interactive guides that break down popular elections in a way that cuts out political rhetoric and gets straight to the point. Our guides also feature tools to compare candidate stances and keep track of the ones that you agree with.',
    awards: [
      '2014 Awwwards Honorable Mention',
      '2015 Webby Awards Honoree',
      '2015 Awwwards Honorable Mention'
    ],
    url: 'https://pollenize.org',
    gif: pollenize,
    images: [
      {
        src: logo,
        title: 'Pollenize logos'
      },
      {
        src: students,
        title: 'Students using Pollenize in class',
        cols: 2
      },
      {
        src: toronto,
        title: 'Jennifer Keesmaat and John Tory',
        cols: 2
      },
      {
        src: america,
        title: 'Pollenize America smartphone app'
      }
    ]
  },
  knoword: {
    title: 'Knoword',
    summary:
      'Fun, educational online word game enjoyed by logophiles, students, and teachers alike',
    description:
      'I created Knoword in 2010 based on a real-life game that I played with my roommate at the time and our two dictionaries. The concept is simple: Given a dictionary definition and the first letter of the word being defined, you must try to guess the word. The added challenge of typing quickly, spelling correctly, and competing against a ticking clock makes Knoword a difficult and addicting game.\n\nToday, Knoword is used by teachers as a fun way to reinforce curriculum vocabulary and engage students in class. Teachers can create their own custom "word packs" and assign them to thier class as coursework or play them as a group at school.',
    awards: [
      '2011 AllMyFaves Best Educational Game Nominee',
      'Top 10 Word Game Apps on iTunes (2012)'
    ],
    url: 'https://playknoword.com',
    gif: knoword,
    images: [
      {
        src: difficulties,
        title: 'Difficulty selection screen',
        cols: 2
      }
    ]
  },
  stories: {
    title: 'Planet Stories',
    gif: stories,
    summary:
      'Create awesome timelapse movies from daily satellite imagery. I built this thing with my awesome team at Planet.',
    url: 'https://planet.com/stories'
  },
  ashland: {
    title: 'Ashland',
    summary:
      'Designed physical props to set the scene for a futuristic sci-fi music video.'
  },
  batbstats: {
    title: 'BATB Stats',
    summary:
      'Organizing, charting, and analyzing statistics gleaned from games of S.K.A.T.E. played in the legendary contest series, Battle at the Berrics',
    url: 'https://batbstats.trevorblades.com'
  },
  beatbox: {
    title: 'Beatbox Academy',
    summary:
      'Multiple-award-winning website advertising a local beatbox instructor. Visitors can make dope beats using only the keys on their keyboards.',
    url: 'http://beatboxacademy.ca'
  },
  epicbucketlist: {
    title: '#EpicBucketList',
    summary:
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
              <Typography>{project.summary}</Typography>
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
