import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-1000 border-b border-[#d4efe7] bg-[#fdfaf0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">


        <a href="/" className="flex items-center gap-3">
          <img
            src="/vide-logo.png"
            alt="VIDE"
            className="h-9 w-9 object-contain"
          />

          <span
            style={{ fontFamily: "Lastica" }}
            className="translate-y-0.5 text-2xl text-[var(--color-primary)]"
          >
            VIDE
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-black transition-colors hover:text-[#006251]" >
            Home
          </a>

          <a
            href="#features"
            className="text-black transition-colors hover:text-[#006251]" >
            Features
          </a>

          <a
            href="#study-mode"
            className="text-black transition-colors hover:text-[#006251]" >
            Study Mode
          </a>
        </div>


        <div className="hidden items-center gap-6 md:flex">
          <button className="text-black transition-colors hover:text-[#006251]">
            Sign In
          </button>

          <button className="rounded-lg bg-[#006251] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#004f42]">
            Get Started
          </button>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden"
          aria-label="Toggle menu" >

          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>


      {isOpen && (
        <div className="border-t border-[#d4efe7] bg-[#fdfaf0] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-black hover:text-[#006251]">
              Home
            </a>

            <a
              href="#features"
              onClick={closeMenu}
              className="text-black hover:text-[#006251]">
              Features
            </a>

            <a
              href="#study-mode"
              onClick={closeMenu}
              className="text-black hover:text-[#006251]">
              Study Mode
            </a>

            <button
              onClick={closeMenu}
              className="text-left text-black hover:text-[#006251]">
              Sign In
            </button>

            <button
              onClick={closeMenu}
              className="w-full rounded-lg bg-[#006251] px-5 py-3 font-medium text-white hover:bg-[#004f42]">
              Get Started
            </button>

          </div>
        </div>
      )}

    </nav>


  );
};

export default Navbar;