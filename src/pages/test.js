import Header from '../components/Header';
import React, {useMemo, useState} from 'react';
import SocialButtons from '../components/SocialButtons';
import Spiral from 'react-spiral';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
  Box,
  Center,
  Checkbox,
  Circle,
  Code,
  DarkMode,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
  chakra,
  useTheme
} from '@chakra-ui/react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {outdent} from 'outdent';
import {useMount, useWindowScroll, useWindowSize} from 'react-use';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Test() {
  const {colors} = useTheme();
  const [now, setNow] = useState(Date.now());
  const [debug, setDebug] = useState(false);

  useMount(() => setNow(Date.now()));

  const {y} = useWindowScroll();
  const {width, height} = useWindowSize();

  const sides = useMemo(() => 3 + Math.floor(y / (height / 2)), [y, height]);

  const {diameter, interiorAngle} = useMemo(() => {
    // http://mathcentral.uregina.ca/QQ/database/QQ.09.06/s/benneth1.html
    // https://courses.lumenlearning.com/boundless-algebra/chapter/trigonometry-and-right-triangles/
    const diameter = Math.sqrt(width ** 2 + height ** 2);
    return {
      diameter,
      interiorAngle: Math.acos(width / diameter)
    };
  }, [width, height]);

  return (
    <div key={now}>
      <Header
        style={{
          backgroundColor: y >= height * 2 && 'black'
        }}
      />
      <Box
        height="300vh"
        color="white"
        bgImage={`linear-gradient(${[
          colors.red[500],
          colors.yellow[500],
          colors.blue[500]
        ]})`}
      >
        <Center height="100vh" position="sticky" top="0" overflow="hidden">
          <Box
            fontWeight="bold"
            fontFamily="heading"
            textTransform="uppercase"
            style={{transform: `scale(${1 + y / height / 4})`}}
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
          </Box>
          <Circle
            bgColor="black"
            pos="absolute"
            top="50%"
            left="50%"
            style={{
              width: diameter,
              height: diameter,
              transform: `translate(-50%, -50%) scale(${Math.min(
                1,
                Math.max(0, y - height) / height
              )})`
            }}
          >
            {debug && (
              <Flex
                direction="column"
                w="100vw"
                h="100vh"
                borderWidth="2px"
                borderLeftColor="green.500"
                borderBottomColor="blue.500"
                pos="relative"
              >
                <Box fontSize="2xl" fontWeight="medium">
                  <Box
                    h={1 / 2}
                    bgColor="red.500"
                    transform="rotate(20deg)"
                    transformOrigin="top left"
                    textAlign="center"
                    lineHeight="taller"
                    style={{
                      width: diameter,
                      transform: `translateY(-50%) rotate(${interiorAngle}rad)`
                    }}
                  >
                    <chakra.span color="red.500">diameter</chakra.span> = √(
                    <chakra.span color="green.500">a</chakra.span>
                    <sup>2</sup> + <chakra.span color="blue.500">b</chakra.span>
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
                <Box p="10" mt="auto" w="50%">
                  <Text mb="4">
                    To fill up the screen at the right time, the circle must
                    have a diameter relative to the height and width of the
                    browser viewport. Now I only need to scale the circle up
                    from 0 to 1 in conjunction with the window scroll position.
                  </Text>
                  <SyntaxHighlighter language="jsx" style={a11yDark}>
                    {outdent`
                      const {y} = useWindowScroll();
                      const {width, height} = useWindowSize();
                      const circleDiameter = Math.sqrt(width ** 2 + height ** 2);
                      const circleScale = Math.min(1, y / height);
                    `}
                  </SyntaxHighlighter>
                </Box>
              </Flex>
            )}
          </Circle>
        </Center>
      </Box>
      <DarkMode>
        <Box p="10" bgColor="black" color="white">
          <Grid templateColumns="2fr 1fr">
            <Stack spacing="20">
              <div id="about">
                <Heading mb="4">stuff about me</Heading>
                <Text mb="4" fontSize="lg">
                  Yo i did these things and build this and that
                </Text>
                <SocialButtons />
              </div>
              <div id="projects">
                <Heading mb="4">my projects</Heading>
                <Text fontSize="lg">
                  Yo i did these things and build this and that
                </Text>
              </div>
            </Stack>
            <Stack spacing="4">
              <Checkbox
                isChecked={debug}
                onChange={event => setDebug(event.target.checked)}
              >
                Debug mode
              </Checkbox>
              <Text>
                The spiral text on the homepage was made using{' '}
                <Code>react-spiral</Code>. You can learn how to use it and read
                about how I made it at its{' '}
                <Link href="https://github.com/trevorblades/react-spiral">
                  GitHub repository
                </Link>
                .
              </Text>
              <div>
                <SyntaxHighlighter language="jsx" style={a11yDark}>
                  {outdent`
                  import Spiral from 'react-spiral';

                  function MyComponent() {
                    return (
                      <Spiral
                        sides={3}
                        boxSize={500}
                        fontSize={32}
                      />
                    )
                  }
                `}
                </SyntaxHighlighter>
              </div>
            </Stack>
          </Grid>
          <chakra.footer py="16">
            &copy; {new Date().getFullYear()}
          </chakra.footer>
        </Box>
      </DarkMode>
    </div>
  );
}
