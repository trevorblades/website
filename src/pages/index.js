import React from 'react';
import mushroom from '../mushroom.svg';
import {
  Box,
  ButtonGroup,
  HStack,
  Heading,
  IconButton,
  Img,
  Link,
  Text,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import {FaGithub, FaTwitch, FaTwitter} from 'react-icons/fa';
import {Link as GatsbyLink} from 'gatsby';
import {Helmet} from 'react-helmet';
import {keyframes} from '@emotion/react';

const hue = keyframes({
  from: {
    WebkitFilter: 'hue-rotate(0)'
  },
  to: {
    WebkitFilter: 'hue-rotate(-360deg)'
  }
});

export default function HomePage() {
  const colorShade = useColorModeValue(500, 300);
  return (
    <>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades">
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/mushroom_1f344.png"
        />
      </Helmet>
      <Box p="12">
        <Heading
          display="flex"
          fontSize="5xl"
          mb="6"
          fontWeight="medium"
          position="relative"
          lineHeight="none"
        >
          <Img
            transform="translateY(-10%)"
            h="1em"
            src={mushroom}
            position="absolute"
            top="0"
            left="0"
          />
          <Box
            css={({theme}) => ({
              backgroundClip: 'text',
              backgroundImage: `linear-gradient(${[
                'to bottom right',
                theme.colors.red[colorShade],
                theme.colors.cyan[colorShade],
                theme.colors.yellow[colorShade]
              ]})`,
              animation: `${hue} 5s infinite linear`,
              WebkitTextFillColor: 'transparent'
            })}
          >
            <chakra.table cellPadding="0">
              <tbody>
                <tr>
                  <td>
                    <chakra.span
                      w="1.1ch"
                      display="inline-block"
                      visibility="hidden"
                    >
                      T
                    </chakra.span>
                    revor
                  </td>
                  <td />
                </tr>
                <tr>
                  <chakra.td textAlign="right">Bla</chakra.td>
                  <td>des</td>
                </tr>
              </tbody>
            </chakra.table>
          </Box>
        </Heading>
        <HStack spacing="6" mb="16">
          <Heading fontSize="lg">Web developer developing the web</Heading>
          <ButtonGroup variant="ghost" size="sm">
            <IconButton
              icon={<FaTwitter />}
              fontSize="xl"
              colorScheme="twitter"
            />
            <IconButton
              icon={<FaTwitch />}
              fontSize="xl"
              colorScheme="purple"
            />
            <IconButton icon={<FaGithub />} fontSize="xl" />
          </ButtonGroup>
        </HStack>
        <Box maxW="container.md">
          <Heading mb="2" color="cyan.300" size="md" fontWeight="medium">
            Latest post
          </Heading>
          <Heading mb="4" size="2xl">
            <Link as={GatsbyLink} to="/blog/page">
              Infinite scrolling with Apollo Client 3
            </Link>
          </Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </Box>
      </Box>
    </>
  );
}
