import Extender from './Extender';
import PropTypes from 'prop-types';
import React from 'react';
import confetti from 'canvas-confetti';
import mary from '../assets/mary.png';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {
  AspectRatio,
  Box,
  Center,
  Grid,
  Heading,
  Img,
  SimpleGrid,
  Text,
  chakra
} from '@chakra-ui/react';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Playback} from '../assets/playback.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';
import {tint} from 'polished';

function GridItem({icon, title, description, color, href}) {
  return (
    <Box
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      textAlign="center"
      color="white"
      pos="relative"
      role="group"
      bgColor={color}
      _hover={{bgColor: tint(0.1, color)}}
      sx={{
        '*': {
          transitionProperty: 'opacity, transform',
          transitionDuration: '250ms'
        }
      }}
    >
      <Box
        as={icon}
        height="calc(100% / 3)"
        fill="current"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        _groupHover={{opacity: 0.25}}
      />
      <AspectRatio ratio={1}>
        <div>
          <Box
            px={[4, 5, 6]}
            py={[6, 7, 8]}
            opacity="0"
            transform="translateY(5%)"
            _groupHover={{
              opacity: 1,
              transform: 'none'
            }}
          >
            <Heading letterSpacing="tight">{title}</Heading>
            <Text
              transform="translateY(20%)"
              _groupHover={{transform: 'none'}}
              fontSize={{base: 'lg', md: 'xl'}}
            >
              {description}
            </Text>
          </Box>
        </div>
      </AspectRatio>
    </Box>
  );
}

GridItem.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default function HomePageContent() {
  return (
    <Grid id="projects" templateColumns={{lg: 'repeat(2, 1fr)', xl: '3fr 2fr'}}>
      <Box py="12" px="10">
        <Heading size="2xl" mb="2">
          My fav<Extender factor={1 / 2}>o</Extender>urite thin
          <Extender>g</Extender>s
        </Heading>
        <Text mb="8" fontSize={{base: 'lg', md: 'xl'}}>
          These are a few of the projects that I&apos;m particularly proud of.
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
            color="#212121"
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
        p={{base: 12, md: 16}}
        bgColor="yellow.200"
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
            color="pink.500"
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
