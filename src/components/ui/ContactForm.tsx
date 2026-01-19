"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactFormProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function ContactForm({ variant = "dark", compact = false }: ContactFormProps) {
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

  const inputBaseStyles = "w-full bg-white px-5 py-4 text-[15px] text-[#2C3639] placeholder:text-[#2C3639]/40 focus:outline-none transition-all duration-300";

  const inputStyles = isDark
    ? `${inputBaseStyles} border-0 focus:ring-2 focus:ring-[var(--color-primary)]/20`
    : `${inputBaseStyles} border border-[#DCD7C9] focus:border-[var(--color-primary)]`;

  const labelStyles = isDark
    ? "text-white/80 text-[13px] font-medium mb-2 block"
    : "text-[#2C3639] text-[13px] font-medium mb-2 block";

  const errorStyles = "text-red-400 text-[12px] mt-1 block";

  if (compact) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelStyles}>Name *</label>
            <input
              type="text"
              placeholder="Your name"
              className={inputStyles}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className={errorStyles}>{errors.name.message}</span>}
          </div>
          <div>
            <label className={labelStyles}>Email *</label>
            <input
              type="email"
              placeholder="Your email"
              className={inputStyles}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <span className={errorStyles}>{errors.email.message}</span>}
          </div>
        </div>
        <div>
          <label className={labelStyles}>Message *</label>
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className={`${inputStyles} resize-none`}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span className={errorStyles}>{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-8 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
            isDark
              ? "bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-[#2C3639]"
              : "bg-transparent border-2 border-[#2C3639] text-[#2C3639] hover:bg-[#2C3639] hover:text-white"
          } disabled:opacity-50`}
        >
          {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className={labelStyles}>Your Name *</label>
        <input
          type="text"
          placeholder="Full name"
          className={inputStyles}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className={errorStyles}>{errors.name.message}</span>}
      </div>
      <div>
        <label className={labelStyles}>Email Address *</label>
        <input
          type="email"
          placeholder="your@email.com"
          className={inputStyles}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span className={errorStyles}>{errors.email.message}</span>}
      </div>
      <div>
        <label className={labelStyles}>Phone (Optional)</label>
        <input
          type="tel"
          placeholder="+357 XX XXX XXX"
          className={inputStyles}
          {...register("phone")}
        />
      </div>
      <div>
        <label className={labelStyles}>Message *</label>
        <textarea
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          className={`${inputStyles} resize-none`}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <span className={errorStyles}>{errors.message.message}</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-8 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 mt-2 ${
          isDark
            ? "bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-[#2C3639]"
            : "bg-transparent border-2 border-[#2C3639] text-[#2C3639] hover:bg-[#2C3639] hover:text-white"
        } disabled:opacity-50`}
      >
        {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}
