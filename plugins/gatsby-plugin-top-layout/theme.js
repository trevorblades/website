import {colors, createMuiTheme} from '@material-ui/core';

const headingStyles = {
  fontFamily: ["'Helvetica Neue'", 'Helvetica', 'sans-serif'].toString(),
  fontWeight: 700
};

const theme = createMuiTheme({
  palette: {
    primary: colors.blue,
    secondary: colors.red
  },
  typography: {
    fontFamily: ["'Fira Mono'", 'Menlo', 'monospace'].toString(),
    h1: headingStyles,
    h2: headingStyles,
    h3: headingStyles,
    h4: headingStyles,
    h5: headingStyles,
    h6: {
      fontWeight: 400
    },
    overline: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 2
    },
    button: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 6
  }
});

export default theme;
