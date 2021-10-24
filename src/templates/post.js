import 'katex/dist/katex.css';
import Blockquote from '../components/Blockquote';
import CodeBlock from '../components/CodeBlock';
import Footer from '../components/Footer';
import Header, {HEADER_HEIGHT} from '../components/Header';
import InlineCode from '../components/InlineCode';
import Layout from '../components/Layout';
import PageLink from '../components/PageLink';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import generateSocialImage from '@jlengstorf/get-share-image';
import {
  Box,
  Grid,
  Heading,
  Link,
  List,
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
  useTheme
} from '@chakra-ui/react';
import {Global} from '@emotion/react';
import {Helmet} from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';

const HEADING_OFFSET = 8;

const components = {
  wrapper: Stack,
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
  pre: 'div',
  code: CodeBlock,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  undefined: Fragment
};

export default function PostTemplate({data}) {
  const {tableOfContents, frontmatter} = data.mdx;
  const {title, description, styles} = frontmatter;

  const {colors} = useTheme();

  const socialImage = generateSocialImage({
    title,
    tagline: description,
    cloudName: 'dybmuhvem',
    imagePublicID: 'example_ip1kdz',
    titleFont: 'poppins',
    titleExtraConfig: '_semibold',
    taglineFont: 'roboto',
    textColor: colors.gray[800].slice(1)
  });

  return (
    <Layout>
      <Header />
      <Helmet title={title}>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@trevorblades" />
      </Helmet>
      <Global styles={styles} />
      <Box
        maxW="container.xl"
        mx="auto"
        px={[6, 8, 10]}
        pt={{base: 10, md: 12}}
        pb={{base: 16, md: 20}}
      >
        <Box mb="10">
          <Heading mb="2" size="3xl">
            {title}
          </Heading>
          <Heading fontWeight="normal">{description}</Heading>
        </Box>
        <Grid
          gap="10"
          templateColumns={{lg: '1fr 300px'}}
          alignItems="flex-start"
        >
          {tableOfContents.items && (
            <Box
              as="nav"
              order={{lg: 2}}
              pos={{lg: 'sticky'}}
              top={HEADER_HEIGHT + 8}
            >
              <Heading mb="3" size="md">
                In this article
              </Heading>
              <List spacing="1" fontSize="lg">
                {tableOfContents.items.map((item, index) => (
                  <ListItem key={index}>
                    <Link href={item.url}>{item.title}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
          <MDXProvider components={components}>
            <MDXRenderer
              shouldWrapChildren
              fontSize={{base: 'lg', md: 'xl'}}
              spacing={{base: 5, md: 6}}
              minW="0"
            >
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </Grid>
      </Box>
      <Footer />
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        styles
      }
      tableOfContents
      body
    }
  }
`;
