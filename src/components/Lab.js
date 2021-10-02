import React, {useState} from 'react';
import pluralize from 'pluralize';
import {Box, Circle, Flex, HStack, Heading, Text} from '@chakra-ui/react';
import {FiClock} from 'react-icons/fi';
import {Link as GatsbyLink, graphql, useStaticQuery} from 'gatsby';
import {OpenSourceGrid} from './OpenSource';

const LAB_COLORS = ['red', 'green', 'blue'];

export default function Lab() {
  const [labColor, setLabColor] = useState('green');

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
      px="10"
      py="12"
      bgColor={`${labColor}.800`}
      color={`${labColor}.100`}
      pos="relative"
      id="lab"
    >
      <Heading size="2xl" mb={{base: 6, md: 8}}>
        Lab
      </Heading>
      <OpenSourceGrid>
        {data.allPost.nodes.map(({childMdx}) => {
          const {id, slug, timeToRead, frontmatter} = childMdx;
          const {title, description} = frontmatter;
          return (
            <Flex
              key={id}
              direction="column"
              rounded={{base: 'lg', md: 'xl'}}
              borderColor={`${labColor}.700`}
              borderWidth="1px"
              p={[4, 5, 6]}
              as={GatsbyLink}
              to={'/lab/' + slug}
              transition="all 250ms"
              _hover={{
                borderColor: `${labColor}.500`,
                bgColor: `${labColor}.700`
              }}
            >
              <Heading size="lg">{title}</Heading>
              <Text mb="4" fontSize="lg">
                {description}
              </Text>
              <HStack mt="auto" color={`${labColor}.200`}>
                <FiClock />
                <span>{pluralize('minute', timeToRead, true)}</span>
              </HStack>
            </Flex>
          );
        })}
      </OpenSourceGrid>
      <HStack pos="absolute" top="4" right="4">
        {LAB_COLORS.map(color => (
          <Circle
            key={color}
            as="button"
            color={`${color}.300`}
            size="4"
            borderWidth="2px"
            borderColor="current"
            bgColor={labColor === color && 'current'}
            onClick={() => setLabColor(color)}
          />
        ))}
      </HStack>
    </Box>
  );
}
