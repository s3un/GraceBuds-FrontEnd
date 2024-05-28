'use client'

import { Box, Container, Heading, Center, SimpleGrid } from '@chakra-ui/react'

export default function Gallery() {
    return(
        <Box>
          <Center>
            <Heading size={"md"} p={4}>
              Gallery
            </Heading>
          </Center>
          <SimpleGrid columns={2}>
            <Box bg='tomato' height='80px'>
                
            </Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
      </Box>
    )    
}