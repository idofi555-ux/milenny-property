"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

const services = [
  { href: "/#property-development", label: "Property Development" },
  { href: "/#project-management", label: "Project Management" },
  { href: "/#short-term-rentals", label: "Short-Term Rentals" },
  { href: "/#long-term-rentals", label: "Long-Term Rentals" },
  { href: "/#investment-advisory", label: "Investment Advisory" },
  { href: "/#sales-marketing", label: "Sales & Marketing" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo light className="mb-4 scale-90 origin-left" />
            <p className="text-[11px] text-white/40 leading-relaxed max-w-[240px] mb-4">
              A boutique real estate firm offering development, renovation, rentals, and investment advisory in Cyprus.
            </p>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="inline-flex items-center text-[10px] uppercase tracking-[0.12em] font-medium text-white/50 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              Get In Touch
              <ArrowUpRight className="ml-1.5" size={10} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-medium mb-3 uppercase tracking-[0.12em] text-white/30">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-medium mb-3 uppercase tracking-[0.12em] text-white/30">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-medium mb-3 uppercase tracking-[0.12em] text-white/30">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-[9px] text-white/25 uppercase tracking-wider block mb-0.5">Email</span>
                <a
                  href="mailto:info@milennyproperty.com"
                  className="text-[11px] text-white/50 hover:text-white transition-colors"
                >
                  info@milennyproperty.com
                </a>
              </li>
              <li>
                <span className="text-[9px] text-white/25 uppercase tracking-wider block mb-0.5">Address</span>
                <span className="text-[11px] text-white/40 block">Elpidas 8, Pyrgos 4534</span>
                <span className="text-[11px] text-white/40">Limassol, Cyprus</span>
              </li>
              <li>
                <span className="text-[9px] text-white/25 uppercase tracking-wider block mb-0.5">Hours</span>
                <span className="text-[11px] text-white/40">Mon–Fri, 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[10px] text-white/25">
              Milenny Property &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-[10px] text-white/25 hover:text-white/50 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[10px] text-white/25 hover:text-white/50 transition-colors"
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
