import { useState } from "react";
import Sign from "../Components/Sign";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import videLogo from "../public/vide-logo.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-4 sm:px-6 lg:px-10">

      {/* Mobile Logo */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="lg:hidden"
      >
        <Link
          to="/"
          className="mx-auto flex w-fit"
        >
          <img
            src={videLogo}
            alt="VIDE"
            className="h-16 w-16 object-contain"
          />
        </Link>
      </motion.div>

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center">

        {/* Left Side */}
        <Sign />

        {/* Right Side */}
        <div className="flex w-full items-center justify-center lg:w-1/2">

          <motion.section
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[400px] rounded-2xl border border-black/10 bg-white px-6 py-6 shadow-lg sm:px-8"
          >

            <div className="w-full">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="text-center"
              >
                <h1 className="text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
                  Create your account
                </h1>

                <p className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                  Start learning with a tutor built around you
                </p>
              </motion.div>

              {/* Google */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                type="button"
                whileHover={{
                  y: -2,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.07)",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-black"
              >
                <FcGoogle size={19} />

                <span>
                  Continue with Google
                </span>
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="my-4 flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-black/10" />

                <span className="whitespace-nowrap text-[11px] text-[var(--color-muted)]">
                  or use email
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="space-y-3"
              >

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-medium text-black"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-medium text-black"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>

                {/* Matric Number */}
                <div>
                  <label
                    htmlFor="matricNumber"
                    className="mb-1 block text-xs font-medium text-black"
                  >
                    Matric Number
                  </label>

                  <input
                    id="matricNumber"
                    type="text"
                    placeholder="Enter your matric number"
                    className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-xs font-medium text-black"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 pr-10 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-[var(--color-primary)]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <FiEyeOff size={18} />
                      ) : (
                        <FiEye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1 block text-xs font-medium text-black"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 pr-10 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-[var(--color-primary)]"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff size={18} />
                      ) : (
                        <FiEye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Create Account */}
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 7px 18px rgba(0, 98, 81, 0.18)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-1 w-full rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition"
                >
                  Create Account
                </motion.button>

              </motion.form>

              {/* Sign In */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                className="mt-4 text-center text-xs text-[var(--color-muted)]"
              >
                Already have an account?{" "}

                <Link
                  to="/signin"
                  className="font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Sign in
                </Link>
              </motion.p>

              {/* Back Home */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                }}
                className="mt-2 text-center"
              >
                <Link
                  to="/"
                  className="text-xs font-medium text-[var(--color-primary)] hover:underline"
                >
                  ← Back to home
                </Link>
              </motion.div>

            </div>

          </motion.section>

        </div>

      </div>

    </main>
  );
};

export default Signup;