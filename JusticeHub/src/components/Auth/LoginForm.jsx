import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm({ setIsLoading, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Invalid credentials');
      }
      const data = await res.json();
      setIsLoading(false);
      onSuccess(data.user);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`space-y-10`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="peer w-full px-4 py-3 rounded-lg border border-[#e7eff6] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#2a4d69] focus:border-[#2a4d69] transition-all duration-200 placeholder-transparent"
            placeholder="Email"
            autoComplete="email"
          />
          <label className="absolute left-4 top-3 text-[#2a4d69] pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:text-[#e74c3c] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#2a4d69] bg-white/70 px-1">
            Email
          </label>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="peer w-full px-4 py-3 rounded-lg border border-[#e7eff6] bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#2a4d69] focus:border-[#2a4d69] transition-all duration-200 placeholder-transparent"
            placeholder="Password"
            autoComplete="current-password"
          />
          <label className="absolute left-4 top-3 text-[#2a4d69] pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:text-[#e74c3c] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#2a4d69] bg-white/70 px-1">
            Password
          </label>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2a4d69] hover:text-[#e74c3c] transition"
            tabIndex={-1}
            onClick={() => setShowPass((v) => !v)}
            aria-label={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-gradient-to-r from-[#2a4d69] via-[#4b86b4] to-[#e74c3c] text-white font-bold shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200"
        >
          Login
        </button>
      </motion.div>
      {error && (
        <motion.div
          className="text-red-500 text-center"
          animate={shake ? { x: [-10, 10, -8, 8, 0] } : {}}
        >
          {error}
        </motion.div>
      )}
    </motion.form>
  );
}