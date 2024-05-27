
import { 
  Box,
  Container,
  Flex,
  Text } from '@chakra-ui/react'
import Link from 'next/link';

import {useState, useEffect} from 'react'

const Links = ['Dashboard', 'Projects', 'Team'];

export default function Navbar() {
  return(
      <Box bg="#000">
          <Container maxW={'6xl'}>
              <Flex
                as={'nav'}
                h={16}
                alignItems={'center'} 
                justifyContent={'space-between'} color="#fff">
                <Text 
                  fontSize="lg" 
                  fontWeight="bold">GraceBuds</Text>
                  <Flex gap={5}>{Links.map((item, i) => (
                    <Link href={item} key={i}>{item}</Link>
                  ))}</Flex>
              </Flex>
          </Container>
      </Box>
  )
}
