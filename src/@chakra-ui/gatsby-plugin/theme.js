import {extendTheme} from '@chakra-ui/react';

const INLINE_CODE = ':not(pre)>code';

const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        bgColor: 'pink.400'
      },
      [['.gatsby-highlight', INLINE_CODE]]: {
        fontSize: 'smaller'
      },
      [INLINE_CODE]: {
        verticalAlign: 'text-bottom',
        '&.language-text': {
          color: 'green.200'
        }
      }
    }
  },
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
