"use client";

import {
  Box,
  Text,
  Container,
  Center,
  Heading,
  Stack,
  Image,
  Tag,
  TagLabel,
  HStack,
  VStack,
  Button
} from "@chakra-ui/react";

import styles from "@/components/global.module.css";

import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { BiShare } from "react-icons/bi";

const outReach = {
  imageUrl: "https://bit.ly/4bTKYnK",
  imageAlt: "this is an image",
  location: "Lagos Nigeria",
  name: "World Wide Donation",
  time: " 10:30AM-03:30PM",
  description:
    "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
};

const reachDate = new Date();
const formattedDated = reachDate.toLocaleDateString();

export default function Outreach() {
  return (
    <Box m={150}>
      <Container maxW={"6xl"}>
        <Center>
          <Heading size={"md"} pb={10}>
            Our Latest Outreach
          </Heading>
        </Center>
        <Stack direction={{base: "column", md: "row", sm: 'column'}} spacing={'24px'}>
          <Box maxW={'sm'}>
            <Box maxW={350} maxH={200} overflow={"hidden"} borderRadius="lg">
              <Image
                objectFit={"cover"}
                src={outReach.imageUrl}
                alt={outReach.imageAlt}
              />
            </Box>
            <Box maxW={350}>
              <HStack pt={5}>
                <Tag size={"md"} colorScheme="green" borderRadius={"full"}>
                  <TagLabel>Completed</TagLabel>
                </Tag>
                <Text>{formattedDated}</Text>
              </HStack>
              <Text fontSize="xl" pt={4}>
                {outReach.name}
              </Text>
              <HStack pt={5}>
                <TimeIcon color={"red"} />
                <Text>{outReach.time}</Text>
                
                <InfoOutlineIcon color={'red'} />
                <Text>{outReach.location}</Text>
              </HStack>
              <VStack>
                <Text pt={4}>{outReach.description}</Text>
              </VStack>

              <Button flex='1' variant='ghost' leftIcon={<BiShare />} mt={4}>
                Share
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
