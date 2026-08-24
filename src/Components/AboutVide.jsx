import {
  LuBrain,
  LuLayers,
  LuTimer,
  LuFlame,
  LuUserRound,
} from "react-icons/lu";

const reasons = [
  {
    icon: LuBrain,
    title: "Five tutor modes",
    description:
      "Switch between Tutor, Socratic, Quiz master, Exam coach and Simplify mid-conversation — the same AI, five teaching styles.",
  },

  {
    icon: LuLayers,
    title: "One-tap flashcards",
    description:
      "Any explanation becomes a deck. VIDE extracts the testable ideas and saves them for spaced review.",
  },

  {
    icon: LuTimer,
    title: "Focus sprints",
    description:
      "A built-in study timer that logs every finished sprint and turns real work into visible progress.",
  },

  {
    icon: LuFlame,
    title: "Streaks and XP",
    description:
      "Reviews and focus sessions earn XP and keep a daily streak momentum you can actually see.",
  },

  {
    icon: LuUserRound,
    title: "Study profile",
    description:
      "Tell VIDE your level and subjects once, and every answer is pitched for you instead of a generic reader.",
  },
];

const AboutVide = () => {
    return (
        <section id="features" className="bg-[var(--second-background)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">

               
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:whitespace-nowrap lg:text-4xl">
                        Five things VIDE does that a plain chatbot doesn't
                    </h2>
                </div>

                
                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">

                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={reason.title}
                              className="rounded-2xl bg-white p-6 shadow-lg sm:p-7 lg:col-span-2 border border-black/10">
                               
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                                    <Icon
                                        size={24}
                                        strokeWidth={2}
                                        className="text-[var(--color-primary)]"
                                    />
                                </div>

                               
                                <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-dark)]">
                                    {reason.title}
                                </h3>

                              
                                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default AboutVide;