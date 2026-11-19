
import {
  ArrowRight,
  Target,
  Eye,
  Zap,
  ShieldCheck,
  Users,
  TrendingUp,
  Home,
  CheckCircle2,
  Building2,
  CreditCard,
  BarChart3,
} from "lucide-react";



// Replace the image placeholders with your own images.
// Suggested image locations:
// /images/about-property.jpg
// /images/about-manager.jpg
// /images/platform-property.jpg
// /images/platform-tenant.jpg
// /images/platform-payment.jpg
// /images/platform-reports.jpg

const values = [
  {
    title: "Simplicity",
    description: "Easy to use, easy to love.",
    Icon: Zap,
    color: "#0785F9",
  },
  {
    title: "Trust",
    description: "Built on security and transparency.",
    Icon: ShieldCheck,
    color: "#0785F9",
  },
  {
    title: "Accountability",
    description: "Taking responsibility in everything we do.",
    Icon: Users,
    color: "#0785F9",
  },
  {
    title: "Continuous Improvement",
    description: "Always innovating for a better experience.",
    Icon: TrendingUp,
    color: "#0785F9",
  },
];

const platformFeatures = [
  {
    title: "Property & Unit Management",
    description: "Manage all your properties and units with ease.",
    Icon: Home,
    image: "/images/platform-property.jpg",
  },
  {
    title: "Tenant & Tenancy Management",
    description: "Keep tenant information organized and up to date.",
    Icon: Users,
    image: "/images/platform-tenant.jpg",
  },
  {
    title: "Payment Tracking",
    description: "Track rent and other payments securely.",
    Icon: CreditCard,
    image: "/images/platform-payment.jpg",
  },
  {
    title: "Reports & Analytics",
    description: "Get insights with powerful reports.",
    Icon: BarChart3,
    image: "/images/platform-reports.jpg",
  },
];

function SectionBadge({ children }) {
  return (
    <span className="inline-flex max-w-full items-center justify-center rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-blue-600 shadow-sm backdrop-blur-sm sm:text-sm">
      {children}
    </span>
  );
}

