import {injectGlobal} from 'react-emotion';

export default () =>
  injectGlobal({
    a: {
      color: 'inherit',
      ':hover': {
        textDecoration: 'none'
      }
    }
  });
