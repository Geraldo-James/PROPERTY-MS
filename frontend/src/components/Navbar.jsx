
import { useState } from "react";
import {
  UserCircle,
  ArrowRight,
  Sun,
  Menu,
  X,
} from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Features",
    "Properties",
    "Pricing",
    "Contact",
  ];

  return (
    <nav className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
      {/* Logo */}
      <div className="flex shrink-0 items-center gap-1">
        <img
          src="../Gradient_Blue_House_Logo_with_Swoosh.png"
          alt="Property-Image Logo"
          className="h-10 w-12 object-contain sm:h-12 sm:w-14"
        />

        <p className="whitespace-nowrap text-xl font-extrabold text-black sm:text-2xl">
          <span className="text-[#0B1B3A]">Property</span>
          <span className="bg-linear-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            MS
          </span>
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-1 font-medium text-slate-700 min-[1366px]:flex xl:gap-2">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="group relative flex items-center whitespace-nowrap rounded-2xl px-3 py-3 text-base font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600 xl:px-4"
          >
            {link}
            <span className="absolute bottom-1.5 left-1/2 h-1 w-8 -translate-x-1/2 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden shrink-0 items-center gap-3 min-[1366px]:flex xl:gap-4">
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer text-[#0B1B3A] transition-colors hover:text-blue-600"
            aria-label="Toggle theme"
          >
            <Sun size={22} strokeWidth={1.7} />
          </button>

          <span className="h-8 w-0.5 bg-slate-200"></span>
        </div>

        <button className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-4xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-[#0B1B3A] hover:bg-slate-50 xl:px-5">
          <UserCircle size={20} color="#0B1B3A" />
          Login
        </button>

        <button className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-4xl bg-linear-to-r from-blue-600 to-sky-400 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-sky-500 xl:px-5">
          Get started
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-3 min-[1366px]:hidden">
        <button
          className="cursor-pointer text-[#0B1B3A] hover:text-blue-600"
          aria-label="Toggle theme"
        >
          <Sun size={21} strokeWidth={1.7} />
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer rounded-lg p-2 text-[#0B1B3A] transition-colors hover:bg-blue-50"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-slate-200 bg-white px-5 py-4 shadow-lg min-[1366px]:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-4xl border border-slate-300 px-5 py-3 font-medium text-[#0B1B3A] hover:bg-slate-50">
              <UserCircle size={20} />
              Login
            </button>

            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-4xl bg-linear-to-r from-blue-600 to-sky-400 px-5 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-sky-500">
              Get started
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
