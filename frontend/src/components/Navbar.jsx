
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserCircle,
  ArrowRight,
  Sun,
  Menu,
  X,
  ChevronRight,
  Home,
  Info,
  Layers,
  Building2,
  CreditCard,
  Phone,
} from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Features", icon: Layers, href: "/features" },
    { name: "Properties", icon: Building2, href: "/properties" },
    { name: "Pricing", icon: CreditCard, href: "/pricing" },
    { name: "Contact", icon: Phone, href: "/contact" },
  ];

  return (
    <nav className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
      {/* Logo */}
      <Link to="/" className="flex shrink-0 items-center gap-1">
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
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-1 font-medium text-slate-700 min-[1366px]:flex xl:gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="group relative flex items-center whitespace-nowrap rounded-2xl px-3 py-3 text-base font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600 xl:px-4"
          >
            <span className="relative inline-block">
              {link.name}
              <span className="absolute -bottom-1.25 left-0 h-1 w-full origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </span>
          </Link>
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

      {/* Mobile Background Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-950/30 transition-opacity duration-300 ease-in-out min-[1366px]:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sliding Mobile Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-dvh w-96 max-w-[85vw] flex-col overflow-y-auto border-l border-slate-200 bg-white px-5 py-6 shadow-2xl transition-transform duration-300 ease-in-out min-[1366px]:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-1"
          >
            <img
              src="../Gradient_Blue_House_Logo_with_Swoosh.png"
              alt="Property-Image Logo"
              className="h-10 w-12 object-contain"
            />

            <p className="whitespace-nowrap text-xl font-extrabold text-black">
              <span className="text-[#0B1B3A]">Property</span>
              <span className="bg-linear-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                MS
              </span>
            </p>
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer rounded-lg p-2 text-[#0B1B3A] transition-colors hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="mt-6 flex flex-col gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base font-medium text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="text-slate-500 transition-colors duration-300 group-hover:text-blue-600"
                  />
                  {link.name}
                </span>

                <ChevronRight
                  size={19}
                  strokeWidth={1.8}
                  className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </Link>
            );
          })}
        </div>

        {/* Sidebar Actions */}
        <div className="mt-auto flex flex-col gap-3 border-t border-slate-200 pt-5">
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
    </nav>
  );
}
