"use client";

import Logo from "@/components/ui/Logo";

const navLinks = [
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
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)]">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-6">
            <Logo light className="scale-90 origin-left" />
            <span className="hidden sm:block w-px h-8 bg-white/10" />
            <span className="hidden sm:block text-white/40 text-sm">
              Boutique Property Development
            </span>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Milenny Property. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Limassol, Cyprus</span>
              <a
                href="mailto:info@milennyproperty.com"
                className="hover:text-white/60 transition-colors"
              >
                info@milennyproperty.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
