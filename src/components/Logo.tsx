"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoVariant = "header" | "footer" | "icon";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const config: Record<
  LogoVariant,
  { src: string; size: number; ringClass: string }
> = {
  header: {
    src: "/logo-circle.png",
    size: 48,
    ringClass: "h-11 w-11 sm:h-12 sm:w-12 shadow-md ring-2 ring-saffron/30",
  },
  footer: {
    src: "/logo-circle.png",
    size: 72,
    ringClass: "h-16 w-16 shadow-lg ring-2 ring-saffron/40",
  },
  icon: {
    src: "/logo-circle.png",
    size: 40,
    ringClass: "h-10 w-10 shadow-md ring-2 ring-saffron/30",
  },
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const { src, size, ringClass } = config[variant];

  if (failed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-saffron font-bold text-white ${ringClass} ${className}`}
      >
        {siteConfig.name.charAt(0)}
      </span>
    );
  }

  return (
    <span
      className={`relative shrink-0 overflow-hidden rounded-full ${ringClass} ${className}`}
    >
      <Image
        src={src}
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority={variant === "header"}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
