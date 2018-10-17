import Divider from '@material-ui/core/Divider';
import Hero from './hero';
import Highlights from './highlights';
import OpenSource from './open-source';
import React, {Fragment} from 'react';

const Home = () => (
  <Fragment>
    <Hero />
    <Highlights />
    <Divider />
    <OpenSource />
  </Fragment>
);

export default Home;
