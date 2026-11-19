
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
  BriefcaseBusiness,
  Camera,
  Code2,
  UsersRound,
  ChevronRight,
  MoveUpRight,
  CheckCircle2,
} from "lucide-react";

export default function Home_Footer() {
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

  const socialLinks = [
    { name: "LinkedIn", icon: BriefcaseBusiness, href: "#" },
    { name: "Instagram", icon: Camera, href: "#" },
    { name: "GitHub", icon: Code2, href: "#" },
    { name: "Community", icon: UsersRound, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#061A38] text-white">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Contact Banner */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 md:flex-row md:items-center md:justify-between">

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sky-400">
              <Building2 size={23} />
            </div>

            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                Better Property Management Starts Here.
              </p>

              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
                Bring your properties, tenants, and payments together
                with a smarter management experience.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 sm:gap-x-8 lg:grid-cols-12 lg:gap-8">

          {/* Brand Information */}
          <div className="col-span-2 lg:col-span-4">

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
              PropertyMS is a modern property management platform
              designed to simplify how landlords, tenants, and property
              teams manage properties, units, tenancies, and payments.
            </p>

            {/* Brand Highlights */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 size={16} className="text-sky-400" />
                Simplified property management
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 size={16} className="text-sky-400" />
                Organised tenant and payment records
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-white">
                Follow our journey
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-600 hover:text-white"
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Explore
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

          {/* Services */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
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
                        className="shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-110"
                      />
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="flex flex-col gap-4">
              {supportLinks.map((link) => (
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

          {/* Contact Information */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
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
                <Headset
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
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
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
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
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  <span className="block font-semibold text-white">
                    Call Our Team
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    Speak with our team
                  </span>
                </span>
              </a>

              <a
                href="#contact"
                className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
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
