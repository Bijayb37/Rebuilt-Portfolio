import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import Head from "next/head"
import Sections from "../components/Sections"
import Layout from "../components/layouts/Articles"
import { workData } from "../data/data"
import { BioSection, BioYear, Paragraph } from "../components/textStyles"
import { workSkills } from "../data/data"
import { WorkBadge } from "../components/workItems"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
const frontendTech = workSkills?.frontend.map((t, i) => (
  <WorkBadge key={i} title={t} />
))
const backendTech = workSkills?.backend.map((t, i) => (
  <WorkBadge key={i} title={t} />
))

const Index = () => (
  <Layout>
    <Container>
      <Head>
        <title>Bijay Bohora - Homepage</title>
      </Head>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Bijay Bohora
        </Heading>
        <p>Full Stack Developer</p>
      </Box>
      <Sections>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>{workData}</Paragraph>
        <Box textAlign="center" my={2}>
          <NextLink href="/projects">
            <Button
              variant="outline"
              colorScheme={useColorModeValue("cyan", "teal")}
              rightIcon={<ChevronRightIcon />}
              size="sm"
            >
              My Projects
            </Button>
          </NextLink>
          <Link href="https://github.com/bijayb37" target="_blank">
            <Button
              variant="outline"
              colorScheme={useColorModeValue("cyan", "teal")}
              size="sm"
              mx={2}
            >
              My Github
            </Button>
          </Link>
          <Link href='/resume.pdf' target="_blank">
            <Button
              variant="outline"
              colorScheme={useColorModeValue("cyan", "teal")}
              size="sm"
            >
              My Resume
            </Button>
          </Link>
          {/* <a className={styles.button} href='/resume.pdf' target="_blank">View My Resume</a> */}
        </Box>
      </Sections>
      <Sections delay={0.1}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Heading
          as="h4"
          fontSize={18}
          my={2}
          color={useColorModeValue("#5a73ed", "#ed5a7f")}
        >
          Frontend
        </Heading>
        {frontendTech}
        <Heading
          as="h4"
          fontSize={18}
          my={2}
          color={useColorModeValue("#5a73ed", "#ed5a7f")}
        >
          Backend
        </Heading>
        {backendTech}
      </Sections>
      <Sections delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Nepal
        </BioSection>
        <BioSection>
          <BioYear>2004</BioYear>
          Moved to Australia
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed a bachelors degree in Computer Science with a Data Science
          major from Swinbure University of Technology
        </BioSection>
      </Sections>
      <Sections delay={0.3}>
        <Heading variant="section-title">
        My Passions ♥
        </Heading>
        <Paragraph>
          Music (Piano & Guitar), Photography, Movies, Video Games
        </Paragraph>
      </Sections>
    </Container>
  </Layout>
)

export default Index
