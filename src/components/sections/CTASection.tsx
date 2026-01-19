"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-bg-dark)]/85" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-luxury block mb-6">Get In Touch</span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Start Your Property<br />Journey With<br />Confidence
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Tell us your needs and we&apos;ll prepare a personalised consultation tailored to your goals.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <ContactForm variant="dark" compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
