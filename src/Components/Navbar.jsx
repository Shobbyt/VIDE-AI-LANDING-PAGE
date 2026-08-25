import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import videLogo from "../public/vide-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="sticky top-0 z-1000 border-b border-[#d4efe7] bg-[#fdfaf0]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

     
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <img
            src={videLogo}
            alt="VIDE"
            className="h-9 w-9 object-contain"
          />

          <span
            style={{ fontFamily: "Lastica" }}
            className="translate-y-0.5 text-2xl text-[var(--color-primary)]"
          >
            VIDE
          </span>
        </motion.a>



        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="hidden items-center gap-8 md:flex"
        >
          <a
            href="#home"
            className="text-black transition-colors hover:text-[#006251]"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-black transition-colors hover:text-[#006251]"
          >
            Features
          </a>

          <a
            href="#study-mode"
            className="text-black transition-colors hover:text-[#006251]"
          >
            Study Mode
          </a>
        </motion.div>


 
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="hidden items-center gap-6 md:flex"
        >
          <button className="text-black transition-colors hover:text-[#006251]">
            Sign In
          </button>

          <button className="rounded-lg bg-[#006251] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#004f42]">
            Get Started
          </button>
        </motion.div>


   
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </motion.button>
      </div>



      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#d4efe7] bg-[#fdfaf0] px-6 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 py-5"
            >
              <a
                href="#home"
                onClick={closeMenu}
                className="text-black hover:text-[#006251]"
              >
                Home
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="text-black hover:text-[#006251]"
              >
                Features
              </a>

              <a
                href="#study-mode"
                onClick={closeMenu}
                className="text-black hover:text-[#006251]"
              >
                Study Mode
              </a>

              <button
                onClick={closeMenu}
                className="text-left text-black hover:text-[#006251]"
              >
                Sign In
              </button>

              <button
                onClick={closeMenu}
                className="w-full rounded-lg bg-[#006251] px-5 py-3 font-medium text-white hover:bg-[#004f42]"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;