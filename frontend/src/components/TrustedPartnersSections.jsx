import { useState , useRef } from "react";
import { ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    name: "Luxe Homes",
    subtitle: "PROPERTY SOLUTIONS",
    logo: "/images/luxe-homes-pv.png",
    accent: "#38A5FF",
    corner: "from-blue-200/80",
  },
  {
    name: "GreenVista",
    subtitle: "PROPERTIES",
    logo: "/images/greenvista-pv.png",
    accent: "#65B82E",
    corner: "from-green-200/80",
  },
  {
    name: "Skyline",
    subtitle: "REAL ESTATE",
    logo: "/images/skyline-pv.png",
    accent: "#168BFA",
    corner: "from-sky-200/80",
  },
  {
    name: "PrimeStay",
    subtitle: "PROPERTY MANAGEMENT",
    logo: "/images/primestay-pv.png",
    accent: "#12BCEB",
    corner: "from-cyan-200/80",
  },
  {
    name: "HomeBridge",
    subtitle: "REALTY GROUP",
    logo: "/images/homebridge-pv.png",
    accent: "#7952FF",
    corner: "from-violet-200/80",
  },
];

export default function TrustedPartnersSection() {
  const [active, setActive] = useState(0);
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);

  
const scrollToPartner = (index) => {
  const safeIndex = (index + partners.length) % partners.length;
  const target = cardRefs.current[safeIndex];
  const viewport = viewportRef.current;

  if (!target || !viewport) return;

  viewport.scrollTo({
    left: target.offsetLeft - viewport.offsetLeft,
    behavior: "smooth",
  });

  setActive(safeIndex);
};

const previous = () => scrollToPartner(active - 1);
const next = () => scrollToPartner(active + 1);

