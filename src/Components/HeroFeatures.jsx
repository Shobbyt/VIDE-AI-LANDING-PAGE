import {
    LuGraduationCap,
    LuMessageCircleQuestion,
    LuClipboardCheck,
    LuClipboardPenLine,
    LuLightbulb,
} from "react-icons/lu";

const features = [
    {
        icon: LuGraduationCap,
        title: "Tutor",
        description: "Clear, step-by-step teaching",
    },

    {
        icon: LuMessageCircleQuestion,
        title: "Socratic",
        description: "Guides you with questions",
    },

    {
        icon: LuClipboardCheck,
        title: "Quiz master",
        description: "Drills you with questions",
    },

    {
        icon: LuClipboardPenLine,
        title: "Exam coach",
        description: "Marks answers like an examiner",
    },

    {
        icon: LuLightbulb,
        title: "Simplify",
        description: "Plain-language explanations",
    },
];

const HeroFeatures = () => {
    return (
        <div className="mx-auto mt-10 max-w-7xl pb-12 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">

                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className={`
                                mx-3 flex items-center gap-5
                                rounded-2xl border border-black/10
                                bg-white p-6 shadow-sm
                                transition-shadow duration-300
                                hover:shadow-lg
                                sm:mx-0
                                lg:block lg:col-span-2

                                ${index === 3 ? "lg:col-start-2" : ""}
                            `}
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)] lg:mb-5">
                                <Icon
                                    size={24}
                                    strokeWidth={2}
                                    className="text-[var(--color-primary)]"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default HeroFeatures;