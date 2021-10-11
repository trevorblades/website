import Extender from './Extender';
import Header from './Header';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import SocialButtons from './SocialButtons';
import Spiral from 'react-spiral';
import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  Square,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import {FaNpm} from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi';
import {useWindowScroll, useWindowSize} from 'react-use';

export default function Intro({debug}) {
  const {colors} = useTheme();

  const circleBg = useColorModeValue('blue.200', 'purple.700');
  const npmBadgeBg = useColorModeValue('white', 'gray.800');
  const gradientColors = useColorModeValue(
    [colors.green[300], colors.yellow[300], colors.blue[300]],
    [colors.yellow[700], colors.pink[800], colors.purple[800]]
  );

  const gradient = useMemo(
    () => `linear-gradient(${['45deg', ...gradientColors]})`,
    [gradientColors]
  );

  const {y} = useWindowScroll();
  const {width, height} = useWindowSize();

  const {diameter, interiorAngle} = useMemo(() => {
    const diameter = Math.sqrt(width ** 2 + height ** 2);
    return {
      diameter,
      interiorAngle: Math.acos(width / diameter)
    };
  }, [width, height]);

  const sides = useMemo(() => 3 + Math.floor(y / (height / 2)), [y, height]);
  const isHeaderTransparent = useMemo(() => y < height * 2, [y, height]);
  const circleScale = useMemo(
    () => Math.min(1, Math.max(0, y - height) / height),
    [y, height]
  );

  const textOpacity = useMemo(() => {
    const vmin = Math.min(height, width);
    const ratio = vmin / diameter;
    const opacity = (circleScale - ratio) * (1 / (1 - ratio));
    return Math.min(1, Math.max(0, opacity));
  }, [circleScale, width, height, diameter]);

  return (
    <>
      <Header isTransparent={isHeaderTransparent} pos="fixed" />
      <Box height="300vh" bgImage={gradient}>
        <Center height="100vh" position="sticky" top="0" overflow="hidden">
          <Flex
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://npm.im/react-spiral"
            fontFamily="mono"
            bgColor={npmBadgeBg}
            align="center"
            pos="absolute"
            bottom="4"
            right="4"
            rounded="md"
            overflow="hidden"
            role="group"
          >
            <Square
              p="2"
              bgColor="red.500"
              color="white"
              sx={{
                svg: {
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '250ms'
                }
              }}
            >
              <Box
                as={FaNpm}
                fontSize="2xl"
                _groupHover={{
                  transform: 'scale(0.8)',
                  opacity: 0
                }}
              />
              <Box
                as={FiDownload}
                pos="absolute"
                fontSize="xl"
                opacity="0"
                transform="scale(1.2)"
                _groupHover={{
                  transform: 'none',
                  opacity: 1
                }}
              />
            </Square>
            <Box px="3">npm i react-spiral</Box>
          </Flex>
          <Box
            fontWeight="bold"
            fontFamily="heading"
            textTransform="uppercase"
            style={{transform: `scale(${1 + y / height / 4})`}}
          >
            <Spiral fontSize={30} boxSize={600} sides={sides} spacing={100}>
              {sides === 3
                ? 'scroll down'
                : 'upgrade your gray matter cuz one day it may matter.'}
            </Spiral>
          </Box>
          <Circle
            bgColor={circleBg}
            pos="absolute"
            top="50%"
            left="50%"
            style={{
              width: diameter,
              height: diameter,
              transform: `translate(-50%, -50%) scale(${circleScale})`
            }}
          >
            {debug && (
              <Flex
                direction="column"
                w="100vw"
                h="100vh"
                color="blue.400"
                fontFamily="mono"
                borderWidth="2px"
                borderColor="current"
                pos="relative"
              >
                <Box fontSize="2xl" fontWeight="medium">
                  <Box
                    h={1 / 2}
                    bgColor="current"
                    transformOrigin="top left"
                    textAlign="center"
                    lineHeight="taller"
                    style={{
                      width: diameter,
                      transform: `translateY(-50%) rotate(${interiorAngle}rad)`
                    }}
                  >
                    <chakra.span>diameter</chakra.span> = √(
                    <chakra.span>a</chakra.span>
                    <sup>2</sup> + <chakra.span>b</chakra.span>
                    <sup>2</sup>)
                  </Box>
                  <Box
                    px="2"
                    pos="absolute"
                    top="50%"
                    left="0"
                    transform="translateY(-50%)"
                  >
                    a
                  </Box>
                  <Box
                    py="2"
                    lineHeight="none"
                    pos="absolute"
                    bottom="0"
                    left="50%"
                    transform="translateX(-50%)"
                  >
                    b
                  </Box>
                </Box>
              </Flex>
            )}
          </Circle>
          {!debug ? (
            <Box
              px="16"
              w="full"
              maxW="100vmin"
              textAlign="center"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              // color={circleText}
              style={{
                opacity: textOpacity,
                visibility: textOpacity ? 'visible' : 'hidden'
              }}
            >
              <Heading mb="4" size="3xl">
                Yo<Extender factor={1 / 2}>u</Extender> m<Extender>a</Extender>
                de it.
              </Heading>
              <Text mb="6" fontSize="xl">
                Yo! 👋 I&apos;m Trevor. I design and build beautiful, functional
                websites that usually provide some kind of educational value or
                help people succeed in their work. I stream my work on Twitch
                and occasionally write about it here.
              </Text>
              <SocialButtons />
            </Box>
          ) : (
            <Stack
              pos="absolute"
              bottom="6"
              left="6"
              color="blue.400"
              fontSize={{md: 'lg'}}
              fontFamily="mono"
            >
              <div>Spiral sides: {sides}</div>
              <div>Viewports scrolled: {y / height}</div>
              <div>Circle scale: {circleScale}</div>
            </Stack>
          )}
        </Center>
      </Box>
    </>
  );
}

Intro.propTypes = {
  debug: PropTypes.bool.isRequired
};
