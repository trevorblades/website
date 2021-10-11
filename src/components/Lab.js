import React from 'react';
import pluralize from 'pluralize';
import {
  Box,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {CONTAINER_PADDING_X, CONTAINER_PADDING_Y} from '../utils';
import {FiClock} from 'react-icons/fi';
import {Link as GatsbyLink, graphql, useStaticQuery} from 'gatsby';

export default function Lab() {
  const bgColor = useColorModeValue('green.200', 'yellow.600');
  const borderColor = useColorModeValue('green.400', 'yellow.500');
  const hoverBg = useColorModeValue('green.300', 'yellow.700');

  const data = useStaticQuery(graphql`
    query ListPosts {
      allPost: allFile(
        filter: {sourceInstanceName: {eq: "posts"}, extension: {eq: "mdx"}}
      ) {
        nodes {
          childMdx {
            id
            slug
            timeToRead
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `);

  return (
    <Box
      px={CONTAINER_PADDING_X}
      py={CONTAINER_PADDING_Y}
      bgColor={bgColor}
      pos="relative"
      id="lab"
    >
      <Heading size="2xl" mb="2">
        Lab
      </Heading>
      <Text
        maxW="container.sm"
        fontSize={{base: 'lg', md: 'xl'}}
        mb={{base: 6, md: 8}}
      >
        This is where I write about the things that I built and share some of
        the things I learned while building them.
      </Text>
      <SimpleGrid spacing={{base: 4, md: 6}} columns={{base: 1, md: 2, lg: 3}}>
        {data.allPost.nodes.map(({childMdx}) => {
          const {id, slug, timeToRead, frontmatter} = childMdx;
          const {title, description} = frontmatter;
          return (
            <Flex
              key={id}
              direction="column"
              rounded={{base: 'lg', md: 'xl'}}
              borderColor={borderColor}
              borderWidth="1px"
              p={[3, 4, 5, 6]}
              as={GatsbyLink}
              to={'/lab/' + slug}
              transition="all 250ms"
              _hover={{
                bgColor: hoverBg
              }}
            >
              <Heading size="lg">{title}</Heading>
              <Text mb={[3, 4, 5, 6]} fontSize="lg">
                {description}
              </Text>
              <HStack mt="auto">
                <FiClock />
                <span>{pluralize('minute', timeToRead, true)}</span>
              </HStack>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
