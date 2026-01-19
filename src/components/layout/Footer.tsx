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
    <footer className="border-t border-gray-100">
      <div className="container-custom py-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left - Logo & Info */}
          <div className="lg:max-w-sm">
            <Logo className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Boutique property development and management in Cyprus. We develop, renovate, manage, and elevate real estate assets.
            </p>
            <a
              href="mailto:info@milennyproperty.com"
              className="text-sm text-gray-900 hover:text-gray-500 transition-colors"
            >
              info@milennyproperty.com
            </a>
          </div>

          {/* Right - Navigation */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            {/* Nav Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Navigate</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Office</h3>
              <address className="not-italic text-sm text-gray-600 space-y-1">
                <p>Elpidas 8, Pyrgos 4534</p>
                <p>Limassol, Cyprus</p>
                <p className="pt-2">Mon–Fri, 09:00–18:00</p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Milenny Property. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
