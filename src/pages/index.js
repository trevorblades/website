import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import cartman from '../assets/cartman.jpg';
import goingHome from '../assets/going-home.gif';
import mf1 from '../assets/mf1.jpg';
import mush from '../assets/mush.svg';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Img,
  Link,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import {FaGithub, FaTwitch, FaTwitter} from 'react-icons/fa';
import {Link as GatsbyLink} from 'gatsby';
import {Helmet} from 'react-helmet';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {keyframes} from '@emotion/react';

const hue = keyframes({
  from: {
    WebkitFilter: 'hue-rotate(0)'
  },
  to: {
    WebkitFilter: 'hue-rotate(-360deg)'
  }
});

function Logo(props) {
  const {colors} = useTheme();
  const textShade = useColorModeValue(500, 300);

  const textGradient = useMemo(
    () =>
      `linear-gradient(${[
        'to bottom right',
        colors.red[textShade],
        colors.cyan[textShade],
        colors.yellow[textShade]
      ]})`,
    [colors, textShade]
  );

  return (
    <Center
      role="group"
      bgImage={`url(${mf1})`}
      bgSize="cover"
      bgPos="bottom"
      {...props}
    >
      <Heading
        display="flex"
        fontSize="5xl"
        fontWeight="medium"
        position="relative"
        lineHeight="none"
      >
        <Img
          transform="translateY(-10%)"
          h="1em"
          src={mush}
          position="absolute"
          top="0"
          left="0"
        />
        <Box
          backgroundClip="text"
          backgroundImage={textGradient}
          animation={`${hue} 5s infinite linear`}
          css={{WebkitTextFillColor: 'transparent'}}
          _groupHover={{
            animationDuration: '500ms'
          }}
        >
          <chakra.table cellPadding="0">
            <tbody>
              <tr>
                <td>
                  <chakra.span
                    w="1.1ch"
                    display="inline-block"
                    visibility="hidden"
                  >
                    T
                  </chakra.span>
                  revor
                </td>
                <td />
              </tr>
              <tr>
                <chakra.td textAlign="right">Bla</chakra.td>
                <td>des</td>
              </tr>
            </tbody>
          </chakra.table>
        </Box>
      </Heading>
    </Center>
  );
}

function SocialMedia() {
  return (
    <HStack spacing="6" mb="16">
      <Heading fontSize="lg">Web developer developing the web</Heading>
      <ButtonGroup variant="ghost" size="sm">
        <IconButton icon={<FaTwitter />} fontSize="xl" colorScheme="twitter" />
        <IconButton icon={<FaTwitch />} fontSize="xl" colorScheme="purple" />
        <IconButton icon={<FaGithub />} fontSize="xl" />
      </ButtonGroup>
    </HStack>
  );
}

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

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

const gridTemplate = `1fr calc(100% / ${GOLDEN_RATIO})`;
const secondColumn = 1 - 1 / GOLDEN_RATIO;
const transformOrigin = (secondColumn / 2) * 100;
const scaleUp = 1 / (1 - 1 / GOLDEN_RATIO);
const translate = transformOrigin / -GOLDEN_RATIO;

function GoldenGrid({children, ...props}) {
  const [child1, child2, child3] = React.Children.toArray(children);
  return (
    <Grid height="100vh" templateColumns={gridTemplate} {...props}>
      <Grid templateRows={gridTemplate}>
        {child1}
        {child2}
      </Grid>
      {child3}
    </Grid>
  );
}

GoldenGrid.propTypes = {
  children: PropTypes.node.isRequired
};

function GridItem(props) {
  return <Box p="12" {...props} />;
}

export default function HomePage() {
  const [home, setHome] = useState(true);
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
          transform: `rotate(${home ? 180 : 0}deg) scale(${
            home ? scaleUp : 1
          }) translate(${home ? `${translate}%, ${translate}%` : 0})`
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
          role={home ? 'region' : 'group'}
          onClick={() => setHome(true)}
          style={!home ? {cursor: 'pointer'} : null}
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
            style={{opacity: home ? 0 : 1}}
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
              pointerEvents: home ? 'all' : 'none',
              opacity: home ? 1 : 0
            }}
          >
            <Logo
              cursor="pointer"
              onClick={event => {
                event.stopPropagation();
                setHome(false);
              }}
            />
            <GridItem>
              <SocialMedia />
            </GridItem>
            <GridItem>
              <Flex h="14" justifyContent="space-evenly" mb="16">
                <Box as={Apollo} h="full" fill="current" />
                <Box as={Planet} h="full" fill="current" />
                <Box p="1" flexShrink="0">
                  <Box as={Knoword} h="full" fill="current" />
                </Box>
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
