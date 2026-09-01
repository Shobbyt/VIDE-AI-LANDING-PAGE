
import HeroFeatures from "./HeroFeatures";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "motion/react";
import heroImage from "../public/hero-image.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-[var(--color-background)] px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="max-w-2xl"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
                    >
                        <LuGraduationCap
                            size={18}
                            strokeWidth={2}
                            className="text-[var(--color-primary)]"
                        />

                        <span className="text-sm font-medium text-[var(--color-primary)] sm:text-base">
                            Built for Schools, not for demos
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
                    >
                        The study partner that
                        <br className="hidden sm:block" />
                        teaches you, then tests you
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                        }}
                        className="mt-6 max-w-xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8"
                    >
                        VIDE explains anything at your level, turns each explanation into
                        flashcards, and keeps you accountable with focus sprints and
                        streaks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                        }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row"
                    >
                        <button className="rounded-lg bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-md">
                            Start Studying for Free
                        </button>

                        <button className="rounded-lg border border-[var(--color-primary)] bg-white px-6 py-3.5 font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-light)]">
                            See What's Inside
                        </button>
                    </motion.div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-xl">
                        <img
                            src={heroImage}
                            alt="VIDE study platform"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    delay: 0.7,
                }}
            >
                <HeroFeatures />
            </motion.div>

        </section>
    );
};

export default Hero;
