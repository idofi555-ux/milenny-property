"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen */}
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
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Explore Services
                <ArrowRight className="ml-3" size={16} />
              </Link>
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

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-luxury block mb-6">About Us</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                A boutique firm<br />dedicated to excellence
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
                Milenny Property is a Cyprus-based boutique real estate company offering complete solutions for property owners and investors. We develop, renovate, manage, and elevate real estate assets with a focus on quality, transparency, and long-term value.
              </p>
              <div className="divider mb-8" />
              <Link
                href="/about"
                className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                Learn More About Us
                <ArrowUpRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Image Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                alt="Modern architecture design"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
