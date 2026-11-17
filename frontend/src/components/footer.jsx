
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  House,
  Users,
  CreditCard,
  BarChart3,
  ShieldCheck,
  Headset,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ChevronRight,
  MoveUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Properties", href: "#properties" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Property Management", icon: House },
    { name: "Tenant Management", icon: Users },
    { name: "Payment Tracking", icon: CreditCard },
    { name: "Reports & Analytics", icon: BarChart3 },
    { name: "Secure Management", icon: ShieldCheck },
  ];

  const supportLinks = [
    { name: "Help & Support", href: "#contact" },
    { name: "FAQs", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#061A38] text-white">

      {/* Decorative background effects */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:px-8 lg:px-12">

        {/* Top CTA Section */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-blue-600 to-sky-500 px-7 py-10 shadow-2xl shadow-blue-950/20 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">

          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10"></div>
          <div className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/10"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <Building2 size={16} />
              Your Property Management Partner
            </span>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Ready to Manage Your Properties Smarter?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-50 sm:text-base">
              Bring your properties, tenants, and payments together in one
              organised platform. Experience a smarter way to manage.
            </p>
          </div>

          <div className="relative z-10 mt-7 flex shrink-0 flex-wrap gap-3 lg:mt-0 lg:ml-8">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Properties
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand Information */}
          <div className="lg:col-span-4">
            <a href="#" className="mb-5 inline-flex items-center gap-2">
              <img
                src="../Gradient_Blue_House_Logo_with_Swoosh.png"
                alt="PropertyMS Logo"
                className="h-12 w-14 object-contain"
              />

              <span className="text-2xl font-extrabold tracking-tight">
                Property
                <span className="bg-linear-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  MS
                </span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              PropertyMS is a modern property management platform designed
              to simplify how landlords, tenants, and property teams manage
              properties, units, tenancies, and payments.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <p className="mb-4 text-sm font-semibold text-white">
                Connect with us
              </p>

              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-sky-400"
                  >
                    <ChevronRight
                      size={15}
                      className="text-slate-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-400"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-base font-bold text-white">
              Our Solutions
            </h3>

            <ul className="flex flex-col gap-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.name}>
                    <a
                      href="#features"
                      className="group inline-flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-sky-400"
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                        className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                      />
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-base font-bold text-white">
              Get in Touch
            </h3>

            <p className="mb-6 text-sm leading-6 text-slate-400">
              Have questions or need assistance? We'd love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="#contact"
                className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400">
                  <Headset size={17} />
                </span>
                <span className="pt-1">
                  <span className="block font-semibold text-white">
                    Customer Support
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    We're here to help
                  </span>
                </span>
              </a>

              <a
                href="#contact"
                className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400">
                  <Mail size={17} />
                </span>
                <span className="pt-1">
                  <span className="block font-semibold text-white">
                    Send an Enquiry
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    Get in touch with our team
                  </span>
                </span>
              </a>

              <a
                href="#contact"
                className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400">
                  <MapPin size={17} />
                </span>
                <span className="pt-1">
                  <span className="block font-semibold text-white">
                    Our Location
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    Visit our contact page
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <p className="text-sm text-slate-500">
              © {currentYear}{" "}
              <span className="font-semibold text-slate-300">
                PropertyMS
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 sm:gap-7">
              <a
                href="#privacy"
                className="transition-colors hover:text-sky-400"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="transition-colors hover:text-sky-400"
              >
                Terms of Use
              </a>

              <a
                href="#"
                className="group inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-sky-400"
              >
                Back to top
                <MoveUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
