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
  imageURL: "https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function Wall() {
  return (
    <Box>
      <Flex
        backgroundImage={wallBackground.imageURL}
        bgSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Container>
          <VStack
            py={{ base: 20, md: 60 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Doing Nothing is Not <br /> An Option of Our Life
              </Text>
            </Stack>

            <Stack direction={"row"} mt={90}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Bible Study Plan
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Search the word
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Flex>

    <Flex position="relative" zIndex={0} mt={-10}>
        <Container maxW={'6xl'}>
        <SimpleGrid columns={3}>
            <Box bg='#f86f2d'>
                <Heading
                    p={3}>
                    Served Over
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
