import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import videLogo from "../public/vide-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 350);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="sticky top-0 z-1000 border-b border-[#d4efe7] bg-[#fdfaf0]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex h-10 w-10 items-center"
        >
          <Link to="/" className="flex items-center">
            <img
              src={videLogo}
              alt="VIDE"
              className="h-10 w-10 scale-[2] object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            to="/"
            className="text-black transition-colors hover:text-[#006251]"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="text-black transition-colors hover:text-[#006251]"
          >
            Features
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("study-mode")}
            className="text-black transition-colors hover:text-[#006251]"
          >
            Study Mode
          </button>
        </motion.div>

        {/* Desktop Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="hidden items-center gap-6 md:flex"
        >
          <Link
            to="/signin"
            className="text-black transition-colors hover:text-[#006251]"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-[#006251] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#004f42]"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden"
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#d4efe7] bg-[#fdfaf0] md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 px-6 py-5"
            >
              <Link
                to="/"
                onClick={closeMenu}
                className="text-black hover:text-[#006251]"
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("features")}
                className="text-left text-black hover:text-[#006251]"
              >
                Features
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("study-mode")}
                className="text-left text-black hover:text-[#006251]"
              >
                Study Mode
              </button>

              <Link
                to="/signin"
                onClick={closeMenu}
                className="text-black hover:text-[#006251]"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="w-full rounded-lg bg-[#006251] px-5 py-3 text-center font-medium text-white hover:bg-[#004f42]"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;