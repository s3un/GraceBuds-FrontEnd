'use client'

import { Box, Center, Heading, SimpleGrid, Image } from '@chakra-ui/react'
import { useState } from 'react';

const handleImageClick = (url: string | URL | undefined) => {
  window.open(url)
}

const galleryPhoto = {
    imageUrl: "https://bit.ly/4bTKYnK",
    imageUrl1: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageUrl2: 'https://images.unsplash.com/photo-1586210477035-c8d790403e35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG91dHJlYWNofGVufDB8fDB8fHww'
}

export default function Gallery() {
    return(
        <Box>
          <Center>
            <Heading size={"md"} p={4}>
              Gallery
            </Heading>
          </Center>

        <SimpleGrid columns={4}>
          <Box
            cursor="zoom-in"
            _hover={{ boxShadow: 'lg' }}
            onClick={() => handleImageClick(galleryPhoto.imageUrl)}>
            <Image  
            src={galleryPhoto.imageUrl}
            transition="transform 0.2s"
            _hover={{ 
              transform: 'scale(1.05)',
               }} />
          </Box>

          <Box
            cursor="zoom-in"
            _hover={{ boxShadow: 'lg' }}
            onClick={() => handleImageClick(galleryPhoto.imageUrl1)}>
            <Image  
            src={galleryPhoto.imageUrl1}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }} />
          </Box>

          <Box
            cursor="zoom-in"
            _hover={{ boxShadow: 'lg' }}
            onClick={() => handleImageClick(galleryPhoto.imageUrl1)}>
            <Image  
            src={galleryPhoto.imageUrl1}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }} />
          </Box>

          <Box
            cursor="zoom-in"
            _hover={{ boxShadow: 'lg' }}
            onClick={() => handleImageClick(galleryPhoto.imageUrl1)}>
            <Image  
            src={galleryPhoto.imageUrl1}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }} />
          </Box>
        </SimpleGrid>

        </Box>
    )    
}