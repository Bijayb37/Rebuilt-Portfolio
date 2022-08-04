import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { IoLinkSharp, IoLogoGithub } from "react-icons/io5"
import Layout from "../../components/layouts/Articles"
import { Paragraph } from "../../components/textStyles"
import { WorkBadge, WorkImage, WorkTitle } from "../../components/workItems"
import { projectPageData } from "../../data/data"

export default function Project() {
  const router = useRouter()
  let { project } = router.query
  //@ts-ignore
  const foundProject = projectPageData?.[project]
  //@ts-ignore
  let projectTitle = project?.charAt(0).toUpperCase() + project?.slice(1)
  const projectTech = foundProject?.tech?.map((t, i) => (
    <WorkBadge key={i} title={t} />
  ))
  const projectList = foundProject?.list.map((l: string, i) => (
    <ListItem key={i}>{l}</ListItem>
  ))
  const projectDescriptions = foundProject?.description
  const projectImages = foundProject?.images && foundProject?.images.map((img, i) => (
    <WorkImage src={img} alt={img} key={i} />
  )) 

  return (
    <Layout title={projectTitle}>
      <Container>
        <WorkTitle>{project && projectTitle}</WorkTitle>
        {foundProject?.demoUrl && (
          <Link href={foundProject?.demoUrl} target="_blank">
            <Button
              variant="ghost"
              colorScheme={useColorModeValue("cyan", "teal")}
              leftIcon={<IoLinkSharp />}
            >
              Live App
            </Button>
          </Link>
        )}

        <Link href={foundProject?.githubUrl} target="_blank">
          <Button
            variant="ghost"
            colorScheme={useColorModeValue("cyan", "teal")}
            leftIcon={<IoLogoGithub />}
          >
            Github Repo
          </Button>
        </Link>
        <Paragraph size="1.1em">{projectDescriptions}</Paragraph>
        <UnorderedList my={3}>{projectList}</UnorderedList>
        <Box mb={3}>{projectTech}</Box>
        <Flex direction="column" align="center">
          {projectImages}
        </Flex>
      </Container>
    </Layout>
  )
}
