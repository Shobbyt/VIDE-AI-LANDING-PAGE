import { Users } from "lucide-react";
import { motion } from "motion/react";
import VideAboutRight from "./VideAboutRight";

const VideAbout = () => {
    return (
        <section
            id="about"
            className="bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20" >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                                <Users
                                    size={20}
                                    strokeWidth={1.8}
                                    className="text-[var(--color-primary)]"
                                />
                            </div>

                            <p className="font-[var(--font-secondary)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                                About Us
                            </p>
                        </div>

                        <h2 className="max-w-lg font-[var(--font-primary)] text-4xl font-semibold leading-[1.12] tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
                            We built Vide because studying alone is harder than
                            it should be.
                        </h2>

                        <div className="mt-7 space-y-5 font-[var(--font-secondary)] text-base leading-7 text-[var(--color-muted)] sm:text-[17px] sm:leading-8">
                            <p>
                                Vide is an AI-powered study companion built for
                                university students who want more than a search
                                engine when they sit down to study. Designed
                                under the Midev brand, Vide delivers
                                intelligent, curriculum-aligned support across
                                web and mobile — meeting students wherever they
                                learn.
                            </p>

                            <p>
                                Vide helps students explain tough concepts,
                                generate flashcards on the fly, stay focused
                                with timed sprints, and track real progress.
                                Whether you're working through a tough concept
                                at midnight or reviewing before an exam, Vide
                                is there — patient, accurate, and grounded in
                                your curriculum.
                            </p>
                        </div>
                    </motion.div>

                  
                    <VideAboutRight />

                </div>
            </div>
        </section>
    );
};

export default VideAbout;