import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { IoLogoGithub, IoMailOutline } from "react-icons/io5"
import NextLink from "next/link"
import { useRouter } from "next/router"

type linkItemTypes = {
  href: string
  path: string
  target?: string
  children: ReactNode
  [x: string]: any
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: linkItemTypes) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : "linkColor"}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default function Navbar(props) {
  const router = useRouter()
  const { asPath: path } = router
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="navBgColor"
      // bg="white"
      h={14}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <NextLink href="/">
            <Heading as="h1" cursor="pointer" size="lg" letterSpacing={"tight"}>
              <Text
                color="headingText"
                fontSize="24px"
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
              >
                Bijay Bohora
              </Text>
            </Heading>
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            display="inline-flex"
            alignItems="center"
            href="mailto:bijay.work37@gmail.com"
            path={path}
            pl={2}
            style={{ gap: 4 }}
          >
            <IoMailOutline />
            Email Me
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/bijayb37"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem href="/resume.pdf" path={path} target="_blank">
            My Resume
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <DarkModeSwitch />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="mailto:bijay.work37@gmail.com"
                >
                  Email Me
                </MenuItem>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://github.com/bijayb37"
                >
                  Github
                </MenuItem>
                <MenuItem as={Link} target="_blank" href="/resume.pdf">
                  My Resume
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
