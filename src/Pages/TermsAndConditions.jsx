
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const sections = [
    { id: "acceptance", number: "01", title: "Acceptance of Terms" },
    { id: "what-vide-is", number: "02", title: "What Vide Is" },
    { id: "ai-responses", number: "03", title: "Nature of AI-Generated Responses" },
    { id: "account", number: "04", title: "Your Account" },
    { id: "acceptable-use", number: "05", title: "Acceptable Use" },
    {
        id: "academic-integrity",
        number: "06",
        title: "Examination and Academic Integrity",
    },
    { id: "intellectual-property", number: "07", title: "Intellectual Property" },
    { id: "free-tier", number: "08", title: "Free Tier and Future Paid Tier" },
    {
        id: "availability",
        number: "09",
        title: "Service Availability and Force Majeure",
    },
    {
        id: "liability",
        number: "10",
        title: "Limitation of Liability",
    },
    { id: "termination", number: "11", title: "Termination" },
    { id: "changes", number: "12", title: "Changes to These Terms" },
    {
        id: "governing-law",
        number: "13",
        title: "Governing Law and Dispute Resolution",
    },
    { id: "severability", number: "14", title: "Severability" },
    { id: "entire-agreement", number: "15", title: "Entire Agreement" },
    { id: "contact", number: "16", title: "Contact" },
];

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] lg:gap-20">
                    {/* Table of Contents */}
                    <aside className="hidden pb-10 md:block lg:sticky lg:top-28 lg:self-start">
                        <p className="mb-4 font-[var(--font-secondary)] text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                            Contents
                        </p>

                        <nav className="space-y-2">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="group flex gap-2 font-[var(--font-secondary)] text-xs leading-5 text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                                >
                                    <span className="shrink-0 text-[10px] text-black/40 group-hover:text-[var(--color-primary)]">
                                        {section.number}
                                    </span>

                                    <span>{section.title}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

      
                    <article className="max-w-3xl">
                        <p className="font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                            Updated on: September 2026
                        </p>

                        <h1 className="mt-4 font-[var(--font-primary)] text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl">
                            Terms and Conditions
                        </h1>



                     
                        <section id="acceptance" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                1. Acceptance of Terms
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                By creating a Vide account and ticking the consent checkbox at
                                signup, you confirm that:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>
                                    You are a currently enrolled student of Osun State University
                                    (UNIOSUN).
                                </li>
                                <li>You are at least 18 years of age.</li>
                                <li>
                                    You have read, understood, and agree to be bound by these
                                    Terms and Conditions and the Privacy Policy.
                                </li>
                            </ul>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                If you do not agree, do not create an account or use Vide.
                            </p>
                        </section>

                     
                        <section id="what-vide-is" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                2. What Vide Is
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is an AI-powered study companion designed to help UNIOSUN
                                students understand course material for:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>CSC 401 — Software Engineering</li>
                                <li>CSC 403 — Artificial Intelligence</li>
                                <li>CSC 405 — Net-Centric Computing</li>
                                <li>CSC 407 — Digital Computer Networks and Communication</li>
                                <li>CSC 409 — Computer Graphics and Visualisation</li>
                                <li>CSC 419 — Formal Methods and Software Development</li>
                                <li>CSC 497 — Research Methodology / Seminar</li>
                            </ul>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is a study aid only. It is not a replacement for attending
                                lectures, consulting your lecturers, reading your course
                                materials, or any other formal academic engagement. Vide is not
                                affiliated with, endorsed by, or acting on behalf of UNIOSUN or
                                any of its academic staff.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is currently in its early release phase. The knowledge
                                base may not cover every topic, subtopic, or recent update
                                within the above courses. Midev makes no guarantee that Vide's
                                content reflects the most current UNIOSUN syllabus at any given
                                time.
                            </p>
                        </section>

               
                        <section id="ai-responses" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                3. Nature of AI-Generated Responses
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                You expressly acknowledge and agree that:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>
                                    All responses generated by Vide are produced by an AI system
                                    and may contain errors, omissions, or inaccuracies.
                                </li>
                                <li>
                                    Vide's responses must not be submitted as your own work in
                                    any assignment, project, or academic submission.
                                </li>
                                <li>
                                    Vide's responses do not constitute professional, academic,
                                    legal, or any other form of certified advice.
                                </li>
                                <li>
                                    You are solely responsible for verifying the accuracy of any
                                    information Vide provides before relying on it.
                                </li>
                                <li>
                                    Midev is not liable for any academic outcome, loss, or
                                    consequence arising from your reliance on Vide's responses.
                                </li>
                            </ul>
                        </section>

               
                        <section id="account" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                4. Your Account
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                You are responsible for:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>Keeping your login credentials confidential and secure.</li>
                                <li>All activity that occurs under your account.</li>
                                <li>
                                    Providing accurate and truthful information at signup,
                                    including your correct matriculation number.
                                </li>
                            </ul>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                You may not share your account with another person or create
                                multiple accounts. Accounts found to be shared or duplicated
                                may be suspended without notice.
                            </p>
                        </section>

          
                        <section id="acceptable-use" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                5. Acceptable Use
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                You agree to use Vide only for lawful personal study purposes.
                                You must not:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>
                                    Use Vide during any examination, test, or formally invigilated
                                    academic assessment, whether in-person or remote.
                                </li>
                                <li>
                                    Submit content generated by Vide as your own original work in
                                    graded assessments.
                                </li>
                                <li>
                                    Attempt to manipulate, jailbreak, or override Vide's intended
                                    behaviour.
                                </li>
                                <li>
                                    Attempt to extract Vide's underlying system instructions,
                                    prompts, or model details.
                                </li>
                                <li>
                                    Use automated tools, bots, or scripts to send requests to
                                    Vide.
                                </li>
                                <li>
                                    Use Vide for any purpose unrelated to your personal academic
                                    study.
                                </li>
                                <li>
                                    Use Vide to generate content intended to deceive, harass, or
                                    defraud any person.
                                </li>
                            </ul>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Violation of any of the above may result in immediate
                                suspension or permanent termination of your account.
                            </p>
                        </section>

          
                        <section id="academic-integrity" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                6. Examination and Academic Integrity
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is strictly a personal study and learning tool. Any use of
                                Vide to gain an unfair advantage in an academic assessment —
                                including but not limited to examinations, take-home tests,
                                coursework submitted for grading, group projects where
                                independent contribution is required, or any other formally
                                assessed work — constitutes academic malpractice.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Midev accepts no responsibility whatsoever for any disciplinary
                                action, academic sanction, suspension, expulsion, legal
                                consequence, reputational harm, or any other outcome arising
                                from a user's choice to use Vide in violation of UNIOSUN's
                                academic integrity policy, Nigerian law, or any other
                                applicable rule or regulation. The full and sole responsibility
                                lies with the user.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                By creating an account, you confirm that you understand this
                                clause in full and agree to use Vide exclusively as a personal
                                study aid outside of any formal or invigilated assessment
                                context.
                            </p>
                        </section>


                        <section id="intellectual-property" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                7. Intellectual Property
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                All content, design, code, branding, and underlying systems
                                associated with Vide are the intellectual property of Midev. You
                                may not reproduce, reverse-engineer, distribute, sublicense, or
                                commercialise any part of Vide without prior written permission
                                from Midev.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                The course knowledge content within Vide is derived from
                                academic materials relevant to the UNIOSUN curriculum and is
                                used solely for the purpose of educational assistance to
                                enrolled students.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                AI-generated responses produced during your session are
                                provided for your personal study use only. You may not
                                republish, sell, or represent them as your own original
                                intellectual work.
                            </p>
                        </section>

         
                        <section id="free-tier" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                8. Free Tier and Future Paid Tier
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is currently available free of charge. Midev reserves the
                                right to introduce a paid tier in the future. If a paid tier is
                                introduced:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>Free tier users will be notified at least 30 days in advance.</li>
                                <li>
                                    A defined free usage level will be maintained for users who
                                    do not upgrade.
                                </li>
                                <li>
                                    Billing terms, pricing, and refund policies will be published
                                    separately before any paid features are activated.
                                </li>
                                <li>
                                    No charges will be applied to any user without their explicit
                                    prior consent.
                                </li>
                            </ul>
                        </section>

                   

                        <section id="availability" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                9. Service Availability and Force Majeure
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Vide is provided on a best-efforts basis. Midev does not
                                guarantee that Vide will be available at all times or without
                                interruption.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Midev shall not be held liable for any failure or delay in the
                                performance of Vide that results from causes beyond our
                                reasonable control, including but not limited to: outages or
                                failures of third-party infrastructure providers (Groq, Google
                                Gemini, Chroma), internet service disruptions, power failures,
                                acts of God, government actions, or any other event outside
                                Midev's direct control. In such events, we will make reasonable
                                efforts to restore service as quickly as possible and will
                                communicate with users where feasible.
                            </p>
                        </section>

                   
                        <section id="liability" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                10. Limitation of Liability
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                To the fullest extent permitted by the laws of the Federal
                                Republic of Nigeria:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
                                <li>
                                    Midev's total liability to you for any claim arising from
                                    your use of Vide shall not exceed the amount you have paid to
                                    Midev in the 12 months preceding the claim (which, while Vide
                                    is free, is zero).
                                </li>
                                <li>
                                    Midev is not liable for any indirect, incidental, special,
                                    consequential, or punitive damages, including academic loss,
                                    exam failure, loss of opportunity, or reputational harm.
                                </li>
                                <li>
                                    Midev is not liable for the accuracy, completeness, or fitness
                                    for purpose of any AI-generated response produced by Vide.
                                </li>
                                <li>
                                    Midev is not liable for the actions or failures of third-party
                                    service providers (Groq, Google Gemini, Chroma) beyond our
                                    reasonable control.
                                </li>
                            </ul>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Nothing in this clause limits liability for fraud, gross
                                negligence, or any liability that cannot be excluded under
                                Nigerian law.
                            </p>
                        </section>

        
                        <section id="termination" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                11. Termination
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                Midev reserves the right to suspend or permanently terminate
                                your account at any time if you violate these Terms, with or
                                without prior notice depending on the severity of the
                                violation.
                            </p>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                You may delete your account at any time by contacting us at
                                [your contact email]. On deletion, your data will be removed in
                                accordance with the Privacy Policy.
                            </p>
                        </section>

          
                        <section id="changes" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                12. Changes to These Terms
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                We may update these Terms as Vide grows and evolves. We will
                                notify you of material changes via your registered email address
                                at least 14 days before changes take effect. Continued use of
                                Vide after that date constitutes acceptance of the updated
                                Terms. If you do not agree, you may delete your account before
                                the changes take effect.
                            </p>
                        </section>

            
                        <section id="governing-law" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                13. Governing Law and Dispute Resolution
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                These Terms are governed exclusively by the laws of the Federal
                                Republic of Nigeria. Any dispute arising from or in connection
                                with your use of Vide shall first be attempted to be resolved
                                by informal negotiation. If unresolved within 30 days,
                                disputes shall be subject to the jurisdiction of the Nigerian
                                courts.
                            </p>
                        </section>

            

                        <section id="severability" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                14. Severability
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                If any provision of these Terms is found to be invalid or
                                unenforceable under Nigerian law, that provision shall be
                                severed and the remaining provisions shall continue in full
                                force and effect.
                            </p>
                        </section>

          
                        <section id="entire-agreement" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                15. Entire Agreement
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                These Terms and the Privacy Policy together constitute the
                                entire agreement between you and Midev regarding your use of
                                Vide and supersede any prior representations, agreements, or
                                understandings.
                            </p>
                        </section>


                        <section id="contact" className="scroll-mt-28 mt-14">
                            <h2 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                16. Contact
                            </h2>

                            <p className="mt-5 leading-7 text-[var(--color-muted)]">
                                For any questions, data requests, or complaints regarding these
                                documents, contact:
                            </p>

                            <div className="mt-5 space-y-1 leading-7 text-[var(--color-muted)]">
                                <p className="font-semibold text-black">Midev</p>
                               <p>vide@midev.ng</p>
                            </div>

                            <p className="mt-6 leading-7 text-[var(--color-muted)]">
                                For data protection complaints, you may also contact the
                                Nigeria Data Protection Commission directly at{" "}
                                <span className="font-medium text-[var(--color-primary)]">
                                    ndpc.gov.ng
                                </span>
                            </p>
                        </section>

                      
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;