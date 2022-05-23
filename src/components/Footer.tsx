import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box mt={5} textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Bijay Bohora. All Rights Reserved.
    </Box>
  )
}

