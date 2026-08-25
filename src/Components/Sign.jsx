import videLogo from "../public/vide-logo.png";
import { motion } from "motion/react";

const Sign = () => {
  return (
    <div className="hidden w-1/2 bg-[var(--color-background)] px-12 lg:flex lg:items-center xl:px-16">
      <div className="w-full max-w-xl">


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex items-center gap-3" >
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              src={videLogo}
              alt="VIDE"
              className="h-14 w-14 object-contain"
            />
          </div>

          <span
            style={{ fontFamily: "Lastica" }}
            className="text-5xl font-bold leading-none tracking-wide text-[var(--color-primary)]">
            VIDE
          </span>
        </motion.div>



        <div
          className="mt-14"
          style={{ fontFamily: "var(--font-secondary)" }} >


          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Your personal study partner
          </motion.p>



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="text-4xl font-semibold leading-[1.15] tracking-tight text-black xl:text-[42px]">
            <span className="whitespace-nowrap">
              Study with a tutor that
            </span>

            <br />

            <span className="whitespace-nowrap">
              adapts to how you learn.
            </span>
          </motion.h1>



          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="mt-6 max-w-lg text-base leading-7 text-black/60 xl:text-lg">
            Five tutor modes, one-tap flashcards from any explanation,
            focus sessions, and a streak that keeps you honest.
          </motion.p>
        </div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.65,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          style={{ fontFamily: "var(--font-secondary)" }} >

          <span className="text-sm font-medium text-black/60">
            ✓ Five tutor modes
          </span>

          <span className="text-sm font-medium text-black/60">
            ✓ Smart flashcards
          </span>

          <span className="text-sm font-medium text-black/60">
            ✓ Focus sessions
          </span>

        </motion.div>

      </div>
    </div>
  );
};

export default Sign;