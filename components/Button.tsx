import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { company } from "@/lib/data";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-[#ca8a04] text-white hover:bg-[#a16207]",
    secondary: "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#0f172a]",
    dark: "bg-[#0f172a] text-white hover:bg-[#17243a]",
  };

  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap px-5 text-sm font-bold transition ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function CallButton({ className = "", variant = "primary" as ButtonProps["variant"] }) {
  return (
    <Button href={`tel:${company.phoneHref}`} variant={variant} className={className}>
      <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
      Call {company.phone}
    </Button>
  );
}
