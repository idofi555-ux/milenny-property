import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light";

interface BaseButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

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
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-[13px] font-medium uppercase tracking-[0.1em] transition-all duration-300";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const { ...linkProps } = props as Omit<ButtonAsLink, 'href' | 'variant' | 'className' | 'children'>;
    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, 'variant' | 'className' | 'children'>;
  return (
    <button className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
}
