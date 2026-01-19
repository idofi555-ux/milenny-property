"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import {
  PropertyDevelopmentIcon,
  ProjectManagementIcon,
  ShortTermRentalIcon,
  LongTermRentalIcon,
  InvestmentAdvisoryIcon,
  SalesMarketingIcon,
} from "@/components/ui/ServiceIcons";

// Values data
const valuesNumbered = [
  { num: "01", label: "Integrity" },
  { num: "02", label: "Accountability" },
  { num: "03", label: "Quality" },
  { num: "04", label: "Transparency" },
  { num: "05", label: "Discretion" },
  { num: "06", label: "Professionalism" },
];

// Services data
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

// Stats data
const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "50+", label: "Projects Completed" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "€20M+", label: "Property Value Managed" },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury villa in Cyprus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-luxury block mb-6">Cyprus Real Estate</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Boutique Property<br />
                Development &<br />
                Management
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-lg leading-relaxed">
                End-to-end real estate development, renovation, rentals, and investment advisory.
              </p>
              <a
                href="#services"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Explore Services
                <ArrowRight className="ml-3" size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-white/30 relative">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-4 bg-white absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="scroll-mt-24">
        {/* About Intro */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="label-luxury block mb-6">About Us</span>
                <p className="text-2xl md:text-3xl leading-relaxed text-[var(--color-text-dark)]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Milenny Property is a Cyprus-based boutique real estate company specialising in property development, renovation, rental management, and investment advisory.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
                  We develop, renovate, manage, and elevate real estate assets with a focus on quality, transparency, and long-term value. Our approach combines local expertise with European-standard professionalism.
                </p>
                <div className="divider mb-8" />
                <a
                  href="#services"
                  className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
                >
                  Explore Our Services
                  <ArrowUpRight className="ml-2" size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="section-padding bg-[var(--color-bg-light)]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="label-luxury block mb-6">Our Values</span>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                What we stand for
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {valuesNumbered.map((value, index) => (
                <motion.div
                  key={value.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-white hover:shadow-lg transition-shadow duration-500"
                >
                  <span className="text-4xl font-light text-[var(--color-primary)] block mb-4">
                    {value.num}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {value.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg-dark)]" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="label-luxury block mb-6">Our Mission</span>
                <h2
                  className="text-4xl md:text-5xl text-white mb-8 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  What guides our work<br />and decisions every day
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  To deliver high-quality, reliable, and stress-free property experiences through expertise, transparency, and hands-on management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Modern villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                    alt="Luxury property"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="scroll-mt-24">
        {/* Services Intro */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="label-luxury block mb-6">Our Services</span>
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
        </div>

        {/* Services Detail */}
        <div className="bg-[var(--color-bg-light)]">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`section-padding scroll-mt-24 ${index % 2 === 1 ? 'bg-white' : ''}`}
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
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
                    >
                      Inquire About This Service
                      <ArrowRight className="ml-2" size={16} />
                    </a>
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
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="scroll-mt-24">
        {/* Coming Soon */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="label-luxury block mb-6">Our Portfolio</span>
                <h2
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Our portfolio is being curated
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-10">
                  We are preparing detailed case studies of our completed and ongoing projects.
                  Check back soon or contact us to learn more about our work.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight className="ml-2" size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-[var(--color-bg-light)]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span
                    className="text-4xl md:text-5xl text-[var(--color-text-dark)] block mb-2"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="scroll-mt-24 bg-[#0a0a0a] py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 lg:mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white">
                Get in touch
              </h2>
              <p className="text-lg text-white/50 max-w-xl">
                We&apos;d love to hear from you. Whether you have a question about our services or want to discuss a project.
              </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left - Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Email</h3>
                  <a href="mailto:info@milennyproperty.com" className="text-xl text-white hover:text-white/70 transition-colors">
                    info@milennyproperty.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Office</h3>
                  <p className="text-xl text-white">Elpidas 8, Pyrgos 4534</p>
                  <p className="text-xl text-white">Limassol, Cyprus</p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Hours</h3>
                  <p className="text-xl text-white">Monday – Friday</p>
                  <p className="text-xl text-white">09:00 – 18:00</p>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <ContactForm variant="dark" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