function ImagePlaceholder({
  className = "",
  image,
  alt = "",
  imageClassName = "",
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-linear-to-br from-blue-100 via-white to-sky-100 ${className}`}
    >
      {/*
        Add your image by setting the image prop.
        Example:
        image="/images/about-property.jpg"
      */}

      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-blue-400">
          <Building2 size={42} strokeWidth={1.3} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Image goes here
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-950/10 via-transparent to-white/10" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-linear-to-br from-[#F8FBFF] via-white to-[#EAF6FF] text-[#0B1B3A]">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-72 -z-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] -z-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      {/* =========================================
          INTRODUCTION / TOP SECTION
      ========================================= */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-24">

        {/* Introduction text */}
        <div className="animate-[fadeUp_0.8s_ease-out_both]">

          <SectionBadge>Get to know PropertyMS</SectionBadge>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#0B1B3A] sm:text-5xl lg:text-[3.65rem]">
            Built to make property management{" "}
            <span className="relative inline-block bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              simpler
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            PropertyMS brings properties, units, tenancies, tenants and
            payments into one organized platform.
          </p>
        </div>

        {/* Introduction image collage */}
        <div className="relative mx-auto w-full max-w-2xl animate-[fadeUp_1s_ease-out_both]">

          <div className="relative grid grid-cols-2 items-center gap-3 sm:gap-5">

            {/* Property image */}
            <div className="relative z-10 -rotate-3 overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_18px_45px_rgba(37,99,235,0.15)] transition-transform duration-500 hover:-rotate-1">
              <ImagePlaceholder
                className="aspect-[1.05/1] w-full"
                image="/images/about-property.jpg"
                alt="Modern residential property"
              />
            </div>

            {/* Property manager image */}
            <div className="relative z-20 mt-10 rotate-3 overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_18px_45px_rgba(37,99,235,0.15)] transition-transform duration-500 hover:rotate-1 sm:mt-14">
              <ImagePlaceholder
                className="aspect-[0.9/1] w-full"
                image="/images/about-manager.jpg"
                alt="Property management professional"
              />
            </div>
          </div>

          {/* Floating decorative squares */}
          <div className="absolute -left-3 top-1/2 z-30 h-9 w-9 rounded-lg bg-linear-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-300/30 sm:-left-5" />
          <div className="absolute -right-1 -top-4 z-30 h-8 w-8 rounded-lg bg-linear-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-300/30 sm:-right-2 sm:-top-5" />

          <div className="pointer-events-none absolute -bottom-8 left-1/4 -z-10 h-24 w-2/3 rounded-full bg-blue-200/40 blur-2xl" />
        </div>
      </section>

      {/* =========================================
          OUR STORY
      ========================================= */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-12">

        {/* Story image */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[28px] bg-linear-to-br from-sky-200 to-blue-100 sm:-left-5 sm:-top-4" />

          <div className="overflow-hidden rounded-[25px] border-[5px] border-white shadow-[0_18px_45px_rgba(37,99,235,0.13)]">
            <ImagePlaceholder
              className="aspect-[1.45/1] w-full"
              image="/images/about-manager.jpg"
              alt="Property manager working on a laptop"
            />
          </div>
        </div>

        {/* Story content */}
        <div className="animate-[fadeUp_0.8s_ease-out_both]">

          <SectionBadge>Why we exist</SectionBadge>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Our Story
          </h2>

          <div className="mt-4 space-y-3 text-base leading-7 text-slate-600">
            <p>
              We understand the challenges of managing properties — from
              keeping track of tenants and payments to maintaining accurate
              records. Too often, landlords and property managers are stuck
              with scattered spreadsheets, missed follow-ups, and complex
              processes.
            </p>

            <p>
              PropertyMS was born to solve these problems and give you a
              smarter, more efficient way to manage your properties.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          MISSION AND VISION
      ========================================= */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-8 sm:px-8 md:grid-cols-2 lg:px-10">

        {/* Mission */}
        <div className="group flex items-start gap-5 rounded-2xl border border-blue-100 bg-white/55 p-5 shadow-[0_5px_20px_rgba(37,99,235,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_14px_35px_rgba(37,99,235,0.10)] sm:gap-7 sm:p-6">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-sky-100 text-blue-500 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Target size={49} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-[#0B1B3A]">
              Our Mission
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
              To simplify property management through innovative technology,
              helping landlords, tenants and teams work more efficiently.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="group flex items-start gap-5 rounded-2xl border border-blue-100 bg-white/55 p-5 shadow-[0_5px_20px_rgba(37,99,235,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_14px_35px_rgba(37,99,235,0.10)] sm:gap-7 sm:p-6">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-sky-100 text-blue-500 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Eye size={49} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-[#0B1B3A]">
              Our Vision
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
              To become the leading property management platform known for
              reliability, ease of use and exceptional support.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          OUR VALUES
      ========================================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">

        <div className="text-center">
          <SectionBadge>What guides us</SectionBadge>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Our Values
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {values.map(({ title, description, Icon, color }, index) => (
            <div
              key={title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/65 px-5 py-7 text-center shadow-[0_5px_20px_rgba(37,99,235,0.04)] backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_both] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-[0_15px_35px_rgba(37,99,235,0.12)] sm:py-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                <Icon
                  size={31}
                  strokeWidth={2.4}
                  style={{ color }}
                />
              </div>

              <h3 className="mt-4 text-base font-bold text-[#0B1B3A]">
                {title}
              </h3>

              <p className="mt-2 max-w-57.5 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          OUR PLATFORM
      ========================================= */}
      <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Section background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-blue-50/40 via-transparent to-sky-100/70" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full border border-blue-200/40" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-80 w-80 rounded-full border border-blue-200/30" />

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <SectionBadge>Our platform</SectionBadge>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0B1B3A] sm:text-3xl lg:text-4xl">
              One platform, connected experience
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Everything you need to manage your properties efficiently,
              in one place.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {platformFeatures.map(({ title, description, image }, index) => (
              <div
                key={title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white/70 p-3 shadow-[0_6px_20px_rgba(37,99,235,0.05)] backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_both] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_38px_rgba(37,99,235,0.12)]"
              >

                {/* Platform image container */}
                <div className="relative mx-auto w-full overflow-hidden rounded-xl bg-linear-to-br from-blue-50 to-sky-100">
                  <ImagePlaceholder
                    className="aspect-[1.6/0.85] w-full"
                    image={null}
                    alt={title}
                  />

                  {/*
                    Add the appropriate image for each platform card here.
                    Example:
                    <img src={image} alt={title} className="..." />
                  */}
                </div>

                <div className="px-1 pb-2 pt-4 text-center">
                  <h3 className="text-sm font-bold leading-5 text-[#0B1B3A] sm:text-base">
                    {title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CALL TO ACTION
      ========================================= */}
      <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-10">

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[25px] bg-linear-to-r from-[#031A3D] via-[#06366D] to-[#0875E8] px-6 py-9 text-white shadow-[0_18px_45px_rgba(3,26,61,0.16)] sm:rounded-[30px] sm:px-9 sm:py-11 lg:flex-row lg:items-center lg:px-8 lg:py-10">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-12 -top-28 h-72 w-72 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute -right-5 -top-20 h-64 w-64 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-blue-500/10 to-transparent" />

          {/* CTA text */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Let’s make property management work better
            </h2>

            <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
              Join PropertyMS today and experience a smarter way to manage
              your properties.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="/features"
            className="group relative z-10 inline-flex shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore PropertyMS
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Decorative logo icon */}
          <div className="pointer-events-none absolute -bottom-12 -right-3 hidden h-40 w-40 items-center justify-center rounded-full border border-blue-300/20 text-blue-400/30 lg:flex">
            <Home size={105} strokeWidth={1.2} />
          </div>
        </div>
      </section>

    </main>
  );
}
