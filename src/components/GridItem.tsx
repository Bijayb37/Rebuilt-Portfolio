import {
  Box,
  chakra,
  Heading,
  LinkBox,
  LinkOverlay,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import isValidHTMLProp from "@emotion/is-prop-valid"
import Link from "next/link"

export const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => {
    return isValidHTMLProp(prop) || prop === "layout"
  },
})

export default function GridItem({ data, children }) {
  const { title, imageSrc, routeUrl } = data
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <ChakraImage
          height={450}
          width={720}
          src={imageSrc}
          alt={title}
          borderRadius="12px"
          objectFit="cover"
          objectPosition="0% 0%"
        />
        <Link href={`/projects/${routeUrl}`} passHref scroll={false}>
          <Heading size="md">
            <LinkOverlay>{title}</LinkOverlay>
          </Heading>
        </Link>
        <Text fontSize={16}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
