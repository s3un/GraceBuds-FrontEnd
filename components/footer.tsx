"use client";

// import { ReactNode } from "react";
import { Box, Text, Container, SimpleGrid, Heading, Stack, Link } from "@chakra-ui/react";

// const ListHeader = ({ children }: { children: ReactNode }) => {
//     return (
//       <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//         {children}
//       </Text>
//     );
//   };

const Podcast = {
    imageURL: '',
    imageAlt: 'this is suppose to be an image',
    Title: '',
    Date: ''
}

export default function Footer() {
  return (
    <Box bg={"black"}>
      <Container color="white" maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Box>
            <Heading size={"md"} mt={10}>
              About us
            </Heading>
            <Text pt={5}>
              Hello we are gracebud and we do what we know how to do best
            </Text>
          </Box>

          <Box>
            <Heading size={"md"} mt={10}>
              Recent Podcasts
            </Heading>
            <Text pt={5}>
              Hello we are gracebud and we do what we know how to do best
            </Text>
          </Box>
        </SimpleGrid>
        <Box></Box>
      </Container>
    </Box>
  );
}
