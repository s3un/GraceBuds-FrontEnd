"use client";

import {
  Box,
  Container,
  Heading,
  Center,
  Stack,
  Input,
  Button,
  Flex,
  Textarea,
  Image,
  Spacer,
} from "@chakra-ui/react";


export default function Newsletter() {
  return (
    <Box
        backgroundColor={"#fa8f3d"}>
      <Container 
        py={50}>
        <Center>
          <Heading size={"lg"} pb={10}>
            Be Inspired
          </Heading>
        </Center>
        <Flex
            gap={4}
            >
        <Input placeholder="Email address" />
        <Button
           
            size={['sm', 'md']}
               bg={"whiteAlpha.300"}
               borderColor={'black'}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Subscribe
              </Button>
        </Flex>
      </Container>
    </Box>
  );
}
