import PropTypes from 'prop-types';
import React from 'react';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {ReactComponent as Apollo} from '../assets/apollo.svg';
import {
  Box,
  Code,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import {FiArrowUpRight} from 'react-icons/fi';
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Playback} from '../assets/playback.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {outdent} from 'outdent';
import {tint} from 'polished';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const GRID_ITEM_ARROW_POS = {base: 2, md: 3};

function GridItem({icon, title, description, color, href}) {
  return (
    <Box
      as={Link}
      href={href}
      isExternal
      p={[4, 5, 6]}
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
      />
      <Heading size="lg" letterSpacing="tight">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Box
        fontSize="2xl"
        pos="absolute"
        top={GRID_ITEM_ARROW_POS}
        right={GRID_ITEM_ARROW_POS}
        as={FiArrowUpRight}
        transitionProperty="transform,opacity"
        transitionDuration="250ms"
        opacity="0"
        transform="translate(-50%, 50%)"
        _groupHover={{
          opacity: 1,
          transform: 'none'
        }}
      />
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
    <Box p="10" mx="auto" maxW="container.xl">
      <Stack spacing="20">
        <div id="projects">
          <Heading mb="2">My favourite things</Heading>
          <Text mb="6" fontSize="lg">
            These are a few of the projects that I&apos;m particularly proud of.
          </Text>
          <SimpleGrid minChildWidth={{base: '250px', md: '300px'}} spacing="6">
            <GridItem
              icon={Knoword}
              title="Knoword"
              description="Educational game"
              color="#ff4e1e"
              href="https://playknoword.com"
            />
            <GridItem
              icon={Apollo}
              title="Apollo Odyssey"
              description="Learning platform"
              color="#583bc9"
              href="https://odyssey.apollographql.com"
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
              icon={Planet}
              title="Planet Stories"
              description="Editorial/research tool"
              color="#009da5"
              href="https://planet.com/stories"
            />
          </SimpleGrid>
        </div>
        <div>
          <Heading mb="2">open source</Heading>
          list fav open source projects here
        </div>
      </Stack>
      <Grid templateColumns="2fr 1fr" alignItems="flex-start" gap="16">
        <Stack
          as="aside"
          pos="sticky"
          top="24"
          spacing="4"
          borderWidth="1px"
          p="6"
        >
          <Text>
            The spiral text at the top of the page was made using{' '}
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
    </Box>
  );
}
