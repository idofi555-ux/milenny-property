"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { ArrowUpRight } from "lucide-react";

const valuesNumbered = [
  { num: "01", label: "Integrity" },
  { num: "02", label: "Accountability" },
  { num: "03", label: "Quality" },
  { num: "04", label: "Transparency" },
  { num: "05", label: "Discretion" },
  { num: "06", label: "Professionalism" },
];

const approachItems = [
  "Clear communication",
  "Responsible execution",
  "Detailed planning",
  "Long-term relationships",
  "Tailored solutions",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
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
            <span className="label-luxury block mb-4">About Us</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              A boutique firm<br />dedicated to excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
              <Link
                href="/services"
                className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                Explore Our Services
                <ArrowUpRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[var(--color-bg-light)]">
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
      </section>

      {/* Mission Section */}
      <section className="relative py-32 overflow-hidden">
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
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-luxury block mb-6">Our Approach</span>
              <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                How we turn principles<br />into practice
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                Our methodology combines careful planning with agile execution, ensuring every project meets our exacting standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ul className="space-y-6">
                {approachItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 pb-6 border-b border-[var(--color-border)]"
                  >
                    <span className="text-[var(--color-primary)] text-sm font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
