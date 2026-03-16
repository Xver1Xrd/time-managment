"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_28px_rgba(209,134,71,0.28)] hover:bg-[#f0b985] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_18px_32px_rgba(209,134,71,0.32)]",
  secondary:
    "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.08] hover:border-white/25",
  ghost:
    "text-foreground hover:bg-white/[0.07]"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]"
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} className={fullWidth ? "w-full" : ""}>
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
      </Link>
    </motion.div>
  );
}
