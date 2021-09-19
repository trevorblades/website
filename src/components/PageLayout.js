import Header from './Header';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Code,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import {Helmet} from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';

const HEADING_OFFSET = 8;

function Blockquote(props) {
  const textColor = useColorModeValue('green.800', 'green.200');
  return (
    <chakra.blockquote
      fontStyle="italic"
      py="1"
      pl="4"
      borderLeftWidth="2px"
      borderColor="current"
      color={textColor}
      {...props}
    />
  );
}

const components = {
  p: Text,
  h1(props) {
    return <Heading as="h1" mt={HEADING_OFFSET} size="3xl" {...props} />;
  },
  h2(props) {
    return <Heading mt={HEADING_OFFSET} size="2xl" {...props} />;
  },
  h3(props) {
    return <Heading as="h3" mt={HEADING_OFFSET} size="xl" {...props} />;
  },
  h4(props) {
    return <Heading as="h4" mt={HEADING_OFFSET} size="lg" {...props} />;
  },
  h5(props) {
    return <Heading as="h5" mt={HEADING_OFFSET} size="md" {...props} />;
  },
  h6(props) {
    return <Heading as="h6" mt={HEADING_OFFSET} size="sm" {...props} />;
  },
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  inlineCode(props) {
    return (
      <Code
        colorScheme="green"
        fontSize="smaller"
        verticalAlign="text-bottom"
        {...props}
      />
    );
  },
  blockquote: Blockquote
};

export default function PageLayout({children, pageContext}) {
  const {title, description} = pageContext.frontmatter;
  return (
    <>
      <Header />
      <Helmet title={title} />
      <Box px="10" pt="12" pb="20">
        <Box mb="10">
          <Heading mb="2" size="3xl">
            {title}
          </Heading>
          <Heading fontWeight="normal">{description}</Heading>
        </Box>
        <MDXProvider components={components}>
          <Stack
            shouldWrapChildren
            fontSize="xl"
            spacing="6"
            maxW="container.lg"
          >
            {children}
          </Stack>
        </MDXProvider>
      </Box>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired
};
