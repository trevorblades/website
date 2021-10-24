import Highlight, {Prism} from 'prism-react-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import dracula from 'prism-react-renderer/themes/dracula';
import {Box, Button, DarkMode, chakra, useClipboard} from '@chakra-ui/react';
import {FiClipboard} from 'react-icons/fi';

export default function CodeBlock({children, className}) {
  const {hasCopied, onCopy} = useClipboard(children);
  return (
    <Highlight
      Prism={Prism}
      theme={dracula}
      code={children.trim()}
      language={className.replace(/language-/, '')}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Box pos="relative">
          <chakra.pre
            className={className}
            style={style}
            p={4}
            fontSize="smaller"
            rounded="md"
            fontFamily="mono"
            overflow="auto"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </chakra.pre>
          <DarkMode>
            <Button
              pos="absolute"
              top="2"
              right="2"
              size="xs"
              leftIcon={<FiClipboard />}
              color="white"
              onClick={onCopy}
            >
              {hasCopied ? 'Copied!' : 'Copy'}
            </Button>
          </DarkMode>
        </Box>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
