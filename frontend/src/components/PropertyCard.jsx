
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  ArrowRight,
  House,
  Building2,
} from "lucide-react";
import { useState } from "react";

const properties = [
  {
    id: 1,
    name: "Modern Family House",
    location: "East Legon, Accra, Ghana",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    price: "GHC 2,500",
    status: "Available",
    image: "",
    type: "Residential",
  },
  {
    id: 2,
    name: "Luxury Apartment",
    location: "Airport Residential, Accra, Ghana",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    price: "GHC 1,800",
    status: "Available",
    image: "/images/luxury-apartment.jpg",
    type: "Residential",
  },
  
{
  id: 3,
  name: "Commercial Space",
  location: "Ring Road, Accra, Ghana",
  bedrooms: 1,
  bathrooms: null,
  area: "1,500 sq ft",
  price: "GHC 850,000",
  status: "Available",
  listingType: "Sale",
  image: "/images/commercial-space.jpg",
  type: "Commercial",
},

  {
    id: 4,
    name: "Beach House",
    location: "Labadi, Accra, Ghana",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    price: "GHC 4,500",
    status: "Available",
    image: "/images/beach-house.jpg",
    type: "Residential",
  },
  {
    id: 5,
    name: "Contemporary Townhouse",
    location: "Adenta, Accra, Ghana",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,000 sq ft",
    price: "GHC 3,200",
    status: "Available",
    image: "/images/townhouse.jpg",
    type: "Residential",
  },
  {
    id: 6,
    name: "Executive Office Suite",
    location: "Cantonments, Accra, Ghana",
    bedrooms: null,
    bathrooms: 2,
    area: "1,100 sq ft",
    price: "GHC 6,500",
    status: "Available",
    image: "/images/office-suite.jpg",
    type: "Commercial",
  },
 
];

