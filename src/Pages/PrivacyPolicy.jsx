import { motion } from "motion/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const sections = [
  { id: "data", number: "01", title: "What Data We Collect" },
  { id: "legal", number: "02", title: "Legal Basis for Processing" },
  { id: "use", number: "03", title: "How We Use Your Data" },
  { id: "processors", number: "04", title: "Third-Party Data Processors" },
  { id: "retention", number: "05", title: "Data Retention" },
  { id: "security", number: "06", title: "Data Security" },
  { id: "rights", number: "07", title: "Your Rights Under the NDPA 2023" },
  { id: "ai", number: "08", title: "AI-Generated Content and Data" },
  { id: "children", number: "09", title: "Children and Age Restriction" },
  { id: "changes", number: "10", title: "Changes to This Policy" },
];

const PrivacyPolicy = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

      <main className="px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">


            <aside className="hidden md:block lg:sticky lg:top-28 lg:self-start">
              <nav>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Contents
                </p>

                <div className="space-y-3 border-l border-black/10 pl-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="group flex w-full items-start gap-3 text-left transition-colors duration-200">
                      <span className="shrink-0 text-xs font-medium text-[var(--color-primary)]">
                        {section.number}.
                      </span>

                      <span className="text-xs leading-5 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-primary)]">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </div>
              </nav>
            </aside>

            <article className="max-w-3xl">

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-sm text-[var(--color-muted)]">
                Updated on: September 2026
              </motion.p>


              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} >
                <h1 className="font-[var(--font-primary)] text-4xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-5xl">
                  Privacy Policy
                </h1>

                <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    Vide is an AI-powered study companion built for students of
                    Osun State University (UNIOSUN). It is developed and
                    operated by Midev. By creating an account and using Vide,
                    you agree to the terms of this Privacy Policy.
                  </p>

                  <p>
                    Midev acts as the Data Controller under the Nigeria Data
                    Protection Act 2023 (NDPA 2023), as enforced by the Nigeria
                    Data Protection Commission (NDPC). We are responsible for
                    deciding how and why your personal data is collected and
                    processed.
                  </p>
                </div>
              </motion.div>


              <section
                id="data"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10" >
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  1. What Data We Collect
                </h2>

                <div className="mt-5 space-y-6 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    When you sign up and use Vide, we collect the following:
                  </p>

                  <div>
                    <h3 className="mb-2 font-semibold text-black">
                      Account Data
                    </h3>

                    <ul className="list-disc space-y-1 pl-5">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Matriculation number</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-black">
                      Usage Data (collected automatically during sessions)
                    </h3>

                    <ul className="list-disc space-y-1 pl-5">
                      <li>Session identifier (anonymized)</li>
                      <li>Courses you interact with</li>
                      <li>Number of messages per session</li>
                      <li>
                        Token consumption per session (used for platform
                        monitoring only — not sold or profiled)
                      </li>
                      <li>Timestamps of activity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-black">
                      We do not collect:
                    </h3>

                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        The full content of your conversations. Messages are
                        processed in real-time to generate responses and are
                        not stored as conversation logs after your session
                        ends.
                      </li>

                      <li>
                        Payment information (Vide is currently free; if a paid
                        tier is introduced, billing data will be handled by a
                        certified third-party payment processor).
                      </li>

                      <li>
                        Device fingerprints, precise location data, or IP
                        addresses for the purpose of user tracking.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section
                id="legal"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  2. Legal Basis for Processing
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    Under the NDPA 2023, we process your personal data on the
                    following lawful bases:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                      <strong className="text-black">Consent</strong> — you
                      provide explicit consent at signup by ticking the consent
                      checkbox.
                    </li>

                    <li>
                      <strong className="text-black">
                        Contractual necessity
                      </strong>{" "}
                      — processing your account data is required to deliver the
                      Vide service to you.
                    </li>

                    <li>
                      <strong className="text-black">
                        Legitimate interests
                      </strong>{" "}
                      — anonymised usage data is processed to monitor platform
                      performance and ensure Vide remains operational.
                    </li>
                  </ul>
                </div>
              </section>


              <section
                id="use"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  3. How We Use Your Data
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>We use your data strictly to:</p>

                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Create and manage your Vide account.</li>
                    <li>
                      Deliver and improve the AI study assistant experience.
                    </li>
                    <li>
                      Monitor platform usage and token costs to keep Vide
                      running sustainably.
                    </li>
                    <li>
                      Contact you about important service updates or changes
                      to these documents.
                    </li>
                  </ul>

                  <p className="mt-5">
                    We do not sell, rent, share, or disclose your personal data
                    to third parties for marketing, advertising, or commercial
                    profiling purposes.
                  </p>
                </div>
              </section>


              <section
                id="processors"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  4. Third-Party Data Processors
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    Vide uses the following third-party services to operate.
                    Each acts as a Data Processor under the NDPA 2023,
                    processing your data only on our instruction and only for
                    the purpose of delivering the Vide service. Data Processing
                    Agreements (DPAs) are in place with each provider:
                  </p>

                  <ul className="mt-4 list-disc space-y-3 pl-5">
                    <li>
                      <strong className="text-black">Groq</strong> — AI
                      inference. Your messages are transmitted to Groq&apos;s
                      API to generate study responses. Groq does not retain or
                      train on your messages beyond what their own terms
                      permit.
                    </li>

                    <li>
                      <strong className="text-black">Google Gemini</strong> —
                      Embedding generation. Your queries are processed to
                      enable course-specific knowledge retrieval.
                    </li>

                    <li>
                      <strong className="text-black">Chroma</strong> — Vector
                      database. Course knowledge chunks are stored and searched
                      to retrieve relevant study material.
                    </li>
                  </ul>

                  <p className="mt-5">
                    Each provider maintains their own privacy policy. We
                    encourage you to review them. We do not authorise any of
                    these providers to use your data for any purpose beyond
                    delivering the Vide service.
                  </p>
                </div>
              </section>


              <section
                id="retention"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  5. Data Retention
                </h2>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <li>
                    Account data is retained for as long as your account is
                    active.
                  </li>

                  <li>
                    Usage logs are retained in anonymized form for a maximum
                    of 12 months, after which they are permanently deleted.
                  </li>

                  <li>
                    Session data (messages) is not stored after a session ends.
                  </li>

                  <li>
                    On account deletion, all personally identifiable data
                    associated with your account is permanently removed within
                    30 days.
                  </li>
                </ul>
              </section>


              <section
                id="security"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  6. Data Security
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    We apply the following technical and organizational
                    measures to protect your data:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                      Access controls limiting who within Midev can access user
                      data.
                    </li>

                    <li>
                      Encrypted data transmission between Vide and third-party
                      processors.
                    </li>

                    <li>
                      Regular review of third-party processor security
                      standards.
                    </li>
                  </ul>

                  <p className="mt-5">
                    No system is completely immune to breach. In the event of a
                    data breach that poses a risk to your rights and freedoms,
                    we will notify you and the NDPC within 72 hours of becoming
                    aware of the breach, in accordance with the NDPA 2023.
                  </p>
                </div>
              </section>


              <section
                id="rights"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  7. Your Rights Under the NDPA 2023
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    As a data subject under the Nigeria Data Protection Act
                    2023, you have the following rights:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                      <strong className="text-black">
                        Right to information
                      </strong>{" "}
                      — to know how your data is collected and used (this policy
                      fulfils that).
                    </li>

                    <li>
                      <strong className="text-black">Right of access</strong> —
                      to request a copy of the personal data we hold about you.
                    </li>

                    <li>
                      <strong className="text-black">
                        Right to rectification
                      </strong>{" "}
                      — to request correction of inaccurate data.
                    </li>

                    <li>
                      <strong className="text-black">Right to erasure</strong>{" "}
                      — to request deletion of your data.
                    </li>

                    <li>
                      <strong className="text-black">
                        Right to withdraw consent
                      </strong>{" "}
                      — at any time, without affecting the lawfulness of prior
                      processing.
                    </li>

                    <li>
                      <strong className="text-black">Right to object</strong> —
                      to processing based on legitimate interests.
                    </li>

                    <li>
                      <strong className="text-black">
                        Right to lodge a complaint
                      </strong>{" "}
                      — with the Nigeria Data Protection Commission (NDPC) at
                      ndpc.gov.ng if you believe your rights have been violated.
                    </li>
                  </ul>

                  <p className="mt-5">
                    To exercise any of these rights, contact us at{" "}
                    <span className="font-medium text-[var(--color-primary)]">
                      [your contact email]
                    </span>
                    . We will respond within 30 days.
                  </p>
                </div>
              </section>


              <section
                id="ai"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  8. AI-Generated Content and Data
                </h2>

                <div className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>
                    Vide uses large language models (LLMs) to generate
                    responses. Your messages are processed by AI systems to
                    produce study assistance. You should be aware that:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                      AI responses may contain errors and should not be treated
                      as authoritative academic fact.
                    </li>

                    <li>
                      Vide does not use your conversations to train or
                      fine-tune any AI model.
                    </li>

                    <li>
                      No automated profiling or decision-making that produces
                      legal or significant effects is applied to you.
                    </li>
                  </ul>
                </div>
              </section>


              <section
                id="children"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10" >
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  9. Children and Age Restriction
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Vide is strictly intended for university students aged 18
                  and above. We do not knowingly collect data from anyone under
                  18. If we become aware that a user is under 18, we will
                  immediately suspend the account and delete all associated
                  data.
                </p>
              </section>


              <section
                id="changes"
                className="scroll-mt-28 mt-14 border-t border-black/10 pt-10">
                <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                  10. Changes to This Policy
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  We may update this Privacy Policy as Vide evolves. We will
                  notify registered users of material changes via email at
                  least 14 days before changes take effect. Continued use of
                  Vide after that date constitutes acceptance of the updated
                  policy. If you do not agree to the changes, you may delete
                  your account before they take effect.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;