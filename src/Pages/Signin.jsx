import Sign from "../Components/Sign";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import videLogo from "../public/vide-logo.png";

const Signin = () => {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-6 lg:px-10">


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="lg:hidden">
        <Link
          to="/"
          className="mx-auto mb-6 flex w-fit items-center gap-3">
          <img
            src={videLogo}
            alt="VIDE"
            className="h-10 w-10 object-contain"
          />

          <span
            style={{ fontFamily: "Lastica" }}
            className="text-3xl font-bold tracking-wide text-[var(--color-primary)]" >
            VIDE
          </span>
        </Link>
      </motion.div>


      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">

        <Sign />



        <div className="flex w-full justify-center lg:w-1/2">

          <motion.section
            initial={{
              opacity: 0, y: 35, scale: 0.97,
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
            className="w-full max-w-md rounded-2xl border border-black/10 bg-white px-7 py-8 shadow-xl sm:px-9"
          >

            <div className="w-full">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                <h1 className="text-2xl font-bold text-[var(--color-primary)]">
                  Welcome Back
                </h1>

                <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                  Pick up right where you left off
                </p>
              </motion.div>


              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                type="button"
                whileHover={{
                  y: -2,
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition"
              >
                <FcGoogle size={20} />

                <span>
                  Continue with Google
                </span>
              </motion.button>



              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="my-5 flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-black/10" />

                <span className="whitespace-nowrap text-xs text-[var(--color-muted)]">
                  or use email
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </motion.div>


              <motion.form
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: "easeOut",
                }}
                className="space-y-4"
              >

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-black"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>


        
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium text-black"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>


                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 8px 20px rgba(0, 98, 81, 0.20)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition"
                >
                  Sign In
                </motion.button>

              </motion.form>


   
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                className="mt-5 text-center text-xs text-[var(--color-muted)]" >
                New to VIDE?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[var(--color-primary)] hover:underline">
                  Create an account
                </Link>
              </motion.p>


          
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                }}


                className="mt-3 text-center" >
                <Link
                  to="/"
                  className="text-xs font-medium text-[var(--color-primary)] hover:underline" >
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

export default Signin;