function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const isAvailable = property.status === "Available";

  return (
    <article className="group flex h-full min-w-0 flex-col
      overflow-hidden rounded-2xl border border-slate-200/80
      bg-white shadow-[0_5px_20px_rgba(15,35,70,0.055)]
      transition-all duration-300
      hover:-translate-y-1 hover:border-blue-200
      hover:shadow-[0_16px_35px_rgba(15,35,70,0.12)]">

      {/* Image or stable placeholder */}
      <div className="relative aspect-16/10 overflow-hidden
        bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50">

        {property.image && !imageFailed ? (
          <img
            src={property.image}
            alt={property.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center
              justify-center gap-2 text-blue-300"
            aria-label="Property image not available"
          >
            <div className="flex h-14 w-14 items-center
              justify-center rounded-2xl border border-white
              bg-white/80 shadow-sm">
              {property.type === "Commercial" ? (
                <Building2 size={28} strokeWidth={1.5} />
              ) : (
                <House size={28} strokeWidth={1.5} />
              )}
            </div>
            <span className="text-xs font-medium text-slate-500">
              Property image coming soon
            </span>
          </div>
        )}

        {/* Subtle availability badge */}
        <span
          className={`absolute left-3 top-3 inline-flex
            items-center gap-1.5 rounded-full border
            px-3 py-1.5 text-xs font-semibold
            shadow-sm backdrop-blur-md ${
              isAvailable
                ? "border-emerald-200/80 bg-emerald-50/90 text-emerald-800"
                : "border-rose-200/80 bg-rose-50/90 text-rose-800"
            }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAvailable ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
          {property.status}
        </span>

        {/* Favourite button */}
        <button
          type="button"
          aria-label={
            isFavorite
              ? `Remove ${property.name} from favourites`
              : `Add ${property.name} to favourites`
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((previous) => !previous)}
          className="absolute right-3 top-3 flex h-10 w-10
            items-center justify-center rounded-full
            border border-white/80 bg-white/90
            text-slate-500 shadow-sm backdrop-blur-md
            transition-all hover:scale-105 hover:text-rose-500
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500"
        >
          <Heart
            size={19}
            fill={isFavorite ? "currentColor" : "none"}
            className={isFavorite ? "text-rose-500" : ""}
          />
        </button>
      </div>

      {/* Property details */}
      <div className="flex flex-1 flex-col p-5">

        <span className="mb-3 inline-flex w-fit items-center
          gap-1.5 rounded-lg border border-blue-100
          bg-blue-50/80 px-3 py-1.5 text-xs font-semibold
          text-blue-700">
          {property.type === "Commercial" ? (
            <Building2 size={15} />
          ) : (
            <House size={15} />
          )}
          {property.type}
        </span>
<h3 className="line-clamp-2 text-lg font-bold
  leading-6 tracking-tight text-[#0B1B3A]">
  {property.name}
</h3>
        {/* Location */}
        <div className="mt-2 flex min-w-0 items-start gap-2
          text-sm leading-5 text-slate-500">
          <MapPin
            size={17}
            className="mt-0.5 shrink-0 text-[#0891B2]"
          />
          <span className="line-clamp-2">{property.location}</span>
        </div>

        {/* Features */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4
          gap-y-3 border-b border-slate-100 pb-4
          text-sm font-medium text-slate-600">

          {property.bedrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble size={17} className="text-slate-400" />
              {property.bedrooms} beds
            </span>
          )}

          {property.bathrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <Bath size={17} className="text-slate-400" />
              {property.bathrooms} baths
            </span>
          )}

          <span className="inline-flex items-center gap-1.5">
            <Ruler size={16} className="text-slate-400" />
            {property.area}
          </span>
        </div>

        {/* Price and button stay aligned across cards */}
        <div className="mt-auto pt-5">
           <p className="text-xs font-medium text-slate-500">
    {property.listingType === "Sale" ? "Asking price" : "Monthly rent"}
  </p>

  <p className="mt-1 text-xl font-bold tracking-tight
    text-[#0875F5] sm:text-2xl">
    {property.price}
    {property.listingType !== "Sale" && (
      <span className="ml-1 text-sm font-medium text-slate-500">
        / month
      </span>
    )}
  </p>

         
    <button
    type="button"
    disabled={!isAvailable}
    onClick={() => {
        if (isAvailable) {
        window.location.href = `/properties/${property.id}`;
        }
    }}
    className="mt-5 inline-flex w-full items-center
        justify-center gap-2 rounded-xl border
        border-blue-200 bg-white px-4 py-3
        text-sm font-semibold text-[#0875F5]
        transition-all duration-200
        hover:border-[#0875F5] hover:bg-[#0875F5]
        hover:text-white
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500 focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:border-slate-200
        disabled:bg-slate-50 disabled:text-slate-400"
    >
    {isAvailable ? "View Details" : "Currently Rented"}
    {isAvailable && <ArrowRight size={16} />}
    </button>

        </div>
      </div>
    </article>
  );
}


export default function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="relative overflow-hidden bg-linear-to-br
        from-[#F4F9FF] via-white to-[#EAF5FF]
        px-5 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-12"
    >
      <div className="mx-auto w-full max-w-none">

        {/* Section heading */}
        <div className="mb-9 flex flex-col gap-6
          lg:mb-11 lg:flex-row lg:items-end lg:justify-between">

          <div className="min-w-0">

            {/* Refined mini logo and label */}
            <div className="mb-5 inline-flex items-center gap-3
              rounded-4xl border border-blue-100/90
              bg-white/90 py-1.5 pl-1.5 pr-5
              shadow-[0_5px_18px_rgba(37,99,235,0.07)]">

              <span className="flex h-11 w-11 items-center
                justify-center rounded-full
                bg-linear-to-br from-[#0875F5] to-[#06B6D4]
                text-white shadow-[0_5px_12px_rgba(8,117,245,0.22)]">
                <House size={22} strokeWidth={2.1} />
              </span>

              <span className="flex flex-col gap-0.5">
                <span className="text-base font-bold
                  tracking-tight text-[#0B1B3A] sm:text-[15px]">

                  Featured Listings
                </span>
              </span>
            </div>

            <h2 className="max-w-2xl text-xl font-bold
              leading-tight tracking-tight text-[#0B1B3A]
              sm:text-4xl lg:text-[32px]">
             Featured properties
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7
              text-slate-600 sm:text-base">
             Listings from featured agents and developers, refreshed as new ones come in.
            </p>
          </div>

          {/* View all properties */}
          <a
            href="/properties"
            className="group inline-flex min-h-12 w-fit shrink-0
              items-center justify-center gap-3 rounded-xl
              border border-blue-200/90 bg-white px-5 py-3
              text-sm font-bold text-[#0875F5]
              shadow-[0_4px_14px_rgba(37,99,235,0.07)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:border-[#0875F5]
              hover:bg-blue-50 hover:shadow-[0_8px_22px_rgba(37,99,235,0.13)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Browse All Properties
            <span className="flex h-7 w-7 items-center
              justify-center rounded-lg bg-blue-50
              transition-colors group-hover:bg-white">
              <ArrowRight
                size={16}
                className="transition-transform duration-300
                  group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* Three cards per row on desktop */}
        <div className="grid grid-cols-1 items-stretch gap-6
          sm:grid-cols-2 sm:gap-6
          lg:grid-cols-3 lg:gap-7">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Sample data note */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          {/* Listings shown are sample properties for demonstration. */}
        </p>
      </div>
    </section>
  );
}
