import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "page-title": {
        fontSize: 40,
        textDecoration: "underline",
        textUnderlineOffset: 7,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginBottom: 2,
      },
    },
  },
}

const semanticTokens = {
  colors: {
    bgColor: {
      default: "#f0e7db",
      _dark: "#1e1e24",
    },
    navBgColor: {
      default: "#ffffff20",
      _dark: "#20202380",
    },
    linkColor: {
      default: "gray200",
      _dark: "whiteAlpha.900",
    },
    headingText: {
      default: "gray.800",
      _dark: "whiteAlpha.900",
    },
    text: {
      default: "#16161D",
      _dark: "#ade3b8",
    },
  },
  radii: {
    button: "12px",
  },
}
const colors = {
  black: "#16161D",
  grassTeal: "#88ccca",
}

const theme = extendTheme({
  semanticTokens,
  colors,
  components,
  fonts,
  breakpoints,
})

export default theme
