import { Box, Button, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Title>Home Page</Title>
      <Box p={"lg"}>
        <Text>test whatever</Text>
        <Button component={Link} href="/blog">
          Click me
        </Button>
      </Box>
    </div>
  );
}
