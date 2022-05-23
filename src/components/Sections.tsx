import { motion } from "framer-motion"

const Sections = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: "linear", delay }}
  >
    {/* {console.log(delay)} */}
    {children}
  </motion.div>
)

export default Sections
