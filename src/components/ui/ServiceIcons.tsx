// Custom service icons based on the Figma design

export function PropertyDevelopmentIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 24H40" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 16V40" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 8L8 16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 8L40 16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ProjectManagementIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <path d="M24 8V12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 36V40" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 24H12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 24H40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ShortTermRentalIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20H40" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="14" y="26" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="28" y="26" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LongTermRentalIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 40V20L24 8L40 20V40H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="18" y="28" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 28V40" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function InvestmentAdvisoryIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 40L18 28L26 34L40 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 16H40V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="28" r="2" fill="currentColor" />
      <circle cx="26" cy="34" r="2" fill="currentColor" />
      <circle cx="40" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export function SalesMarketingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 14V24L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 8L40 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 8H36V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PremiumServiceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L28 16H40L30 24L34 40L24 30L14 40L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ClearCommunicationIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12H40V32H26L18 40V32H8V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 20H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 26H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ReliableExecutionIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 24L22 30L34 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
