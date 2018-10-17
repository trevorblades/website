import Divider from '@material-ui/core/Divider';
import Hero from './hero';
import OpenSource from './open-source';
import Projects from './projects';
import React, {Fragment} from 'react';

const Home = () => (
  <Fragment>
    <Hero />
    <Projects />
    <Divider />
    <OpenSource />
  </Fragment>
);

export default Home;
