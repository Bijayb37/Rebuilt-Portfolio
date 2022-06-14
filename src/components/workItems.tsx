import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChakraImage } from "./GridItem"
import NextLink from "next/link"

export const WorkTitle = ({ children }) => {
  return (
    <Breadcrumb
      paddingTop="10px"
      spacing="8px"
      separator={<ChevronRightIcon boxSize={5} color="gray.500" />}
    >
      <BreadcrumbItem display={{ base: "none", md: "inline-flex" }}>
        <NextLink href="/" passHref>
          <BreadcrumbLink
            color={useColorModeValue("rgb(1, 163, 196)", "rgb(129, 230, 217)")}
            fontSize="xl"
          >
            Home
          </BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <NextLink href="/projects" passHref>
          <BreadcrumbLink
            color={useColorModeValue("rgb(1, 163, 196)", "rgb(129, 230, 217)")}
            fontSize="xl"
          >
            Projects
          </BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Heading display="inline-block" as="h2" fontSize={24} mb={4}>
          {children}
        </Heading>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WorkImage = ({ src, alt }) => {
  const isMobile = typeof src === "object"
  if (isMobile) {
    const mobileImages = src?.map((img, i) => (
      <ChakraImage
        key={i}
        src={img}
        alt={img}
        height={664}
        width={372}
        objectFit="cover"
        objectPosition="0% 0%"
        borderRadius="10px"
      />
    ))
    return (
      <SimpleGrid columns={2} gap={2}>
        {mobileImages}
      </SimpleGrid>
    )
  } else {
    return (
      <Box mb={2}>
        <ChakraImage
          height={420}
          width={720}
          objectFit="cover"
          objectPosition="0% 0%"
          src={src}
          alt={alt}
          borderRadius="10px"
        />
      </Box>
    )
  }
}

export const WorkBadge = ({ title }) => (
  <Badge colorScheme={useColorModeValue("red", "green")} mr={2}>
    {title}
  </Badge>
)
