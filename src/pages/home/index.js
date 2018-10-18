import Divider from '@material-ui/core/Divider';
import Hero from './hero';
import Highlights from './highlights';
import OpenSource from './open-source';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection, Spacer} from '../../components';
import {css} from 'react-emotion';

const textAlignCenter = css({
  textAlign: 'center'
});

const now = new Date();
const Home = () => (
  <Fragment>
    <Hero />
    <Highlights />
    <Divider />
    <OpenSource />
    <Divider />
    <ConstrainedSection className={textAlignCenter}>
      <Typography gutterBottom variant="h3">
        Call me maybe
      </Typography>
      <Typography variant="subtitle1">
        Want to get in touch? Send me an email at{' '}
        <a href="mailto:tdblades@gmail.com">tdblades@gmail.com</a>.
      </Typography>
      <Spacer />
      <Typography variant="h4">{FAVICON}</Typography>
      <Typography variant="overline" color="textSecondary">
        &copy; {now.getFullYear()} Trevor Blades
      </Typography>
    </ConstrainedSection>
  </Fragment>
);

export default Home;
