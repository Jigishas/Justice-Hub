

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ToggleSwitch({ active, setActive }) {
  return (
    <div className="flex mb-10 relative">
      {["login", "signup"].map((tab) => (
        <button
          key={tab}
          className={`flex-1 py-2 font-semibold text-lg transition-colors duration-200 ${
            active === tab
              ? "text-[#2a4d69]"
              : "text-[#4b86b4] hover:text-[#e74c3c]"
          }`}
          onClick={() => setActive(tab)}
          style={{ outline: "none" }}
        >
          {tab === "login" ? "Login" : "Sign Up"}
        </button>
      ))}
      <motion.div
        className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-[#2a4d69] via-[#4b86b4] to-[#e74c3c]"
        layout
        initial={false}
        animate={{
          x: active === "login" ? "0%" : "50%",
          width: "50%",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ width: "50%" }}
      />
    </div>
  );
}
