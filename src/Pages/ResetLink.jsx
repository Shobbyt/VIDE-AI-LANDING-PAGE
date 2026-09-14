import Sign from "../Components/Sign";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ResetLink = () => {
  const email = "xxxxxxxxxxxx@gmail.com";

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center">
    
        <Sign />





        <div className="flex w-full justify-center lg:w-1/2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm rounded-xl border border-black/10 bg-white px-6 py-8 text-center shadow-lg sm:px-7">
            <h1 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
              Check your inbox
            </h1>

            <p className="mt-4 font-[var(--font-secondary)] text-sm leading-6 text-[var(--color-muted)]">
              We sent a confirmation link to{" "}
              <span className="font-medium text-black">
                {email}
              </span>
              .
            </p>

            <p className="mt-2 font-[var(--font-secondary)] text-sm leading-6 text-[var(--color-muted)]">
              Confirm it and come back to start studying.
            </p>

            <div className="mt-7">
              <Link
                to="/signin"
                className="font-[var(--font-secondary)] text-sm font-medium text-[var(--color-primary)] hover:underline">
                Back to Sign In
              </Link>
            </div>

            <div className="mt-3">
              <Link
                to="/"
                className="font-[var(--font-secondary)] text-xs text-[var(--color-muted)] transition hover:text-[var(--color-primary)]">
                Back to Home
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default ResetLink;