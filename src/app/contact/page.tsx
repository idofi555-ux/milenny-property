"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    content: "info@milennyproperty.com",
    href: "mailto:info@milennyproperty.com",
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    content: "Elpidas 8, Pyrgos 4534",
    subContent: "Limassol, Cyprus",
  },
  {
    icon: <Clock size={24} />,
    title: "Working Hours",
    content: "Mon–Fri, 09:00–18:00",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury interior"
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
            <span className="label-luxury block mb-4">Contact Us</span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Get in touch
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro & Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-2xl md:text-3xl leading-relaxed text-[var(--color-text-dark)]"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                We&apos;re here to help with development, renovation, rentals, or investment planning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                Whether you&apos;re looking to invest, develop, or need expert property management, our team is ready to discuss your requirements and provide tailored solutions.
              </p>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-500"
              >
                <div className="text-[var(--color-primary)] mb-4">
                  {info.icon}
                </div>
                <h3 className="font-medium mb-2">{info.title}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <div className="text-[var(--color-text-muted)]">
                    <span>{info.content}</span>
                    {info.subContent && <span className="block">{info.subContent}</span>}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-bg-dark)]/90" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-luxury block mb-6">Send a Message</span>
              <h2
                className="text-4xl md:text-5xl text-white mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Tell us about<br />your project
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Fill out the form and we will contact you as soon as possible.
                We typically respond within one business day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm variant="dark" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8!2d33.0442!3d34.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7340a5e15e0e1%3A0x1!2sPyrgos%2C%20Limassol%2C%20Cyprus!5e0!3m2!1sen!2s!4v1705600000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Milenny Property - Elpidas 8, Pyrgos 4534, Limassol, Cyprus"
        />
      </section>
    </>
  );
}
