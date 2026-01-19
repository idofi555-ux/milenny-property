import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

const services = [
  { href: "/services#property-development", label: "Property Development" },
  { href: "/services#project-management", label: "Project Management" },
  { href: "/services#short-term-rentals", label: "Short-Term Rentals" },
  { href: "/services#long-term-rentals", label: "Long-Term Rentals" },
  { href: "/services#investment-advisory", label: "Investment Advisory" },
  { href: "/services#sales-marketing", label: "Sales & Marketing" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo light className="mb-6" />
            <p className="text-[13px] text-white/50 leading-relaxed max-w-[280px] mb-6">
              A boutique real estate firm offering development, renovation, rentals, and investment advisory in Cyprus.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[11px] uppercase tracking-[0.15em] font-medium text-white/60 hover:text-[var(--color-primary)] transition-colors"
            >
              Get In Touch
              <ArrowUpRight className="ml-2" size={12} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-medium mb-5 uppercase tracking-[0.15em] text-white/40">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-medium mb-5 uppercase tracking-[0.15em] text-white/40">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-medium mb-5 uppercase tracking-[0.15em] text-white/40">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="text-[11px] text-white/30 uppercase tracking-wider block mb-1">Email</span>
                <a
                  href="mailto:info@milennyproperty.com"
                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  info@milennyproperty.com
                </a>
              </li>
              <li>
                <span className="text-[11px] text-white/30 uppercase tracking-wider block mb-1">Address</span>
                <span className="text-[13px] text-white/50 block">Elpidas 8, Pyrgos 4534</span>
                <span className="text-[13px] text-white/50">Limassol, Cyprus</span>
              </li>
              <li>
                <span className="text-[11px] text-white/30 uppercase tracking-wider block mb-1">Hours</span>
                <span className="text-[13px] text-white/50">Mon–Fri, 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-white/30">
              Milenny Property &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
