import Head from "next/head"
// import NavBar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8} bg="bgColor" minHeight="100vh">
      <Head>
        <title>Bijay Bohora - Homepage</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
