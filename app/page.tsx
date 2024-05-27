
import Navbar from '@/components/Navbar';
import { 
  Box,
  Container,
  Flex,
  Text } from '@chakra-ui/react'

const Links = ['Dashboard', 'Projects', 'Team'];

export default function Home() {
  return(
      <Box>
         <Navbar /> 
      </Box>
  )
}
