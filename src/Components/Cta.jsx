import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section id="study-mode" className="px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
        >
          Ready for your next study session?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-dark)] sm:text-lg"
        >
          Create an account and start with the tutor mode that suits how you learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-block"
          >
            <Link
              to="/signup"
              className="mt-8 inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3.5 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Create your free account
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Cta;