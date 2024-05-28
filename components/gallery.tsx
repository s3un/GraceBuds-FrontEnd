'use client'

import { Box, Container, Heading, Center, SimpleGrid, Image } from '@chakra-ui/react'

const galleryPhoto = {
    imageUrl: "https://bit.ly/4bTKYnK",
}

export default function Gallery() {
    return(
        <Box>
          <Center>
            <Heading size={"md"} p={4}>
              Gallery
            </Heading>
          </Center>
          <SimpleGrid columns={5}>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box 
                maxH={'80px'}>
                <Image src={galleryPhoto.imageUrl} />
            </Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
      </Box>
    )    
}