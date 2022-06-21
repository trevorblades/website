import PropTypes from "prop-types";
import React from "react";
import { CONTAINER_PADDING_X, CONTAINER_PADDING_Y } from "../utils";
import { Flex, Link } from "@chakra-ui/react";

export default function Footer({ children }) {
  return (
    <Flex
      borderTopWidth="1px"
      as="footer"
      align="center"
      py={CONTAINER_PADDING_Y}
      px={CONTAINER_PADDING_X}
    >
      <div>
        <div>Made with 🥥 in Burnaby, BC</div>
        <div>
          &copy; {new Date().getFullYear()} -{" "}
          <Link isExternal href="https://github.com/trevorblades/website">
            Source code
          </Link>
        </div>
      </div>
      {children}
    </Flex>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
};
