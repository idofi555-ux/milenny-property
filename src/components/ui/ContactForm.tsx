"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactFormProps {
  variant?: "dark" | "light";
}

export default function ContactForm({ variant = "light" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <label className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className={`w-full py-3 bg-transparent border-b text-lg transition-colors focus:outline-none ${
            isDark
              ? 'border-white/20 text-white placeholder:text-white/30 focus:border-white'
              : 'border-gray-200 text-gray-900 placeholder:text-gray-300 focus:border-gray-900'
          }`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className="text-red-500 text-xs mt-2 block">{errors.name.message}</span>}
      </div>

      <div>
        <label className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className={`w-full py-3 bg-transparent border-b text-lg transition-colors focus:outline-none ${
            isDark
              ? 'border-white/20 text-white placeholder:text-white/30 focus:border-white'
              : 'border-gray-200 text-gray-900 placeholder:text-gray-300 focus:border-gray-900'
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && <span className="text-red-500 text-xs mt-2 block">{errors.email.message}</span>}
      </div>

      <div>
        <label className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Phone <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          type="tel"
          placeholder="+357 XX XXX XXX"
          className={`w-full py-3 bg-transparent border-b text-lg transition-colors focus:outline-none ${
            isDark
              ? 'border-white/20 text-white placeholder:text-white/30 focus:border-white'
              : 'border-gray-200 text-gray-900 placeholder:text-gray-300 focus:border-gray-900'
          }`}
          {...register("phone")}
        />
      </div>

      <div>
        <label className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Message
        </label>
        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          className={`w-full py-3 bg-transparent border-b text-lg transition-colors focus:outline-none resize-none ${
            isDark
              ? 'border-white/20 text-white placeholder:text-white/30 focus:border-white'
              : 'border-gray-200 text-gray-900 placeholder:text-gray-300 focus:border-gray-900'
          }`}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <span className="text-red-500 text-xs mt-2 block">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`group inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-medium transition-colors disabled:opacity-50 ${
          isDark
            ? 'text-white hover:text-white/70'
            : 'text-gray-900 hover:text-gray-500'
        }`}
      >
        {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent" : "Send Message"}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
