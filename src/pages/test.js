import React, {useMemo, useState} from 'react';
import Spiral from 'react-spiral';
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  chakra,
  useTheme
} from '@chakra-ui/react';
import {FaTwitch} from 'react-icons/fa';
import {Link as GatsbyLink} from 'gatsby';
import {Global} from '@emotion/react';
import {useMount, useWindowScroll, useWindowSize} from 'react-use';

export default function Test() {
  const {colors} = useTheme();
  const [now, setNow] = useState(Date.now());

  useMount(() => setNow(Date.now()));

  const {y} = useWindowScroll();
  const {width, height} = useWindowSize();

  const sides = useMemo(() => 3 + Math.floor(y / (height / 2)), [y, height]);
  const circleSize = useMemo(() => {
    // http://mathcentral.uregina.ca/QQ/database/QQ.09.06/s/benneth1.html
    // https://courses.lumenlearning.com/boundless-algebra/chapter/trigonometry-and-right-triangles/
    const diameter = Math.sqrt(width ** 2 + height ** 2);
    const vmax = Math.max(width, height);
    return 100 * (diameter / vmax) + 'vmax';
  }, [width, height]);

  return (
    <div key={now}>
      <Global
        styles={{
          html: {
            scrollPaddingTop: 48
          }
        }}
      />
      <Flex
        w="full"
        h="12"
        px="4"
        color="white"
        align="center"
        as="header"
        pos="fixed"
        top="0"
        zIndex="1"
        style={{
          backgroundColor: y >= height * 2 && 'black'
        }}
      >
        <Circle
          size="6"
          mr="2"
          borderWidth="2px"
          borderColor="current"
          fontFamily="heading"
          fontWeight="semibold"
          lineHeight="none"
          fontSize="xl"
        >
          t
        </Circle>
        <Heading
          as="h1"
          fontSize="2xl"
          letterSpacing="tighter"
          lineHeight="none"
        >
          Trevor Blades
        </Heading>
        <HStack spacing="4" ml="auto">
          <Link href="#about">about me</Link>
          <Link href="#projects">projects</Link>
          <Link as={GatsbyLink} to="/garden">
            garden
          </Link>
          <Button
            as="a"
            href="https://twitch.tv/trevorblades"
            size="sm"
            fontSize="md"
            colorScheme="purple"
            rightIcon={<FaTwitch />}
          >
            follow
          </Button>
        </HStack>
      </Flex>
      <Box
        height="300vh"
        color="white"
        bgImage={`linear-gradient(${[
          colors.red[500],
          colors.yellow[500],
          colors.blue[500]
        ]})`}
      >
        <Center
          height="100vh"
          fontWeight="bold"
          fontFamily="heading"
          textTransform="uppercase"
          position="sticky"
          top="0"
          overflow="hidden"
        >
          <div style={{transform: `scale(${1 + y / height / 4})`}}>
            <Spiral
              fontSize={30}
              boxSize={600}
              sides={sides}
              spacing={100}
              segments={[
                "I'm a web",
                'developer',
                'who enjoys',
                'solving',
                'puzzles',
                'with',
                'JS and',
                'CSS.',
                'Check',
                'out',
                'some of',
                'my work',
                'below'
              ]}
            />
          </div>
          <Circle
            bgColor="black"
            pos="absolute"
            top="50%"
            left="50%"
            style={{
              width: circleSize,
              height: circleSize,
              transform: `translate(-50%, -50%) scale(${Math.min(
                1,
                Math.max(0, y - height) / height
              )})`
            }}
          />
        </Center>
      </Box>
      <Box px="10" bgColor="black" color="white">
        <Stack spacing="20">
          <div id="about">
            <Heading mb="4">stuff about me</Heading>
            <Text fontSize="lg">
              Yo i did these things and build this and that
            </Text>
          </div>
          <div id="projects">
            <Heading mb="4">my projects</Heading>
            <Text fontSize="lg">
              Yo i did these things and build this and that
            </Text>
          </div>
        </Stack>
        <chakra.footer py="16">&copy; {new Date().getFullYear()}</chakra.footer>
      </Box>
    </div>
  );
}
