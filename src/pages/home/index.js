import Divider from '@material-ui/core/Divider';
import Footer from '../../components/footer';
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
    <Divider />
    <Footer />
  </Fragment>
);

export default Home;
