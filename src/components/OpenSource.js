import Extender from './Extender';
import React from 'react';
import {Box, Button, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react';
import {FiArrowRight} from 'react-icons/fi';
import {GoStar} from 'react-icons/go';
import {graphql, useStaticQuery} from 'gatsby';

export default function OpenSource() {
  const {github} = useStaticQuery(graphql`
    {
      github {
        repositoryOwner(login: "trevorblades") {
          login
          ... on GitHub_User {
            id
            pinnedItems(first: 6) {
              nodes {
                ... on GitHub_Repository {
                  id
                  name
                  description
                  url
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Box px="10" py="16">
      <Heading size="2xl" mb="8" textAlign="center">
        <Extender>O</Extender>
        pen so<Extender factor={1 / 2}>u</Extender>rce
      </Heading>
      <SimpleGrid minChildWidth={{base: '220px', md: '300px'}} spacing="4">
        {github.repositoryOwner.pinnedItems.nodes.map(repo => (
          <Flex
            direction="column"
            key={repo.id}
            borderWidth="1px"
            rounded={{base: 'lg', md: 'xl'}}
          >
            <Box p={[4, 5, 6]}>
              <Heading size="lg" mb={{base: 2, md: 3}} fontFamily="mono">
                {repo.name}
              </Heading>
              <Text fontSize={{md: 'lg'}}>{repo.description}</Text>
            </Box>
            <Flex
              mt="auto"
              align="center"
              p={{base: 1 / 2, md: 1}}
              borderTopWidth="1px"
            >
              <Box fontSize="lg" as={GoStar} mx="2" />
              {repo.stargazerCount}
              <Button
                ml="auto"
                variant="ghost"
                size="sm"
                colorScheme="purple"
                rightIcon={<FiArrowRight />}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={repo.url}
              >
                View
              </Button>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
