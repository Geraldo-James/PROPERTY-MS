import { UserCircle, ArrowRight, Sun } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between px-14 py-4 ">
      <div className="flex gap-1 items-center">
        <img
          src="../Gradient_Blue_House_Logo_with_Swoosh.png"
          alt="Property-Image Logo"
          className="h-12 w-14 object-fit"
        />
        <p className="font-extrabold font text-black text-2xl">
          <span className="text-[#0B1B3A]">Property</span>
          <span className="bg-linear-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            MS
          </span>
        </p>
      </div>

      <div className="flex gap-2 font-medium text-slate-700 items-center ">
        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          Home
          <span className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>

        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          About
          <span className="absolute bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>
        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          Features
          <span className="absolute bottom-2 left-1/2 h-1 w-16 -translate-x-8 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>
        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          Properties
          <span className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-10 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>
        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          Pricing
          <span className="absolute bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>
        <a
          href="#"
          className="group relative flex items-center rounded-2xl px-6 py-4 font-medium text-slate-900 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
        >
          Contact
          <span className="absolute bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </a>
      </div>

      <div className="flex gap-3">
        <div className="flex justify-between gap-2 items-center">
          <button
            className="cursor-pointer text-[#0B1B3A] hover:text-blue-600"
            aria-label="Toggle theme"
          >
            <Sun size={22} strokeWidth={1.7} />
          </button>
          <span className="h-8 w-0.5 bg-slate-200"></span>
        </div>
        <div className="flex justify-evenly gap-4">
          <button className="flex gap-1.5 items-center rounded-4xl border border-slate-300 px-6 py-2.5 font-medium cursor-pointer  text-[#0B1B3A] hover:bg-slate-50">
            <UserCircle size="20" color="#0B1B3A" />
            Login
          </button>

          <button className="flex items-center gap-1.5 rounded-4xl bg-linear-to-r from-blue-600 to-sky-400 px-5 py-2.5 font-semibold text-white hover:from-blue-700 cursor-pointer hover:to-sky-500 transition-all">
            Get started
            <ArrowRight size="18" />
          </button>
        </div>
      </div>
    </nav>
  );
}
