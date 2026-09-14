import { useState } from "react";
import Sign from "../Components/Sign";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-4 sm:px-6 lg:px-8">

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center">


        <Sign />


        <div className="flex w-full justify-center lg:w-1/2">

          <motion.section
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-sm rounded-xl border border-black/10 bg-white px-6 py-6 shadow-lg sm:px-7">


            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15,
              }}
              className="text-center">
              <h1 className="text-xl font-bold text-[var(--color-primary)]">
                Welcome Back
              </h1>

              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Pick up right where you left off
              </p>
            </motion.div>


            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="mt-5 space-y-3" >


              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium text-black">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                />
              </div>


              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-xs font-medium text-black">
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 pr-10 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-[var(--color-primary)]"
                    aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>

             
                <div className="mt-2 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-[var(--color-primary)] hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>

            
              <motion.button
                type="submit"
                whileHover={{
                  y: -1,
                  boxShadow: "0 6px 16px rgba(0, 98, 81, 0.18)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white">
                Sign In
              </motion.button>

            </motion.form>


            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.45,
              }}
              className="mt-4 text-center text-[11px] text-[var(--color-muted)]">
              New to VIDE?{" "}

              <Link
                to="/signup"
                className="font-semibold text-[var(--color-primary)] hover:underline" >
                Create an account
              </Link>
            </motion.p>

        
            <div className="mt-2 text-center">
              <Link
                to="/"
                className="text-[11px] font-medium text-[var(--color-primary)] hover:underline">
                ← Back to home
              </Link>
            </div>

          </motion.section>

        </div>

      </div>

    </main>
  );
};

export default Signin; 