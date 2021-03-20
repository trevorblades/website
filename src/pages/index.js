import GoldenGrid, {GOLDEN_RATIO, GridItem} from '../components/GoldenGrid';
import Logo from '../components/Logo';
import React, {useMemo} from 'react';
import SocialLinks from '../components/SocialLinks';
import brick from '../assets/brick.svg';
import cartman from '../assets/cartman.jpg';
import goingHome from '../assets/going-home.gif';
import useNumber from 'react-use/lib/useNumber';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {Box, Center, Flex, Heading, Link, Stack, Text} from '@chakra-ui/react';
import {Link as GatsbyLink} from 'gatsby';
import {Helmet} from 'react-helmet';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';

function BlogPost() {
  return (
    <div>
      <Heading mb="3" size="lg">
        <Link as={GatsbyLink} to="/blog/page">
          Infinite scrolling with Apollo Client 3
        </Link>
      </Heading>
      <Text fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </div>
  );
}

function ProjectLogo(props) {
  return <Box h="full" fill="current" {...props} />;
}

const secondColumn = 1 - 1 / GOLDEN_RATIO;
const transformOrigin = (secondColumn / 2) * 100;
const scaleUp = 1 / (1 - 1 / GOLDEN_RATIO);
const translate = transformOrigin / -GOLDEN_RATIO;

export default function HomePage() {
  const [rotations, {inc: incRotations}] = useNumber();
  const isHome = useMemo(() => rotations % 2 === 0, [rotations]);
  return (
    <>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades">
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/mushroom_1f344.png"
        />
      </Helmet>
      <Box
        pos="relative"
        overflow="hidden"
        transition="transform 1000ms ease"
        transformOrigin={`${transformOrigin}% ${transformOrigin}%`}
        style={{
          transform: `rotate(${180 - 180 * rotations}deg) scale(${
            isHome ? scaleUp : 1
          }) translate(${isHome ? `${translate}%, ${translate}%` : 0})`
        }}
      >
        <GoldenGrid>
          <div />
          <GridItem>open source examples</GridItem>
          <GridItem>
            <Heading mb="6" size="2xl">
              Blargh posts
            </Heading>
            <Stack spacing="10">
              <BlogPost />
              <BlogPost />
            </Stack>
          </GridItem>
        </GoldenGrid>
        <Box
          pos="absolute"
          top="0"
          left="0"
          transform={`scale(${secondColumn})`}
          transformOrigin="top left"
          role={isHome ? 'region' : 'group'}
          style={!isHome ? {cursor: 'pointer'} : null}
        >
          <Center
            bgImage={`url(${cartman})`}
            bgSize="cover"
            boxSize="full"
            bgPos="center"
            pos="absolute"
            top="0"
            left="0"
            transition="opacity 1000ms ease"
            style={{opacity: isHome ? 0 : 1}}
            onClick={() => incRotations()}
            _groupHover={{bgImage: `url(${goingHome})`}}
          >
            <Heading as="span" fontSize="8xl" color="black">
              Home
            </Heading>
          </Center>
          <GoldenGrid
            transform="rotate(180deg)"
            transition="opacity 1000ms ease"
            style={{
              pointerEvents: isHome ? 'all' : 'none',
              opacity: isHome ? 1 : 0
            }}
          >
            <Logo
              cursor="pointer"
              onClick={event => {
                event.stopPropagation();
                incRotations();
              }}
            />
            <GridItem bgImage={`url(${brick})`}>
              <Text mb="4" fontSize="lg">
                I&apos;m Trevor, a web developer who loves working on
                challenging problems and helping others learn new things.
              </Text>
              <SocialLinks />
            </GridItem>
            <GridItem>
              <Flex h="14" justifyContent="space-evenly" mb="16">
                <ProjectLogo as={Apollo} />
                <ProjectLogo as={Planet} />
                <ProjectLogo p="1" as={Knoword} />
                <ProjectLogo p="1" as={Pollenize} />
              </Flex>
              <Heading mb="2" color="cyan.300" size="md" fontWeight="medium">
                Latest post
              </Heading>
              <Heading mb="4" size="2xl">
                <Link as={GatsbyLink} to="/blog/page">
                  Infinite scrolling with Apollo Client 3
                </Link>
              </Heading>
              <Text fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </GridItem>
          </GoldenGrid>
        </Box>
      </Box>
    </>
  );
}
