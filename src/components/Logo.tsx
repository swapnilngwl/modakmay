"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoVariant = "header" | "icon" | "full";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const config: Record<
  LogoVariant,
  { src: string; width: number; height: number; className: string }
> = {
  header: {
    src: "/logo-header.png",
    width: 160,
    height: 52,
    className: "h-11 w-auto sm:h-12",
  },
  icon: {
    src: "/logo-icon.png",
    width: 44,
    height: 44,
    className: "h-10 w-10 rounded-full object-cover shadow-md",
  },
  full: {
    src: "/logo-full.png",
    width: 200,
    height: 240,
    className: "h-auto w-44 sm:w-48",
  },
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const { src, width, height, className: sizeClass } = config[variant];

  if (failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron text-lg font-bold text-white shadow-md">
        {siteConfig.name.charAt(0)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${siteConfig.name} logo`}
      width={width}
      height={height}
      className={`shrink-0 object-contain ${sizeClass} ${className}`}
      priority={variant === "header"}
      onError={() => setFailed(true)}
    />
  );
}
