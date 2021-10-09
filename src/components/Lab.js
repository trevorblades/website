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
import {FiClock} from 'react-icons/fi';
import {Link as GatsbyLink, graphql, useStaticQuery} from 'gatsby';

export default function Lab() {
  const bgColor = useColorModeValue('green.200', 'green.800');
  const textColor = useColorModeValue('green.800', 'green.200');
  const borderColor = useColorModeValue('green.600', 'green.300');
  const hoverBg = useColorModeValue('green.300', 'green.700');

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
      px={{base: 8, md: 10}}
      py={{base: 10, md: 12}}
      bgColor={bgColor}
      color={textColor}
      pos="relative"
      id="lab"
    >
      <Heading size="2xl" mb={{base: 6, md: 8}}>
        Lab
      </Heading>
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
