import React from 'react';
import theme from './src/theme';
import {CSSReset, GlobalStyle, ThemeProvider} from '@chakra-ui/react';

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
