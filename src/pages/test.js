import Header from '../components/Header';
import HomePageContent from '../components/HomePageContent';
import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import Spiral from 'react-spiral';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {
  Box,
  Center,
  Circle,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Switch,
  Text,
  chakra,
  useTheme
} from '@chakra-ui/react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {outdent} from 'outdent';
import {useMount, useWindowScroll, useWindowSize} from 'react-use';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function GridItem({icon, title, description, ...props}) {
  return (
    <Box p="6" color="white" {...props}>
      <Box height="12" as={icon} mb="4" fill="current" />
      <Heading size="lg">{title}</Heading>
      <Text>{description}</Text>
    </Box>
  );
}

GridItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};

export default function Test() {
  const {colors} = useTheme();
  const [now, setNow] = useState(Date.now());
  const [debug, setDebug] = useState(false);

  useMount(() => setNow(Date.now()));

  const {y} = useWindowScroll();
  const {width, height} = useWindowSize();

  const {diameter, interiorAngle} = useMemo(() => {
    // http://mathcentral.uregina.ca/QQ/database/QQ.09.06/s/benneth1.html
    // https://courses.lumenlearning.com/boundless-algebra/chapter/trigonometry-and-right-triangles/
    const diameter = Math.sqrt(width ** 2 + height ** 2);
    return {
      diameter,
      interiorAngle: Math.acos(width / diameter)
    };
  }, [width, height]);

  const sides = useMemo(() => 3 + Math.floor(y / (height / 2)), [y, height]);
  const isHeaderDark = useMemo(() => y >= height * 2, [y, height]);
  const circleScale = useMemo(
    () => Math.min(1, Math.max(0, y - height) / height),
    [y, height]
  );

  return (
    <div key={now}>
      <Header
        bgColor={isHeaderDark && 'gray.800'}
        color={isHeaderDark && 'white'}
      />
      <Box
        height="300vh"
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
            bgColor="current"
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
                color="white"
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
                <Stack spacing="4" p="12" mt="auto" w="calc(100% / 3)">
                  <Text>
                    To fill up the screen at the right time, the circle must
                    have a diameter relative to the height and width of the
                    browser viewport.
                  </Text>
                  <div>
                    <SyntaxHighlighter language="jsx" style={a11yDark}>
                      {outdent`
                        const {width, height} = useWindowSize();
                        const diameter = Math.sqrt(width ** 2 + height ** 2);
                      `}
                    </SyntaxHighlighter>
                  </div>
                  <Text>
                    Now I only need to scale the circle up from 0 to 1 in
                    conjunction with the window scroll position.
                  </Text>
                  <div>
                    <SyntaxHighlighter language="jsx" style={a11yDark}>
                      {outdent`
                        const {y} = useWindowScroll();
                        const {height} = useWindowSize();
                        const scale = Math.min(1, y / height);
                      `}
                    </SyntaxHighlighter>
                  </div>
                </Stack>
              </Flex>
            )}
          </Circle>
        </Center>
      </Box>
      <HomePageContent />
      <Flex as="footer" align="center" py="16" px="10">
        <span>&copy; {new Date().getFullYear()}</span>
        <FormControl w="auto" ml="auto" display="flex" alignItems="center">
          <FormLabel htmlFor="debug-mode" mb="0" ml="auto">
            Debug mode
          </FormLabel>
          <Switch
            id="debug-mode"
            isChecked={debug}
            onChange={event => setDebug(event.target.checked)}
          />
        </FormControl>
      </Flex>
    </div>
  );
}
