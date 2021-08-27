import Header from './Header';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import {MDXProvider} from '@mdx-js/react';

const components = {
  p: Text,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem
};

export default function PageLayout({children, pageContext}) {
  const {title, description} = pageContext.frontmatter;
  return (
    <>
      <Header />
      <Box px="10" py="20">
        <Box mb="8">
          <Heading mb="2" size="3xl">
            {title}
          </Heading>
          <Heading fontWeight="normal">{description}</Heading>
        </Box>
        <MDXProvider components={components}>
          <Stack fontSize="xl">{children}</Stack>
        </MDXProvider>
      </Box>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired
};
