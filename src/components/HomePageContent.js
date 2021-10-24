import Extender from './Extender';
import GridItem from './GridItem';
import React from 'react';
import confetti from 'canvas-confetti';
import mary from '../assets/mary.png';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {
  Box,
  Center,
  Grid,
  Heading,
  Img,
  SimpleGrid,
  Text,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import {CONTAINER_PADDING_X, CONTAINER_PADDING_Y} from '../utils';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Playback} from '../assets/playback.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';

export default function HomePageContent() {
  const pollenizeBg = useColorModeValue('#212121', 'white');
  const maryBg = useColorModeValue('pink.200', 'pink.700');
  const funColor = useColorModeValue('teal.600', 'teal.200');
  return (
    <Grid id="projects" templateColumns={{lg: 'repeat(2, 1fr)', xl: '3fr 2fr'}}>
      <Box py={CONTAINER_PADDING_Y} px={CONTAINER_PADDING_X}>
        <Heading size="2xl" mb="2">
          My fav<Extender factor={1 / 2}>o</Extender>urite thin
          <Extender>g</Extender>s
        </Heading>
        <Text mb="8" fontSize={{base: 'lg', md: 'xl'}}>
          These are a few of my projects that I&apos;m particularly proud of.
        </Text>
        <SimpleGrid minChildWidth={{base: '180px', md: '220px'}} spacing="2">
          <GridItem
            icon={Knoword}
            title="Knoword"
            description="Educational game"
            color="#ff4e1e"
            href="https://playknoword.com"
          />
          <GridItem
            icon={Playback}
            title="Playback"
            description="Filmmaking tool"
            color="#e91e63"
            href="https://playback.rocks"
          />
          <GridItem
            icon={Pollenize}
            title="Pollenize"
            description="Election education"
            color={pollenizeBg}
            href="https://pollenize.org"
          />
          <GridItem
            icon={Apollo}
            title="Apollo Odyssey"
            description="Learning platform"
            color="#583bc9"
            href="https://odyssey.apollographql.com"
          />
          <GridItem
            icon={Planet}
            title="Planet Stories"
            description="Editorial/research tool"
            color="#009da5"
            href="https://planet.com/stories"
          />
        </SimpleGrid>
      </Box>
      <Center
        p={CONTAINER_PADDING_Y}
        bgColor={maryBg}
        fontSize={{base: '3xl', md: '4xl'}}
        lineHeight="short"
        textAlign="center"
        fontFamily="mono"
      >
        <div>
          In every job that must be done there is an element of{' '}
          <chakra.span
            onClick={event =>
              confetti({
                origin: {
                  x: event.clientX / window.innerWidth,
                  y: event.clientY / window.innerHeight
                }
              })
            }
            fontFamily="cursive"
            color={funColor}
            fontWeight="bold"
            userSelect="none"
          >
            fun
          </chakra.span>
          .{' '}
          <Img
            display="inline"
            boxSize="1em"
            src={mary}
            verticalAlign="-0.1em"
          />
        </div>
      </Center>
    </Grid>
  );
}
