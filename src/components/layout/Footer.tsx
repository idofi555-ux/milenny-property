"use client";

import Logo from "@/components/ui/Logo";

const services = [
  "Property Development",
  "Project Management",
  "Short-Term Rentals",
  "Long-Term Rentals",
  "Investment Advisory",
  "Sales & Marketing",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="container-custom py-16">
        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Left - Logo & Description */}
          <div>
            <Logo light className="mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Milenny Property is a boutique real estate firm offering development, renovation, rentals, and investment advisory.
            </p>
          </div>

          {/* Middle - Services */}
          <div>
            <h3 className="text-sm font-medium text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="text-sm font-medium text-white mb-5">Contact</h3>
            <div className="space-y-3 text-sm text-white/50">
              <p>Phone: +357 XX XXX XXX</p>
              <p>Email: info@milennyproperty.com</p>
              <p>Hours: Mon–Fri, 09:00–18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/30">
            Milenny Property © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
