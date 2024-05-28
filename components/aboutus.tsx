'use client'

import { 
    Text,
    Box, 
    Container,
    Center,
    Heading,
    Stack,
    VStack,
    Button,
    AspectRatio} from '@chakra-ui/react'


export default function Aboutus() {
    return(
        <Box m={20}>
            <Container maxW={{ base : '3xl', sm : '3xl', md : '6xl', lg : '6xl', xl : '6xl' }}>
                <Center>
                    <Heading size={'lg'} pb={10}>About us</Heading>
                </Center>
                <VStack>
                <Stack direction={{ base: "column", md : "column", lg : 'row', xl : 'row' }} spacing={2}>
                        <Box>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                            </Text>

                            <Button
                                bg={"orange"}
                                mt={10}
                                rounded={"full"}
                                color={"white"}
                                size='md'
                                _hover={{ bg: "orange.500=" }}
                            >
                                Read More
                            </Button>
                        </Box>

                        <Box
                            maxH={350}
                            maxW={560}>
                            <AspectRatio 
                                ratio={1}
                                w={560}
                                h={300}>
                            <iframe
                                title='naruto'
                                src='https://www.youtube.com/live/hFlZVDY8To4?si=xfEvPF9Cy25Bxrtg'
                                allowFullScreen
                            />
                            </AspectRatio>
                        </Box>
                   </Stack>
                </VStack>
            </Container>
        </Box>
    )
}