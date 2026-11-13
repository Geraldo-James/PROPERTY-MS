import Hero_Image from  "../assets/Twilight_Luxury_Villa_and_Reflective_Driveway.png"
import {ChevronDown,ShieldCheck, House,ArrowRight,Play,Building2,Users,ReceiptText,ChartNoAxesCombined,} from "lucide-react";

export function Hero(){

    return (
      <div>
        <section
          className="relative min-h-162.5 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Hero_Image})` }}
        >
          {/* Over Lay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#031735] via-[#031735]/80 to-transparent">
            {" "}
          </div>
          {/* Hero content */}
          <div className="relative z-10 flex min-h-162.5 items-center px-8 py-16 lg:px-16">
            <div className="max-w-3xl text-white animate-[heroFloatUp_1s_ease-out_both]">
              <span className="inline-flex items-center gap-3 rounded-full bg-blue-600/40 py-2 pl-2 pr-5 font-medium text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <House size={24} strokeWidth={2.5} />
                </span>
                Smart Property Management
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Manage Your Properties
                <br />
                Smarter, Easier &{" "}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                    Better
                  </span>
                  <svg
                    className="absolute -bottom-3 left-[-2%] h-3.5 w-[104%] overflow-visible"
                    viewBox="0 0 220 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="underlinelinear"
                        x1="0"
                        y1="0"
                        x2="220"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#00BFFF" />
                        <stop offset="48%" stopColor="#08C8FF" />
                        <stop offset="82%" stopColor="#08BDF5" />
                        <stop offset="100%" stopColor="#52D8FF" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M2 15
       C 32 9, 66 3, 103 2
       C 143 0.8, 177 3, 207 6.5
       C 213 7.2, 217 8, 218 8.5
       C 215 8.2, 210 7.6, 204 7
       C 172 4.5, 140 3.7, 105 5.5
       C 68 5.5, 34 11.5, 2 15
       Z"
                      fill="url(#underlinelinear)"
                      style={{ filter: "drop-shadow(0 0 1px #08BDF5)" }}
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                PropertyMS is a modern and reliable property management system
                designed to help landlords, tenants and staff manage properties,
                units, tenancies and payments with ease.
              </p>

              {/* Place your existing hero buttons here */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-sky-500 px-7 py-4 cursor-pointer  font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  Get Started
                  <ArrowRight size={20} />
                </button>

                <button className="inline-flex items-center gap-3 rounded-full border border-[#42D4FF] bg-white/10 px-7 py-3 cursor-pointer font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600">
                    <Play size={16} fill="currentColor" />
                  </span>
                  Watch Demo
                </button>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {/* Overlapping portrait images */}
                  <div className="flex items-center -space-x-2">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-3 border-white relative z-40 shadow-sm">
                      <img
                        src="/images/potrait1.png"
                        alt="Property manager"
                        className="h-full w-full scale-200 object-contain object-[center_90%]"
                      />
                    </div>

                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-3 border-white relative z-40 shadow-sm">
                      <img
                        src="/images/potrait2.png"
                        alt="Property manager"
                        className="h-full w-full scale-200 object-contain object-[center_50%] "
                      />
                    </div>

                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-3 border-white relative z-40 shadow-sm">
                      <img
                        src="/images/potrait3.png"
                        alt="Property manager"
                        className="h-full w-full scale-250 object-contain object-[center_58%]"
                      />
                    </div>

                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-3 border-white relative z-40 shadow-sm">
                      <img
                        src="/images/potrait4.png"
                        alt="Property manager"
                        className="h-full w-full scale-200 object-contain object-[center_50%] overflow-hidden"
                      />
                    </div>
                  </div>

                  {/* Trust rating and text */}
                  <div>
                    <div
                      className="flex items-center gap-1 text-xl text-amber-400"
                      aria-label="5 out of 5 stars"
                    >
                      <span>★★★★★</span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-white">
                      Trusted by 500+ Property Managers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll-down button */}
          <a
            href="#features"
            aria-label="Scroll down to features"
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white transition-colors duration-300 hover:text-sky-300"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={28} className="animate-bounce" />
          </a>
        </section>

        {/* Feature summary box */}
      </div>
    );






}