

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-[#2a4d69] border-t-transparent rounded-full animate-spin"
        aria-label="Loading"
      />
      <div className="mt-4 text-[#2a4d69] font-semibold">Processing...</div>
    </motion.div>
  );
}