const handleScroll = () => {
  const viewport = viewportRef.current;
  if (!viewport) return;

  const viewportLeft = viewport.getBoundingClientRect().left;
  let closestIndex = 0;
  let closestDistance = Infinity;

  cardRefs.current.forEach((card, index) => {
    if (!card) return;

    const distance = Math.abs(card.getBoundingClientRect().left - viewportLeft);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  setActive(closestIndex);
};

  

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-10">
      {/* Soft decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-16 w-64 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

      {/* Main two-column layout */}

      <div className="relative mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.92fr)] lg:gap-4 xl:gap-5">
        {/* LEFT: Text content */}
        <div className="relative z-10 flex min-w-0 flex-col items-start justify-center">
          {/* Trust badge */}
          <div className="group mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100/90 bg-white/90 py-1.5 pl-1.5 pr-3 shadow-[0_4px_18px_rgba(37,99,235,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(37,99,235,0.13)] sm:gap-2.5 sm:pr-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-blue-600 via-blue-600 to-cyan-400 text-white shadow-[0_4px_12px_rgba(37,99,235,0.28)] ring-4 ring-blue-50 transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck size={23} strokeWidth={2} />
            </span>
            <span className="text-sm font-semibold tracking-[-0.01em] text-[#0B1B3A] sm:text-base">
              Trusted by Industry Leaders
            </span>

            <span className="ml-1 hidden h-px w-8 bg-linear-to-r from-blue-500 to-cyan-400 sm:block" />
          </div>

          {/* Heading */}
          <h2 className="max-w-xl text-2xl font-extrabold leading-[1.1] tracking-[-0.045em] text-[#0B1B3A] sm:text-4xl xl:text-[3.25rem]">
            Partnered with
            <span className="mt-1 block bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Trusted Brands
            </span>
          </h2>

          {/* Supporting text */}
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            We work with leading property organizations and technology partners
            to deliver a secure and reliable property management
            experience.
          </p>
        </div>

        {/* RIGHT: Partner carousel */}
        <div className="relative min-w-0 w-full">
          {/* Glass container */}
          <div className="relative rounded-[28px] border border-blue-100/80 bg-white/65 p-3 shadow-[0_20px_60px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:rounded-4xl  sm:p-4 md:p-5">
            {/* Container glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-blue-300/15 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
            </div>

            {/* Sliding viewport */}

            <div
              ref={viewportRef}
              onScroll={handleScroll}
              className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden sm:gap-3 lg:overflow-x-hidden lg:snap-none"
            >
              {partners.map((card, index) => (
                <article
                  key={card.name}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="group relative flex h-47.5 min-w-0 shrink-0 snap-start flex-[0_0_100%] flex-col items-center justify-center overflow-hidden rounded-[22px] border border-white/90 bg-linear-to-br from-white via-white/95 to-slate-50/90 px-3 py-4 text-center shadow-[0_8px_24px_rgba(37,99,235,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_32px_rgba(37,99,235,0.14)] sm:h-47.5 sm:flex-[0_0_calc(50%-6px)] sm:px-3 lg:flex-[0_0_calc(33.333%-8px)] xl:flex-[0_0_calc(20%-10px)]"
                >
                  {/* Decorative top corner */}
                  <div
                    className={`pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-linear-to-br ${card.corner} to-transparent opacity-80 transition-transform duration-500 group-hover:scale-125`}
                  />

                  {/* Decorative bottom corner */}
                  <div
                    className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full opacity-70 transition-transform duration-500 group-hover:scale-125"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${card.accent}35)`,
                    }}
                  />

                  {/* Partner logo */}
                  <div className="relative z-10 flex h-20 w-full items-center justify-center sm:h-22.5">
                    <img
                      src={card.logo}
                      alt={`${card.name} logo`}
                      className="max-h-full max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Brand name */}

                  {/* Brand name */}
                  <h3 className="relative z-10 mt-2 w-full whitespace-nowrap text-center text-[20px] font-extrabold leading-[1.3] tracking-[-0.035em] sm:text-xl xl:text-[22px]">
                    {card.name === "GreenVista" ? (
                      <>
                        <span className="text-[#087A50]">Green</span>
                        <span className="text-[#0B1B3A]">Vista</span>
                      </>
                    ) : card.name === "Luxe Homes" ? (
                      <span className="text-[#0B1B3A]">Luxe Homes </span>
                    ) : card.name === "Skyline" ? (
                      <span className="text-[#0B1B3A]">Skyline</span>
                    ) : card.name === "PrimeStay" ? (
                      <>
                        <span className="text-[#0B1B3A]">Prime</span>
                        <span className="text-[#168BFA]">Stay</span>
                      </>
                    ) : card.name === "HomeBridge" ? (
                      <span className="text-[#0B1B3A]">HomeBridge</span>
                    ) : (
                      card.name
                    )}
                  </h3>

                  {/* Brand description */}
                  <p className="relative z-10 mt-2 min-h-7 max-w-full text-[9px] font-bold leading-normal tracking-[0.14em] text-slate-500 sm:text-[10px]">
                    {card.subtitle}
                  </p>

                  {/* Brand accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 left-1/2 z-10 h-1 w-12 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{
                      backgroundColor: card.accent,
                      boxShadow: `0 0 12px ${card.accent}45`,
                    }}
                  />
                </article>
              ))}
            </div>

            {/* Previous button */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous partner slide"
              className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white/95 text-[#0B1B3A] shadow-[0_8px_24px_rgba(37,99,235,0.16)] transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronLeft size={23} strokeWidth={2.5} />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={next}
              aria-label="Next partner slide"
              className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white/95 text-[#0B1B3A] shadow-[0_8px_24px_rgba(37,99,235,0.16)] transition-all duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronRight size={23} strokeWidth={2.5} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {partners.map((partner, index) => (
              <button
                key={partner.name}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => scrollToPartner(index)}
                className={`rounded-full transition-all duration-300 ${
                  active === index
                    ? "h-3.5 w-3.5 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                    : "h-3 w-3 bg-slate-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
