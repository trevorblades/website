import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, Helvetica, sans-serif',
    body: 'Roboto, Helvetica, sans-serif',
    mono: "'Roboto Mono', monospace"
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'semibold'
      }
    }
  }
});

export default theme;
