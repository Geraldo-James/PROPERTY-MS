
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Zap,
  ShieldCheck,
  Users,
  TrendingUp,
  Home,
  House,
  Building2,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Compass,
  Gem,
  Layers3,
} from "lucide-react";

const values = [
  {
    title: "Simplicity",
    description:
      "We make property management straightforward, intuitive and accessible.",
    Icon: Zap,
    number: "01",
  },
  {
    title: "Trust",
    description:
      "We value security, transparency and confidence in every interaction.",
    Icon: ShieldCheck,
    number: "02",
  },
  {
    title: "Accountability",
    description:
      "We believe in responsibility, reliable records and doing things right.",
    Icon: Users,
    number: "03",
  },
  {
    title: "Continuous Growth",
    description:
      "We keep improving our technology to deliver a better experience.",
    Icon: TrendingUp,
    number: "04",
  },
];

const platformFeatures = [
  {
    title: "Property & Unit Management",
    description:
      "Organize your properties, manage units and keep important details in one place.",
    image: "/images/platform-property.jpg",
    Icon: Building2,
    number: "01",
  },
  {
    title: "Tenant & Tenancy Management",
    description:
      "Keep tenant information, tenancy records and lease details organized.",
    image: "/images/platform-tenant.jpg",
    Icon: Users,
    number: "02",
  },
  {
    title: "Payment Tracking",
    description:
      "Keep track of rent payments, payment records and outstanding balances.",
    image: "/images/platform-payment.jpg",
    Icon: CreditCard,
    number: "03",
  },
  {
    title: "Reports & Analytics",
    description:
      "Understand your property operations with useful information and reports.",
    image: "/images/platform-reports.jpg",
    Icon: BarChart3,
    number: "04",
  },
];

function SectionBadge({ children, Icon = Sparkles }) {
  return (
    <span className="group inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-blue-100/60 py-1.5 pl-1.5 pr-5 text-sm font-medium tracking-wide text-blue-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-100 hover:shadow-[0_8px_22px_rgba(37,99,235,0.14)]">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-700">
        <Icon size={21} strokeWidth={2.2} />
      </span>

      <span className="transition-colors duration-300 group-hover:text-blue-700">
        {children}
      </span>
    </span>
  );
}

function ImageFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-linear-to-br from-blue-100 via-white to-sky-100 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName}`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#061C40]/15 via-transparent to-white/10" />
    </div>
  );
}

function SectionHeading({ badge, title, description, Icon = Sparkles }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionBadge Icon={Icon}>{badge}</SectionBadge>

      <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-[#0B1B3A] sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#F8FBFF] text-[#0B1B3A]">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-48 top-40 -z-10 h-125 w-125 rounded-full bg-blue-200/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-[35%] -z-10 h-125 w-125 rounded-full bg-cyan-200/20 blur-[120px]" />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-162.5 max-w-7xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12 lg:py-20">

          {/* Hero content */}
          <div className="relative z-10">
            <SectionBadge Icon={House}>
              Smart property management
            </SectionBadge>

            <h1 className="mt-7 max-w-162.5 text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#0B1B3A] sm:text-5xl lg:text-[4.1rem]">
              Better management.
              <br />
              <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Better experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-137.5 text-base leading-8 text-slate-600 sm:text-lg">
              PropertyMS brings landlords, property managers and tenants
              together through one organized platform. Manage properties,
              units, tenancies and payments with greater clarity and ease.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/properties"
                className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-sky-500 px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(37,99,235,0.32)]"
              >
                Explore PropertyMS
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-[#0B1B3A] transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
              >
                Discover our story
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Hero benefits */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-7">
              {[
                "Organized property records",
                "Simplified payment tracking",
                "Connected management",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-slate-600 sm:text-sm"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-155 lg:ml-auto">
            <div className="absolute inset-8 rounded-full bg-blue-300/30 blur-[90px]" />

            <div className="relative grid grid-cols-[1.05fr_0.95fr] items-center gap-3 sm:gap-5">

              <div className="relative z-10 -rotate-3 overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_25px_70px_rgba(15,64,130,0.16)]">
                <ImageFrame
                  src="/images/about-property.jpg"
                  alt="Modern residential property"
                  className="aspect-[0.92/1] w-full"
                />
              </div>

              <div className="relative z-20 mt-14 rotate-3 overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_25px_70px_rgba(15,64,130,0.16)] sm:mt-20">
                <ImageFrame
                  src="/images/about-manager.jpg"
                  alt="Property management professional"
                  className="aspect-[0.82/1] w-full"
                />
              </div>
            </div>

            {/* Floating platform message */}
            <div className="absolute -bottom-5 left-1/2 z-30 w-[90%] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_15px_45px_rgba(15,64,130,0.13)] backdrop-blur-xl sm:bottom-0 sm:w-[82%] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Home size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#0B1B3A]">
                    Everything in one place
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Properties, tenants and payments.
                  </p>
                </div>

                <CheckCircle2 className="ml-auto shrink-0 text-emerald-500" size={22} />
              </div>
            </div>

            <div className="absolute -left-3 top-[40%] z-0 h-11 w-11 rounded-xl bg-linear-to-br from-blue-400 to-cyan-300 shadow-lg shadow-blue-300/30 sm:-left-5" />
            <div className="absolute -right-2 top-3 z-0 h-9 w-9 rounded-xl bg-linear-to-br from-blue-400 to-cyan-300 shadow-lg shadow-blue-300/30" />
          </div>
        </div>
      </section>

      {/* USER PROBLEM / BENEFITS */}
      <section className="border-y border-blue-100/80 bg-white/75 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionBadge Icon={HeartHandshake}>
                Designed with you in mind
              </SectionBadge>

              <h2 className="mt-5 max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                Property management should feel simpler.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                Managing properties can involve many moving parts. PropertyMS
                helps bring essential information and everyday management
                activities into one connected experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Less scattered information",
                  description:
                    "Keep property, unit and tenant records organized.",
                  Icon: Building2,
                },
                {
                  title: "Clearer payment records",
                  description:
                    "Keep payment information accessible and easier to follow.",
                  Icon: CreditCard,
                },
                {
                  title: "Better organization",
                  description:
                    "Manage tenancy information with more structure.",
                  Icon: Users,
                },
                {
                  title: "Useful insights",
                  description:
                    "Get a clearer view of your property operations.",
                  Icon: BarChart3,
                },
              ].map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-100 bg-[#F8FBFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#0B1B3A]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24"
      >
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[30px] bg-linear-to-br from-blue-200 to-cyan-100" />

          <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_25px_65px_rgba(15,64,130,0.13)]">
            <ImageFrame
              src="/images/about-manager.jpg"
              alt="Property manager working on a laptop"
              className="aspect-[1.35/1] w-full"
            />
          </div>

          <div className="absolute -bottom-7 right-4 rounded-2xl border border-white bg-white p-4 shadow-xl sm:right-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Sparkles size={23} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B1B3A]">
                  Built around people
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Designed for everyday needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 lg:pt-0">
          <SectionBadge Icon={BookOpen}>
            The idea behind PropertyMS
          </SectionBadge>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]">
            A better way to manage the places people call home.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Property management is about more than buildings. It is about
              people, responsibilities, records and the relationships that
              make properties work.
            </p>

            <p>
              Yet managing these responsibilities can become complicated
              when information is scattered across different records and
              processes. Keeping track of units, tenants, tenancies and
              payments should not have to feel overwhelming.
            </p>

            <p>
              That is why we are building PropertyMS: to make everyday
              property management more organized, accessible and efficient
              through technology.
            </p>
          </div>

          <a
            href="#our-mission"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
          >
            What drives us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section
        id="our-mission"
        className="bg-linear-to-br from-[#071D40] via-[#092D5B] to-[#0754A3] py-16 text-white sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionBadge Icon={Compass}>
              Our purpose, our direction
            </SectionBadge>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              What moves us forward
            </h2>

            <p className="mt-4 text-sm leading-7 text-blue-100/80 sm:text-base">
              Every part of PropertyMS is guided by a commitment to making
              property management more meaningful and manageable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="group rounded-[26px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/11 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-cyan-300">
                <Target size={30} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">Our Mission</h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/85 sm:text-base">
                To simplify property management through accessible and
                innovative technology, helping landlords, tenants and
                property teams manage their responsibilities more
                efficiently.
              </p>
            </div>

            <div className="group rounded-[26px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/11 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-300">
                <Eye size={30} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">Our Vision</h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/85 sm:text-base">
                To become a trusted property management platform recognized
                for its simplicity, reliability and ability to create a
                better experience for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          badge="What we believe in"
          title="The principles behind everything we do."
          description="Our values shape the way we build, improve and deliver the PropertyMS experience."
          Icon={Gem}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, Icon, number }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,64,130,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)] sm:p-7"
            >
              <span className="absolute right-6 top-6 text-xs font-bold tracking-widest text-slate-300">
                {number}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-sky-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white">
                <Icon size={27} />
              </div>

              <h3 className="mt-7 text-lg font-bold text-[#0B1B3A]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="relative overflow-hidden border-y border-blue-100/70 bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            badge="Everything working together"
            title="Everything connected. Everything more organized."
            description="Bring the essential parts of property management together with tools designed to make everyday work easier."
            Icon={Layers3}
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map(({ title, description, image, Icon, number }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-[#F9FBFF] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]"
              >
                <div className="relative overflow-hidden bg-linear-to-br from-blue-50 to-sky-100">
                  <ImageFrame
                    src={image}
                    alt={title}
                    className="aspect-[1.35/0.95] w-full"
                    imageClassName="object-contain p-4"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-600 shadow-sm">
                    {number}
                  </span>

                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/90 text-blue-600 shadow-md">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-bold leading-6 text-[#0B1B3A]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION — PRESERVED DESIGN */}
      <section className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 lg:px-10">
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
