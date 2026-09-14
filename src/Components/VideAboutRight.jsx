import {
    LuGraduationCap,
    LuUserRound,
    LuSparkles,
    LuUsersRound,
} from "react-icons/lu";
import { motion } from "motion/react";

const features = [
    {
        icon: LuGraduationCap,
        title: "Student-first",
        description:
            "Every feature is designed around how real students actually study.",
    },
    {
        icon: LuUserRound,
        title: "Personalized",
        description:
            "Your level and subjects shape every explanation, quiz, and card.",
    },
    {
        icon: LuSparkles,
        title: "AI-assisted",
        description:
            "Powered by modern language models, guided by clear learning goals.",
    },
    {
        icon: LuUsersRound,
        title: "Built for everyone",
        description:
            "From undergraduate to postgraduate, Vide scales with you.",
    },
];

const VideAboutRight = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                    <motion.div
                        key={feature.title}
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -7,
                            scale: 1.015,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut",
                            },
                        }}
                        className="rounded-2xl border border-black/10 bg-white p-6 shadow-lg sm:p-7" >
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12 + 0.2,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                            <Icon
                                size={23}
                                strokeWidth={2}
                                className="text-[var(--color-primary)]"
                            />
                        </motion.div>

                        <h3 className="mt-5 font-[var(--font-secondary)] text-lg font-semibold text-[var(--color-text-dark)]">
                            {feature.title}
                        </h3>

                        <p className="mt-2 font-[var(--font-secondary)] text-sm leading-6 text-[var(--color-muted)]">
                            {feature.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default VideAboutRight;