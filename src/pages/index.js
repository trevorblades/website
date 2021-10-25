import Footer from '../components/Footer';
import HomePageContent from '../components/HomePageContent';
import Intro from '../components/Intro';
import Lab from '../components/Lab';
import Layout from '../components/Layout';
import OpenSource from '../components/OpenSource';
import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Switch} from '@chakra-ui/react';
import {HEADER_HEIGHT} from '../components/Header';

export default function HomePage() {
  const [debug, setDebug] = useState(false);
  return (
    <Layout>
      <Intro debug={debug} />
      <Box mt={HEADER_HEIGHT} id="about" pos="absolute" top="200vh" />
      <HomePageContent />
      <Lab />
      <OpenSource />
      {/* TODO: add section for superteam, css-transform, awards, etc. */}
      <Footer>
        <FormControl w="auto" ml="auto" display="flex" alignItems="center">
          <FormLabel htmlFor="debug" mb="0" ml="auto">
            Debug mode
          </FormLabel>
          <Switch
            id="debug"
            isChecked={debug}
            onChange={event => setDebug(event.target.checked)}
          />
        </FormControl>
      </Footer>
    </Layout>
  );
}
