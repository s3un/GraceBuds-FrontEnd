'use client'

import { 
    Box, 
    Container, 
    Heading, 
    Stack, 
    Input, 
    Button, 
    Flex,
    Textarea,
    Image,
    Spacer } from '@chakra-ui/react'
import styles from '@/components/global.module.css'

import emage from '../public/pic.jpg'

export default function Newsletter() {
    return(
        <Box>
            <Container 
                maxW={'6xl'}
                mt={30}
                mb={30}>
                <Flex justifyContent="center" alignItems="center" >
                    <Box 
                        maxH={50}
                        maxW={600}>
                        <Image src='emage' alt='Group picture'/>
                    </Box>
                    <Spacer />
                    <Box>
                        <Heading 
                            size={'md'}
                            pb={10}> Get in Touch! </Heading>
                        <Stack>
                            <Input placeholder='Your Name' htmlSize={50}/>
                            <Input placeholder='Email address'/>
                            <Textarea placeholder='Leave your message' />
                            <Button>Submit</Button>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}