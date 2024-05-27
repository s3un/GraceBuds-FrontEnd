"use client";

import { Box, Container, Center, Heading } from "@chakra-ui/react";

export default function bibleStudies() {
  return (
    <Box m={150}>
      <Container maxW={"6xl"}>
        <Center>
          <Heading size={"md"} pb={10}>
            Recent from Bible Studies
          </Heading>
        </Center>
      </Container>
    </Box>
  );
}
