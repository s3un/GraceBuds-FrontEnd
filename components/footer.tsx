"use client";

// import { ReactNode } from "react";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Heading,
  Stack,
  Link,
  Input,
  Textarea,
  Button,
  chakra,
  useColorModeValue,
  VisuallyHidden
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Podcast = {
  imageURL: "",
  imageAlt: "this is suppose to be an image",
  Title: "",
  Date: "",
};


export default function Footer() {
  return (
    <Box bg={"#f86f2d"}>
      <Container color="white" maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg : 3 }} spacing={20}>
          <Box mt={10}>
            <Heading size={"md"}>
              About us
            </Heading>
            <Text pt={5}>
              Hello we are gracebud and we do what we know how to do best
            </Text>
          </Box>

          <Box mt={10}>
            <Heading size={"md"} >
              Socials
            </Heading>
            <Stack direction={{ ld: 'row'}} mt={5}>

            </Stack>
          </Box>
          <Box>
            <Stack my={10}>
              <Input 
                placeholder="Your Name"/>
              <Input placeholder="Email address" />
              <Textarea placeholder="Leave your message" />
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                size='md'
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
        <Text
          textAlign={'center'}
          py={4}>© 2024 GraceBuds. All rights reserved</Text>
      </Container>
    </Box>
  );
}
