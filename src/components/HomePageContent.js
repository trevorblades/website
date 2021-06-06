import Extender from './Extender';
import PropTypes from 'prop-types';
import React from 'react';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {
  Box,
  Center,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Playback} from '../assets/playback.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';
import {tint} from 'polished';

function GridItem({icon, title, description, color, href}) {
  return (
    <Center
      as={Link}
      href={href}
      isExternal
      textAlign="center"
      px={[4, 5, 6]}
      py={[6, 7, 8]}
      color="white"
      pos="relative"
      role="group"
      bgColor={color}
      _hover={{
        textDecor: 'none',
        bgColor: tint(0.1, color)
      }}
    >
      <Box
        as={icon}
        mb={{base: 3, md: 4}}
        height={{base: 10, md: 12}}
        fill="current"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        transitionProperty="opacity, transform"
        transitionDuration="250ms"
        _groupHover={{
          opacity: 0,
          transform: 'translate(-50%, -80%)'
        }}
      />
      <Box
        opacity="0"
        transitionProperty="opacity, transform"
        transitionDuration="250ms"
        transform="translateY(20%)"
        _groupHover={{
          opacity: 1,
          transform: 'none'
        }}
      >
        <Heading mt="auto" size="lg" letterSpacing="tight">
          {title}
        </Heading>
        <Text fontSize={{md: 'lg'}}>{description}</Text>
      </Box>
    </Center>
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
    <Grid templateColumns={{md: 'repeat(2, 1fr)', lg: '3fr 2fr'}}>
      <Box py="12" px="10">
        <Stack spacing="20">
          <div id="projects">
            <Heading size="2xl" mb="2">
              My fav<Extender factor={1 / 2}>o</Extender>urite thin
              <Extender>g</Extender>s
            </Heading>
            <Text mb="8" fontSize="lg">
              These are a few of the projects that I&apos;m particularly proud
              of.
            </Text>
            <SimpleGrid
              minChildWidth={{base: '200px', md: '250px'}}
              spacing="2"
            >
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
          </div>
        </Stack>
      </Box>
      <Center
        p={{base: 12, md: 16}}
        bgColor="yellow.200"
        fontSize={{base: '4xl', md: '5xl'}}
        lineHeight="shorter"
        textAlign="center"
        fontFamily="mono"
      >
        This stuff is easy when you&apos;re having fun
      </Center>
    </Grid>
  );
}
