import Highlight, { Prism } from "prism-react-renderer";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import dracula from "prism-react-renderer/themes/dracula";
import fenceparser from "fenceparser";
import parse from "parse-numeric-range";
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
  const { hasCopied, onCopy } = useClipboard(children);

  const linesToHighlight = useMemo(() => {
    try {
      const { highlight } = fenceparser(metastring);
      return parse(Object.keys(highlight).toString());
    } catch (error) {
      return [];
    }
  }, [metastring]);

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
              py="4"
              overflow="auto"
              fontFamily="mono"
            >
              {tokens.map((line, i) => (
                <Box
                  key={i}
                  px="4"
                  background={
                    linesToHighlight.includes(i + 1) && "whiteAlpha.200"
                  }
                  {...getLineProps({ line, key: i })}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
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
