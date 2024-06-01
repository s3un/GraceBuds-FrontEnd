"use client";

import { 
    Box, 
    Text, 
    Container, 
    Heading, 
    Center,
    Flex, 
    VStack} from "@chakra-ui/react";

export default function Streams() {
  return (
    <Box>
      <Container
        maxW={{ base: "3xl", sm: "3xl", md: "6xl", lg: "6xl", xl: "6xl" }}>
        <Center>
          <Heading size={"lg"} pb={10}>
            Listen to Podcasts
          </Heading>
        </Center>


      <Flex>
        <VStack>
            
        </VStack>
      </Flex>
      </Container>
    </Box>
  );
}
