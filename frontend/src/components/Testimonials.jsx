
import { useRef, useState } from "react";
import {
  Star,
  Quote,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Landlord",
    initials: "MJ",
    image: "../images/headshot1.png",
    rating: 5,
    quote:
      "PropertyMS has made managing my properties easier. I can organize tenant information and keep track of payments in one place. but to talk of it",
  },
  {
    id: 2,
    name: "Sarah Davis",
    role: "Tenant",
    initials: "SD",
    image: "/images/headshot2.png",
    rating: 5,
    quote:
      "I appreciate having a more organized rental experience. It is easier to keep track of important rental information.",
  },
  {
    id: 3,
    name: "David Mensah",
    role: "Property Manager",
    initials: "DM",
    image: "/images/headshot3.png",
    rating: 5,
    quote:
      "Having property details, tenant records, and payment information organized in one place makes my daily work easier.",
  },

  {
    id: 4,
    name: "Ama Boateng",
    role: "Landlord",
    initials: "AB",
    image: "/images/headshot4.png",
    rating: 5,
    quote:
      "PropertyMS helps me keep my rental information organized and makes it easier to manage my properties.",
  },
  {
    id: 5,
    name: "Kwame Asare",
    role: "Tenant",
    initials: "KA",
    image: "/images/headshot5.png",
    rating: 5,
    quote:
      "Having my rental details and payment information organized in one place makes managing my tenancy easier.",
  },
];

function TestimonialCard({ testimonial }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className="flex  h-full min-w-0 flex-col rounded-2xl
      border border-slate-200/80 bg-white p-5
      shadow-[0_8px_28px_rgba(15,35,70,0.06)]
      transition-all duration-300
      hover:-translate-y-1 hover:border-blue-200
      hover:shadow-[0_16px_35px_rgba(15,35,70,0.10)]
      sm:p-6"
    >
      {/* Customer profile with round image */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-12  w-12 shrink-0 items-center
          justify-center overflow-hidden rounded-full
          border-2 border-white bg-linear-to-br
          from-blue-100 to-cyan-100 text-sm font-bold
          text-blue-700 shadow-sm ring-2 ring-blue-50"
        >
          {testimonial.image && !imageFailed ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <span>{testimonial.initials}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className="truncate text-sm font-bold
            text-[#0B1B3A] sm:text-base"
          >
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-xs text-slate-500">
            {testimonial.role}
          </p>

          <div
            className="mt-1 flex items-center gap-0.5"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={13}
                aria-hidden="true"
                className={
                  index < testimonial.rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-200"
                }
              />
            ))}

            <span className="ml-1 text-xs font-semibold text-slate-600">
              {testimonial.rating}.0
            </span>
          </div>
        </div>

        <Quote
          size={28}
          aria-hidden="true"
          className="shrink-0 text-blue-100"
        />
      </div>

      {/* Customer feedback */}
      <blockquote
        className="mt-5 flex-1 text-sm
        leading-7 text-slate-600"
      >
        “{testimonial.quote}”
      </blockquote>

      {/* Footer */}
      <div
        className="mt-5 flex items-center gap-2
        border-t border-slate-100 pt-4"
      >
        <BadgeCheck
          size={17}
          aria-hidden="true"
          className="shrink-0 text-emerald-600"
        />

        <span className="text-xs font-medium text-slate-500">
          Customer testimonial
        </span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  const scrollToTestimonial = (index) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];

    if (!viewport || !card) return;

    viewport.scrollTo({
      left: card.offsetLeft - viewport.offsetLeft,
      behavior: "smooth",
    });

    setActive(index);
  };

  const previous = () => {
    const index =
      (active - 1 + testimonials.length) % testimonials.length;

    scrollToTestimonial(index);
  };

  const next = () => {
    const index = (active + 1) % testimonials.length;

    scrollToTestimonial(index);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const viewportCenter =
      viewport.scrollLeft + viewport.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActive(closestIndex);
  };

  return (
    <section
      id="testimonials"
      className="bg-linear-to-br from-[#F4F9FF]
        via-white to-[#EAF5FF] px-5 py-16
        sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7.3xl">
        {/* Section heading */}
        <div
          className="mb-10 flex flex-col gap-5
          sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2
              rounded-full border border-blue-100
              bg-white px-4 py-2 text-xs font-semibold
              text-blue-700 shadow-sm"
            >
              <Quote size={15} aria-hidden="true" />
              What Our Clients Say
            </span>

            <h2
              className="mt-4 text-3xl font-bold
              tracking-tight text-[#0B1B3A]
              sm:text-4xl"
            >
              Trusted by Landlords{" "}
              <span className="text-[#0875F5]">&amp; Tenants</span>
            </h2>

            <p
              className="mt-3 max-w-xl text-sm
              leading-7 text-slate-600 sm:text-base"
            >
              Discover how PropertyMS helps simplify property management and
              rental experiences.
            </p>
          </div>
        </div>

        {/* Glass carousel container */}
        <div
          className="relative rounded-[28px] border
          border-blue-100/80 bg-white/65 p-3
          shadow-[0_20px_60px_rgba(37,99,235,0.12)]
          backdrop-blur-xl sm:rounded-4xl sm:p-5 md:p-6"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0
            overflow-hidden rounded-[inherit]"
          >
            <div
              className="absolute -left-16 -top-20
              h-48 w-48 rounded-full bg-blue-300/15 blur-3xl"
            />

            <div
              className="absolute -bottom-20 right-0
              h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl"
            />
          </div>

          {/* Sliding viewport */}
          <div
            ref={viewportRef}
            onScroll={handleScroll}
            className="relative flex snap-x snap-mandatory
            gap-4 overflow-x-auto overscroll-x-contain
            scroll-smooth px-1 pb-2 pt-2
            scrollbar-none
            [&::-webkit-scrollbar]:hidden
            md:gap-5"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="min-w-0 shrink-0 snap-start
                flex-[0_0_100%] sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(33.333%-14px)]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Previous slider: left side */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20
            flex h-10 w-10 -translate-x-1/2
            -translate-y-1/2 items-center justify-center
            rounded-full border border-blue-100
            bg-white/95 text-[#0B1B3A]
            shadow-[0_8px_24px_rgba(37,99,235,0.16)]
            transition-all duration-200
            hover:scale-110 hover:bg-blue-600 hover:text-white
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500 focus-visible:ring-offset-2
            sm:h-12 sm:w-12"
          >
            <ChevronLeft size={23} strokeWidth={2.5} aria-hidden="true" />
          </button>

          {/* Next slider: right side */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20
            flex h-10 w-10 translate-x-1/2
            -translate-y-1/2 items-center justify-center
            rounded-full border border-blue-100
            bg-white/95 text-[#0B1B3A]
            shadow-[0_8px_24px_rgba(37,99,235,0.16)]
            transition-all duration-200
            hover:scale-110 hover:bg-blue-600 hover:text-white
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500 focus-visible:ring-offset-2
            sm:h-12 sm:w-12"
          >
            <ChevronRight size={23} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => scrollToTestimonial(index)}
              className={`rounded-full transition-all duration-300
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                active === index
                  ? "h-3.5 w-3.5 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                  : "h-3 w-3 bg-slate-200 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
