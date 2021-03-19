import React from 'react';
import theme from './src/theme';
import {ChakraProvider} from '@chakra-ui/react';

export const wrapRootElement = ({element}) => (
  <ChakraProvider theme={theme}>{element}</ChakraProvider>
);
