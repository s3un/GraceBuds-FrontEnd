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

import { InfoOutlineIcon, CalendarIcon } from "@chakra-ui/icons";
import { BiShare } from "react-icons/bi";

const outReach = {
  imageUrl: "https://bit.ly/4bTKYnK",
  imageAlt: "this is an image",
  location: "Lagos Nigeria",
  name: "World Wide Donation",
  time: "Monday, 8:00 Am - Tuesday, 8:00 Pm",
  description:
    "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
};

const reachDate = new Date();
const formattedDated = reachDate.toLocaleDateString();

export default function Outreach() {
  return (
    <Box m={150}>
      <Container maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}>
        <Center>
          <Heading size={"md"} pb={10}>
            Our Latest Outreach
          </Heading>
        </Center>
        
        <VStack>
          <Stack direction={{sm : 'column', md : "column", lg : 'row'}} spacing={4}>
            <Box>
              <HStack>
              <Box
                maxW={360}
                maxH={360}>
                <Image src={outReach.imageUrl} />
              </Box>
              <Box 
                maxH={360}
                maxW={360}
                bg={'ornage.400'}>
                <HStack>
                  <Heading
                    size={'md'}>{outReach.name}</Heading>

                  <Tag my={5} colorScheme={'green'} size={'sm'} borderRadius={'full'}><TagLabel>Completed</TagLabel></Tag> 
                </HStack> 
                <HStack>
                  <CalendarIcon />
                  <Text>{outReach.time}</Text>
                </HStack>
                
                <HStack
                  pt={4}>
                  <InfoOutlineIcon />
                  <Text>{outReach.location}</Text>
                </HStack>
                
                <Button
                bg={"orange"}
                rounded={"full"}
                color={"white"}
                mt={4}
                size='sm'
                _hover={{ bg: "orange.500=" }}
              >
                Read more
              </Button>
              </Box>
              </HStack>
            </Box>

            <Box>
              <HStack>
              <Box
                maxW={360}
                maxH={360}>
                <Image src={outReach.imageUrl} />
              </Box>
              <Box>
                <HStack>
                  <Heading
                    size={'md'}>{outReach.name}</Heading>

                  <Tag my={5} colorScheme={'green'} size={'sm'} borderRadius={'full'}><TagLabel>Completed</TagLabel></Tag> 
                </HStack> 
                <HStack>
                  <CalendarIcon />
                  <Text>{outReach.time}</Text>
                </HStack>
                
                <HStack
                  pt={4}>
                  <InfoOutlineIcon />
                  <Text>{outReach.location}</Text>
                </HStack>
                
                <Button
                bg={"orange"}
                rounded={"full"}
                color={"white"}
                mt={4}
                size='sm'
                _hover={{ bg: "orange.500=" }}
              >
                Read more
              </Button>
              </Box>
              </HStack>
            </Box>
         
          </Stack>
{/* 
          <Stack>

          </Stack> */}
        </VStack>
      </Container>
    </Box>
  );
}
