import {css, injectGlobal} from 'react-emotion';
import {size} from 'polished';

export default () =>
  injectGlobal({
    a: {
      color: 'inherit',
      ':hover': {
        textDecoration: 'none'
      }
    },
    'img.emoji': css(size('1.25em'), {
      marginLeft: '0.1em',
      marginRight: '0.05em',
      verticalAlign: '-0.25em'
    })
  });
