import Sign from "../Components/Sign";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import videLogo from "../public/vide-logo.png";

const Signin = () => {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-4 sm:px-6 lg:px-8">

     
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}


        className="lg:hidden"  >
        <Link
          to="/"
          className="mx-auto flex w-fit">


          <img
            src={videLogo}
            alt="VIDE"
            className="h-16 w-16 object-contain"
          />
        </Link>
      </motion.div>


   
      <div className="mx-auto flex max-w-7xl items-start lg:min-h-[calc(100vh-2rem)] lg:items-center">

  
        <Sign />


      
       <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
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
            className="w-full max-w-sm rounded-xl border border-black/10 bg-white px-6 py-6 shadow-lg sm:px-7" >


            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15,
              }}
              className="text-center" >

              <h1 className="text-xl font-bold text-[var(--color-primary)]">
                Welcome Back
              </h1>

              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Pick up right where you left off
              </p>
            </motion.div>


            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              type="button"
              whileHover={{
                y: -1,
                boxShadow: "0 5px 14px rgba(0, 0, 0, 0.07)",
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-black">
              <FcGoogle size={19} />

              <span>
                Continue with Google
              </span>
            </motion.button>


   
            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-black/10" />

              <span className="whitespace-nowrap text-[11px] text-[var(--color-muted)]">
                or use email
              </span>

              <div className="h-px flex-1 bg-black/10" />
            </div>



            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="space-y-3" >


              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium text-black" >
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
                  className="mb-1 block text-xs font-medium text-black" >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-black/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                />
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
              className="mt-4 text-center text-[11px] text-[var(--color-muted)]" >
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
                className="text-[11px] font-medium text-[var(--color-primary)] hover:underline" >
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