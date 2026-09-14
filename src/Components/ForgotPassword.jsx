import { useState } from "react";
import Sign from "../Components/Sign";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

     
        console.log("Reset password for:", email);
    };

    return (
        <main className="min-h-screen bg-[var(--color-background)] px-5 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center">

                <Sign />


                <div className="flex w-full justify-center lg:w-1/2">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-sm rounded-xl border border-black/10 bg-white px-6 py-7 shadow-lg sm:px-7"  >
                        {/* Heading */}
                        <div className="mb-7">
                            <h1 className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-primary)]">
                                Reset Password
                            </h1>

                            <p className="mt-2 font-[var(--font-secondary)] text-sm leading-6 text-[var(--color-muted)]">
                                We'll email you a password reset link
                            </p>
                        </div>

    
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-5" >


                 
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-[var(--font-secondary)] text-sm font-medium text-black">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-[var(--font-secondary)] text-sm outline-none transition placeholder:text-black/30 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                                />
                            </div>

          
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ y: -1 }}
                                type="submit"
                                className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 font-[var(--font-secondary)] text-sm font-medium text-white transition hover:bg-[var(--color-primary-hover)]">
                                Send Reset Link
                            </motion.button>
                        </motion.form>

    
                        <div className="mt-6 text-center">
                            <Link
                                to="/signin"
                                className="font-[var(--font-secondary)] text-sm font-medium text-[var(--color-primary)] hover:underline">
                                Back to Sign In
                            </Link>
                        </div>

        
                        <div className="mt-3 text-center">
                            <Link
                                to="/"
                                className="font-[var(--font-secondary)] text-xs text-[var(--color-muted)] transition hover:text-[var(--color-primary)]">
                                Back to Home
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>
        </main>
    );
};

export default ForgotPassword;