import Footer from '../components/Footer';
import HomePageContent from '../components/HomePageContent';
import Intro from '../components/Intro';
import Lab from '../components/Lab';
import Layout from '../components/Layout';
import OpenSource from '../components/OpenSource';
import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Heading, Switch} from '@chakra-ui/react';
import {HEADER_HEIGHT} from '../components/Header';
import {useMount} from 'react-use';

export default function HomePage() {
  const [now, setNow] = useState(Date.now());
  const [debug, setDebug] = useState(false);

  useMount(() => setNow(Date.now()));

  return (
    <Layout>
      <Intro debug={debug} key={now} />
      <Box mt={HEADER_HEIGHT} id="about" pos="absolute" top="200vh" />
      <HomePageContent />
      <Lab />
      <OpenSource />
      <div>
        <Heading>Other stuff</Heading>
      </div>
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
