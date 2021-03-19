import React from 'react';
import mushroom from '../mushroom.svg';
import {Box, Heading, Img, Text, chakra} from '@chakra-ui/react';
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
  return (
    <>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades">
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/mushroom_1f344.png"
        />
      </Helmet>
      <Box p="10">
        <Heading
          display="flex"
          fontSize="5xl"
          mb="16"
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
                theme.colors.red[300],
                theme.colors.cyan[300],
                theme.colors.yellow[300]
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
        <Heading mb="2" color="cyan.300" size="md" fontWeight="medium">
          Latest post
        </Heading>
        <Heading mb="4" size="2xl">
          Infinite scrolling with Apollo Client 3
        </Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Box>
    </>
  );
}
