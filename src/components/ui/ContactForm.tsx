"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent?: boolean;
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

  const inputStyles = `w-full px-0 py-3 text-[15px] bg-transparent border-b transition-colors focus:outline-none ${
    isDark
      ? 'border-white/20 text-white placeholder:text-white/40 focus:border-white/50'
      : 'border-[var(--color-border)] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]'
  }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className={inputStyles}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Contact Email"
          className={inputStyles}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone"
          className={inputStyles}
          {...register("phone")}
        />
      </div>

      <div>
        <textarea
          placeholder="Message"
          rows={3}
          className={`${inputStyles} resize-none`}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
      </div>

      {isDark && (
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent"
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-white/50 text-sm">
            I agree that my submitted data is being collected and stored.
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C45C3E] text-white text-sm font-medium tracking-wide hover:bg-[#A84D33] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send message"}
      </button>
    </form>
  );
}
