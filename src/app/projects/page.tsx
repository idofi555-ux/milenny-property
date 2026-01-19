"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury property"
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
            <span className="label-luxury block mb-4">Our Portfolio</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Projects that<br />define excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-luxury block mb-6">Coming Soon</span>
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
              <Link
                href="/contact"
                className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                Get in Touch
                <ArrowUpRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--color-bg-dark)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "50+", label: "Projects Completed" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "€20M+", label: "Property Value Managed" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span
                  className="text-4xl md:text-5xl text-white block mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {stat.num}
                </span>
                <span className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
