import { motion } from "framer-motion"
import Head from "next/head"

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}

export default function Articles({ children, title = "" }) {
  const realTitle = `${title} - Bijay Bohora`
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {title && (
        <Head>
          <title>{realTitle}</title>
        </Head>
      )}
      {children}
    </motion.main>
  )
}
