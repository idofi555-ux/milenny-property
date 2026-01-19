"use client";

import Logo from "@/components/ui/Logo";

const services = [
  { href: "/#property-development", label: "Property Development" },
  { href: "/#project-management", label: "Project Management" },
  { href: "/#short-term-rentals", label: "Short-Term Rentals" },
  { href: "/#long-term-rentals", label: "Long-Term Rentals" },
  { href: "/#investment-advisory", label: "Investment Advisory" },
  { href: "/#sales-marketing", label: "Sales & Marketing" },
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
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)]">
      <div className="container-custom py-16">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Column 1: Logo & Description */}
          <div>
            <Logo light className="mb-6" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Milenny Property is a boutique real estate firm offering development, renovation, rentals, and investment advisory.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/40">
                Phone: <span className="text-white/60">+XXX XXX XXX</span>
              </li>
              <li className="text-white/40">
                Email: <a href="mailto:info@milennyproperty.com" className="text-white/60 hover:text-white transition-colors">info@milennyproperty.com</a>
              </li>
              <li className="text-white/40">
                Hours: <span className="text-white/60">Mon–Fri, 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-white/30 text-sm">
            Milenny Property © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
