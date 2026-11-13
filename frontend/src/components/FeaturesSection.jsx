
import {
  ArrowRight,
  House,
  Users,
  WalletCards,
  ChartNoAxesCombined,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    title: "Property Management",
    description: "Easily manage multiple properties and units.",
    Icon: House,
    color: "#0875F5",
  },
  {
    title: "Tenant Management",
    description: "Keep tenant information, leases and communication organized.",
    Icon: Users,
    color: "#8B5CF6",
  },
  {
    title: "Payment Tracking",
    description: "Track rent and other payments in real time.",
    Icon: WalletCards,
    color: "#10B981",
  },
  {
    title: "Reports & Analytics",
    description: "Understand performance through clear reports.",
    Icon: ChartNoAxesCombined,
    color: "#06B6D4",
  },
  {
    title: "Secure & Reliable",
    description: "Protect your data with controlled access.",
    Icon: ShieldCheck,
    color: "#8B5CF6",
  },
  {
    title: "Multi-User Access",
    description: "Give each team member appropriate permissions.",
    Icon: UserRoundCheck,
    color: "#0875F5",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative isolate w-full overflow-hidden bg-linear-to-br from-[#F8FBFF] via-[#F1F8FF] to-[#EAF8FF] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20 xl:px-12"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Three-column desktop layout */}
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-8 lg:grid-cols-[0.78fr_1.3fr_1.05fr] lg:gap-6 xl:gap-9">
        {/* LEFT: Heading and CTA */}
        <div className="min-w-0">
          {/* Section badge */}
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100/80 bg-linear-to-r from-[#EFF6FF] via-[#F8FBFF] to-white py-1 pl-1 pr-3 shadow-[0_4px_14px_rgba(37,99,235,0.07)] sm:mb-5 sm:gap-2.5 sm:pr-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-400 text-white shadow-[0_3px_9px_rgba(37,99,235,0.22)] ring-2 ring-white/80 sm:h-8 sm:w-8">
              <ShieldCheck size={16} strokeWidth={2.2} />
            </span>

            <span className="whitespace-nowrap text-[11px] font-semibold tracking-[-0.01em] text-[#174477]  sm:text-[15px]">
              Why Choose PropertyMS
            </span>
          </div>

          <h2 className="max-w-md text-[1.8rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0B1B3A] sm:text-3xl lg:text-[2rem] xl:text-[2.35rem]">
            Everything You Need in{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              One Place
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
            From tenant management to payment tracking, manage your property
            business efficiently from one simple platform.
          </p>

          <a
            href="/features"
            className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_20px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_11px_26px_rgba(37,99,235,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Explore Features
            <ArrowRight size={17} />
          </a>
        </div>

        {/* MIDDLE: Six feature items */}
        <div className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-2 lg:gap-x-4 xl:gap-x-6">
          {features.map(({ title, description, Icon, color }) => (
            <div key={title} className="group flex min-w-0 items-start gap-3">
              {/* Refined icon box */}
              <div
                className="relative flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl border border-blue-100/80
                  bg-linear-to-br from-white via-white to-blue-50/60
                  shadow-[0_3px_12px_rgba(37,99,235,0.07)]
                  transition-all duration-300
                  group-hover:-translate-y-0.5
                  group-hover:border-blue-200
                  group-hover:shadow-[0_6px_18px_rgba(37,99,235,0.12)]
                  sm:h-12 sm:w-12 sm:rounded-[14px]"
              >
                <Icon
                  size={21}
                  strokeWidth={2.2}
                  style={{ color }}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Feature text */}
              <div className="min-w-0 pt-0.5">
                <h3 className="text-[13px] font-bold leading-5 text-[#174477] sm:text-sm">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-[1.65] text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EXTREME RIGHT: Dashboard image */}
        <div className="relative mx-auto w-full min-w-0 max-w-120 md:col-span-2 lg:col-span-1 lg:max-w-none">
          {/* Soft glow behind the image */}
          <div className="pointer-events-none absolute inset-6 -z-10 rounded-full bg-blue-200/50 blur-3xl" />

          <div className="relative overflow-hidden rounded-[22px] border border-white/90 bg-white/70 p-2 shadow-[0_18px_48px_rgba(37,99,235,0.14)] backdrop-blur-xl sm:rounded-[28px] sm:p-3">
            <img
              src="/images/propertyms-dashboard.png"
              alt="PropertyMS dashboard preview showing property and payment information"
              loading="lazy"
              className="relative block rounded-4xl h-auto w-full scale-105 object-contain drop-shadow-[0_20px_30px_rgba(37,99,235,0.16)] sm:scale-110 lg:scale-110"
            />
          </div>

          {/* Floating security badge */}
          <div
            className="
    absolute -bottom-2.5 right-2 z-20
    flex max-w-[calc(100%-1rem)] items-center gap-2.5
    rounded-2xl border border-white/80
    bg-white/95 px-3 py-2.5
    shadow-[0_8px_24px_rgba(37,99,235,0.12)]
    backdrop-blur-md
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)]
   sm:-bottom-3 sm:right-3 sm:gap-3 sm:px-4 sm:py-3
    lg:-right-3 lg:-bottom-3.5
 
  "
          >
            {/* Shield icon */}
            <span
              className="
      flex h-10 w-10 shrink-0 items-center justify-center
      rounded-xl border border-blue-100/80
      bg-blue-50 text-blue-600
      sm:h-11 sm:w-11
    "
            >
              <ShieldCheck size={21} strokeWidth={2} aria-hidden="true" />
            </span>

            {/* Badge text */}
            <div className="min-w-0">
              <p className="text-xs font-bold leading-5 text-[#0B1B3A] sm:text-sm">
                Secure &amp; reliable
              </p>

              <p className="text-[11px] leading-4 text-slate-500 sm:text-xs">
                Your properties, organized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

