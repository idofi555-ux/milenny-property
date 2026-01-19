import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  href?: string;
}

type ButtonAsButton = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;
type ButtonAsLink = ButtonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed",
  outline: "bg-transparent text-[var(--color-text-dark)] border border-[var(--color-text-dark)] hover:bg-[var(--color-text-dark)] hover:text-white",
  "outline-light": "bg-transparent text-white border border-white/60 hover:border-white hover:bg-white hover:text-[var(--color-text-dark)]",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-[13px] font-medium uppercase tracking-[0.1em] transition-all duration-300";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>)}>
      {children}
    </button>
  );
}
