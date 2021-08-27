import React, {useState} from 'react';
import {Box, Circle, HStack, Heading, Text} from '@chakra-ui/react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {OpenSourceGrid} from './OpenSource';

const LAB_COLORS = ['red', 'green', 'blue'];

export default function Lab() {
  const [labColor, setLabColor] = useState('green');

  const data = useStaticQuery(graphql`
    query ListLabs {
      allLab: allSitePage(
        filter: {pluginCreator: {name: {eq: "gatsby-plugin-mdx"}}}
      ) {
        nodes {
          path
          context {
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
        {data.allLab.nodes.map((lab, index) => {
          const {title, description} = lab.context.frontmatter;
          return (
            <Box
              key={index}
              rounded={{base: 'lg', md: 'xl'}}
              borderColor={`${labColor}.700`}
              borderWidth="1px"
              p={[4, 5, 6]}
              as={Link}
              to={lab.path}
              transition="all 250ms"
              _hover={{
                borderColor: `${labColor}.500`,
                bgColor: `${labColor}.700`
              }}
            >
              <Heading size="lg">{title}</Heading>
              <Text>{description}</Text>
            </Box>
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
