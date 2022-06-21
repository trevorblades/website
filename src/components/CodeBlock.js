import Highlight, { Prism } from "prism-react-renderer";
import PropTypes from "prop-types";
import React from "react";
import dracula from "prism-react-renderer/themes/dracula";
import fenceparser from "fenceparser";
import {
  Box,
  Button,
  DarkMode,
  HStack,
  chakra,
  useClipboard,
} from "@chakra-ui/react";
import { FiClipboard, FiFile } from "react-icons/fi";

export default function CodeBlock({
  children,
  className = "language-text",
  file,
  metastring,
}) {
  console.log(metastring && fenceparser(metastring));
  const { hasCopied, onCopy } = useClipboard(children);
  return (
    <Highlight
      Prism={Prism}
      theme={dracula}
      code={children.trim()}
      language={className.replace(/language-/, "")}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box pos="relative" rounded="md" style={style}>
          <Box fontFamily="mono" fontSize="md">
            {file && (
              <HStack
                px="4"
                py="2"
                borderColor="whiteAlpha.300"
                borderBottomWidth="1px"
                color="gray.300"
              >
                <FiFile />
                <span>{file}</span>
              </HStack>
            )}
            <chakra.pre
              className={className}
              p="4"
              overflow="auto"
              fontFamily="mono"
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </chakra.pre>
          </Box>
          <DarkMode>
            <Button
              pos="absolute"
              top="2"
              right="2"
              size="xs"
              leftIcon={<FiClipboard />}
              onClick={onCopy}
            >
              {hasCopied ? "Copied!" : "Copy"}
            </Button>
          </DarkMode>
        </Box>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  className: PropTypes.string,
  file: PropTypes.string,
  metastring: PropTypes.string,
  children: PropTypes.string.isRequired,
};
