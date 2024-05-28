"use client";

import {
  Box,
  Stack,
  VStack,
  Text,
  Container,
  Heading,
  Flex,
  useBreakpointValue,
  Button,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

const wallBackground = {
  imageURL: "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Wall() {
  return (
    <Box>
      <Flex
        backgroundImage={wallBackground.imageURL}
        bgSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Container maxW={'5xl'}>
          <VStack
            py={{ base: 20, md: 60 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Text
                color={"orange"}
                fontWeight={700}
                lineHeight={1.2}
                textAlign={'center'}
                fontSize={useBreakpointValue({ base: "3xl", md: "7xl" })}
              >
                Jesus is King
              </Text>

              <Text
                color={"white"}
                lineHeight={1.2}
                textAlign={'center'}
              >
                

                Do not be anxious about anything, but in every situation, by prayer and petition,<br /> with thanksgiving, present your requests to God. And the peace of God, <br /> which transcends all understanding, will guard your hearts and your minds in Christ Jesus.
                <br />
                <br />Philippians 4:6-7 (NIV)
              </Text>
            </Stack>

            <Stack direction={{ base: "column", md : "row" }}spacing={3} mt={90}>
              <Button
                bg={"orange"}
                rounded={"full"}
                color={"white"}
                size='lg'
                _hover={{ bg: "orange.500=" }}
              >
                Bible Study Plan
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                size='lg'
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Search the word
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Flex>

    <Flex position="relative" zIndex={0} mt={-10} flexDirection={{ md : 'column'}}>
        <Container maxW={'6xl'}>
        <SimpleGrid columns={3}>
            <Box bg='#f86f2d'>
                <Heading
                    p={3}>
                    Daily Prayer
                </Heading>

                <Text 
                    px={5}>
                    this is just Nomral textjhdfiuhfffdjkfnkjdbfkjdbjkfbdjkbjkd
                </Text>
            </Box>
            <Box bg='orange'>
                <Heading
                    p={5}>
                    Bible Calendar
                </Heading>

                <Text
                    px={5}>
                Even the all-powerful Pointing has no control about the blind texts.
                </Text>

                <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                ml={5}
                my={7}
              >Download</Button>
            </Box>
            <Box bg='#fa8f3d'>
                <Heading
                    p={5}>
                    Be a Volunteer
                </Heading>

                <Text
                    px={5}>
                Even the all-powerful Pointing has no control about the blind texts.
                </Text>

                <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                ml={5}
                my={7}
              >submit</Button>
            </Box>
        </SimpleGrid>
        </Container>
    </Flex>

    </Box>
  );
}
