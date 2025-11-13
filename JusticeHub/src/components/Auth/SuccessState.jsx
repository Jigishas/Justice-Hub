// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <CheckCircle2 className="text-green-400" size={64} />
      </motion.div>
      <div className="mt-4 text-[#2a4d69] font-semibold text-lg">
        Success! Redirecting...
      </div>
      {/* Confetti effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 360},90%,60%)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1], y: [0, -40, 0] }}
            transition={{
              delay: 0.1 + Math.random() * 0.3,
              duration: 0.8,
              repeat: 0,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
