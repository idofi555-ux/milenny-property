"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, Check } from "lucide-react";
import {
  PropertyDevelopmentIcon,
  ProjectManagementIcon,
  ShortTermRentalIcon,
  LongTermRentalIcon,
  InvestmentAdvisoryIcon,
  SalesMarketingIcon,
} from "@/components/ui/ServiceIcons";

const services = [
  {
    id: "property-development",
    icon: <PropertyDevelopmentIcon className="w-12 h-12" />,
    title: "Property Development",
    description: "We manage the full development cycle from plot to final delivery, ensuring every detail meets our exacting standards.",
    features: [
      "Land evaluation & feasibility studies",
      "Architectural coordination",
      "Construction management",
      "Budget & timeline control",
      "Turnkey delivery",
    ],
  },
  {
    id: "project-management",
    icon: <ProjectManagementIcon className="w-12 h-12" />,
    title: "Project Management",
    description: "Full oversight of construction or renovation projects with meticulous attention to quality and deadlines.",
    features: [
      "Contractor supervision",
      "Quality inspections",
      "Timeline tracking",
      "Regulatory compliance",
      "Transparent reporting",
    ],
  },
  {
    id: "short-term-rentals",
    icon: <ShortTermRentalIcon className="w-12 h-12" />,
    title: "Short-Term Rentals",
    description: "Maximising your property's short-term rental performance through strategic management.",
    features: [
      "Listing setup & optimisation",
      "Dynamic pricing strategy",
      "Guest communication",
      "Cleaning & maintenance",
      "Monthly performance reports",
    ],
  },
  {
    id: "long-term-rentals",
    icon: <LongTermRentalIcon className="w-12 h-12" />,
    title: "Long-Term Rentals",
    description: "Stable income with zero operational effort through comprehensive property management.",
    features: [
      "Tenant screening & selection",
      "Lease management",
      "Rent collection",
      "Maintenance coordination",
      "Regular inspections",
    ],
  },
  {
    id: "investment-advisory",
    icon: <InvestmentAdvisoryIcon className="w-12 h-12" />,
    title: "Investment Advisory",
    description: "Expert guidance for profitable real estate decisions backed by deep market knowledge.",
    features: [
      "Market research & analysis",
      "ROI projections",
      "Property sourcing",
      "Due diligence support",
      "Portfolio strategy",
    ],
  },
  {
    id: "sales-marketing",
    icon: <SalesMarketingIcon className="w-12 h-12" />,
    title: "Sales & Marketing",
    description: "Professional positioning and marketing for successful property sales.",
    features: [
      "Marketing strategy development",
      "Property staging guidance",
      "Buyer sourcing",
      "Negotiation support",
      "Transaction management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-luxury block mb-4">Our Services</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Comprehensive<br />property solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl leading-relaxed text-[var(--color-text-dark)]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Our services are designed to support every aspect of property ownership—from initial acquisition through ongoing management.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                We emphasise clear structure, transparent communication, and predictable outcomes across all services. This ensures they can be integrated smoothly into your investment strategy and maintained with confidence over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-[var(--color-bg-light)]">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 1 ? 'bg-white' : ''}`}
          >
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6 text-[var(--color-primary)]">
                    {service.icon}
                  </div>
                  <span className="label-luxury block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="text-3xl md:text-4xl mb-6"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
                  >
                    Inquire About This Service
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white p-10 shadow-lg">
                    <h3 className="text-lg font-medium mb-6">What&apos;s Included</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <Check className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-[var(--color-text-muted)]">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
