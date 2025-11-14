import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import AuthCard from "./AuthCard";
import ToggleSwitch from "./ToggleSwitch";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LoadingState from "./LoadingState";
import SuccessState from "./SuccessState";
import { useAuth } from "../../lib/auth-context-utils";

export default function AuthContainer({ initialMode = "signup", onClose, navigate }) {
  const [activeForm, setActiveForm] = useState(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { login } = useAuth();

  // For page fade-out before redirect
  const [fadeOut, setFadeOut] = useState(false);

  const handleSuccess = (userData) => {
    login(userData);
    setIsSuccess(true);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        try {
          if (onClose) {
            onClose();
          } else {
            navigate("/");
          }
        } catch (error) {
          console.error("Navigation error:", error);
          window.location.href = "/";
        }
      }, 500);
    }, 2000);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#e7eff6] via-white to-[#2a4d69] px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <AuthCard>
            <ToggleSwitch active={activeForm} setActive={setActiveForm} />
            <div className="relative min-h-[340px]">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <LoadingState key="loading" />
                ) : isSuccess ? (
                  <SuccessState key="success" />
                ) : activeForm === "login" ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <LoginForm
                      setIsLoading={setIsLoading}
                      onSuccess={handleSuccess}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <SignupForm
                      setIsLoading={setIsLoading}
                      onSuccess={handleSuccess}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AuthCard>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
            alt="People holding hands for justice"
            className="w-full h-full rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}