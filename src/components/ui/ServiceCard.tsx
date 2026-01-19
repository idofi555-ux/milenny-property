import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href = "/contact",
  variant = "default",
}: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <div className="group">
        <div className="mb-4 text-[var(--color-text-dark)]">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors group-hover:gap-2"
        >
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-[var(--color-border)] rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="mb-4 text-[var(--color-text-dark)]">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-[var(--color-text-muted)] flex items-start">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-[var(--color-text-dark)] border border-[var(--color-text-dark)] px-4 py-2 rounded hover:bg-[var(--color-text-dark)] hover:text-white transition-all"
      >
        Get Now
      </Link>
    </div>
  );
}
