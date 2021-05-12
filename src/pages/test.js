import React from 'react';
import Spiral from 'react-spiral';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';
import {Box, Center, Heading, Text, useTheme} from '@chakra-ui/react';

export default function Test() {
  // const [sides, setSides] = useState(3);
  const {colors} = useTheme();
  const {y} = useWindowScroll();
  const {height} = useWindowSize();
  const sides = 3 + Math.floor(y / (height / 2));

  return (
    <>
      <Box
        height="300vh"
        color="white"
        bgImage={`linear-gradient(${[
          colors.red[500],
          colors.green[500],
          colors.blue[500]
        ]})`}
      >
        <Center
          height="100vh"
          fontWeight="bold"
          textTransform="uppercase"
          position="sticky"
          top="0"
        >
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
              'complex',
              'puzzles',
              'with',
              'JS and',
              'CSS'
            ]}
          />
        </Center>
      </Box>
      <Box px="10" py="16">
        <Heading mb="4">stuff about me</Heading>
        <Text fontSize="lg">Yo i did these things and build this and that</Text>
      </Box>
    </>
  );
}
