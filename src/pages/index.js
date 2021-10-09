import HomePageContent from '../components/HomePageContent';
import Intro from '../components/Intro';
import Lab from '../components/Lab';
import Layout from '../components/Layout';
import OpenSource from '../components/OpenSource';
import React, {useState} from 'react';
import {Box, Flex, FormControl, FormLabel, Switch} from '@chakra-ui/react';
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
      <Flex borderTopWidth="1px" as="footer" align="center" py="16" px="10">
        <div>
          <div>Made with ☕️ in Burnaby, BC</div>
          <div>&copy; {new Date().getFullYear()}</div>
        </div>
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
      </Flex>
    </Layout>
  );
}
