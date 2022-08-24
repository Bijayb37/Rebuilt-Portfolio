import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/Main"
import theme from "../theme"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()


function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Layout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
