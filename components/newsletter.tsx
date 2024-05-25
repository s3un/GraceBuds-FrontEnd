'use client'

import { Box, Container, SimpleGrid, Text, Heading, Stack, Input } from '@chakra-ui/react'
import styles from '@/components/global.module.css'

export default function Newsletter() {
    return(
        <Box>
            <Container 
                maxW={'6xl'}
                mt={30}
                mb={30}
                className={`${styles.border}`}>
                <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
                    <Box 
                        maxH={50}
                        maxW={50}>
                        
                    </Box>

                    <Box>
                        <Heading size={'md'}>Subscribe to Newsletter </Heading>
                        <Stack>
                            <Input placeholder='large size' size='lg' />
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}