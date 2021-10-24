import Highlight, {Prism} from 'prism-react-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import dracula from 'prism-react-renderer/themes/dracula';
import {chakra} from '@chakra-ui/react';

export default function CodeBlock({children, className}) {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      Prism={Prism}
      theme={dracula}
      code={children.trim()}
      language={language}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <chakra.pre
          className={className}
          style={style}
          p={4}
          fontSize="smaller"
          rounded="md"
          fontFamily="mono"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </chakra.pre>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
