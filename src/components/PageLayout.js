import 'dracula-prism/dist/css/dracula-prism.min.css';
import 'katex/dist/katex.css';
import GatsbyLink from 'gatsby-link';
import Header from './Header';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import {Global} from '@emotion/react';
import {Helmet} from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';

const HEADING_OFFSET = 8;

function Blockquote(props) {
  const borderColor = useColorModeValue('purple.500', 'purple.200');
  return (
    <chakra.blockquote
      fontStyle="italic"
      py="1"
      pl="4"
      borderLeftWidth="2px"
      borderColor={borderColor}
      color="gray.500"
      {...props}
    />
  );
}

function PageLink({href, ...props}) {
  const textColor = useColorModeValue('blue.600', 'blue.400');
  const linkProps = href.startsWith('/')
    ? {as: GatsbyLink, to: href}
    : {href, isExternal: true};
  return <Link color={textColor} {...linkProps} {...props} />;
}

PageLink.propTypes = {
  href: PropTypes.string.isRequired
};

const components = {
  p: Text,
  h1(props) {
    return <Heading as="h1" mt={HEADING_OFFSET} size="3xl" {...props} />;
  },
  h2(props) {
    return <Heading mt={HEADING_OFFSET} size="2xl" {...props} />;
  },
  h3(props) {
    return <Heading as="h3" mt={HEADING_OFFSET} {...props} />;
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
  a: PageLink,
  blockquote: Blockquote,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td
};

export default function PageLayout({children, pageContext}) {
  const {title, description, styles} = pageContext.frontmatter;
  return (
    <>
      <Header />
      <Helmet title={title} />
      <Global styles={styles} />
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
