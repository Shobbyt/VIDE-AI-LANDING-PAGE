import { Link } from "react-router-dom";

import viLogo from "../public/VI-LOGO.png";

const Footer = () => {
    return (
        <footer className="bg-[var(--color-background)] px-6 pt-16 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">


                <div className="flex flex-col gap-12 pb-12 lg:flex-row lg:items-start lg:justify-between">


                    <div className="lg:max-w-sm">
                        <div className="flex items-center gap-3">
                            <img
                                src={viLogo}
                                alt="VI logo"
                                className="h-10 w-10 object-contain"
                            />

                            <h2 className="font-[var(--font-logo)] text-3xl text-[var(--color-primary)]">
                                VIDE
                            </h2>
                        </div>

                        <p className="mt-5 max-w-xs font-[var(--font-secondary)] text-sm leading-6 text-[var(--color-muted)]">
                            Your AI study companion — explain anything at your level, make
                            flashcards, and stay accountable.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-20">


                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Product
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <a
                                        href="#features"
                                        className="transition hover:text-[var(--color-primary)]"
                                    >
                                        Features
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]"
                                    >
                                        Study Modes
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#about"
                                        className="transition hover:text-[var(--color-primary)]"
                                    >
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Company
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]">
                                        Our Story
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

        
                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Legal
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <Link
                                        to="/terms"
                                        className="transition hover:text-[var(--color-primary)]" >
                                        Terms and Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/privacy"
                                        className="transition hover:text-[var(--color-primary)]" >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

        
                <div className="border-t border-black/10 py-6">
                    <p className="text-center font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                        © {new Date().getFullYear()} Vide — Midev
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;