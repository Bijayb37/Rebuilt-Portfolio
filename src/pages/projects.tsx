import { Heading, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import GridItem from "../components/GridItem"
import Layout from "../components/layouts/Articles"
import Sections from "../components/Sections"
import { projectGridData } from "../data/data"

export default function works() {
  let time = 0
  const projectsGrid = projectGridData.map((p, i) => {
    if (i !==0 && i % 2 === 0) time+= 0.1
    return (
      <Sections key={p.title} delay={time}>
        <GridItem data={p}>{p.description}</GridItem>
      </Sections>
    )
  })

  return (
    <Layout title="Projects">
        <Heading as="h1" variant="section-title" mb={5}>
          Projects
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2}} gap={6}>
          {projectsGrid}
        </SimpleGrid>
    </Layout>
  )
}
