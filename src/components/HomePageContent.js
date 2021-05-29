import PropTypes from 'prop-types';
import React from 'react';
import SocialButtons from './SocialButtons';
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
import {ReactComponent as Knoword} from '../assets/knoword.svg';
import {ReactComponent as Planet} from '../assets/planet.svg';
import {ReactComponent as Playback} from '../assets/playback.svg';
import {ReactComponent as Pollenize} from '../assets/pollenize.svg';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {outdent} from 'outdent';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function GridItem({icon, title, description, ...props}) {
  return (
    <Box p="6" color="white" {...props}>
      <Box height="12" as={icon} mb="4" fill="current" />
      <Heading size="lg" letterSpacing="tight">
        {title}
      </Heading>
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

export default function HomePageContent() {
  return (
    <Box p="10">
      <Grid templateColumns="2fr 1fr" alignItems="flex-start" gap="16">
        <Stack spacing="20">
          <div id="about">
            <Heading mb="2">stuff about me</Heading>
            <Text mb="4" fontSize="lg">
              Yo i did these things and build this and that
            </Text>
            <SocialButtons />
          </div>
          <div id="projects">
            <Heading mb="2">my projects</Heading>
            <Text mb="6" fontSize="lg">
              Yo i did these things and build this and that
            </Text>
            <SimpleGrid minChildWidth="300px" spacing="8">
              <GridItem
                icon={Knoword}
                title="Knoword"
                description="Educational game"
                bgColor="#ff4e1e"
              />
              <GridItem
                icon={Apollo}
                title="Apollo Odyssey"
                description="Learning platform"
                bgColor="#583bc9"
              />
              <GridItem
                icon={Playback}
                title="Playback"
                description="Filmmaking tool"
                bgColor="#e91e63"
              />
              <GridItem
                icon={Pollenize}
                title="Pollenize"
                description="Election education"
                bgColor="gray.800"
              />
              <GridItem
                icon={Planet}
                title="Planet Stories"
                description="Editorial/research tool"
                bgColor="#009da5"
              />
            </SimpleGrid>
          </div>
        </Stack>
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
