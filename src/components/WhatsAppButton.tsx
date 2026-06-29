"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="animate-fade-in relative max-w-[220px] rounded-2xl bg-white px-4 py-3 text-sm font-medium text-brown-dark shadow-xl">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brown/10 text-brown hover:bg-brown/20"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>
          Order fresh modak on WhatsApp! 🪷
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white" />
        </div>
      )}

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label={`Order on WhatsApp — ${siteConfig.name}`}
      >
        <MessageCircle className="h-7 w-7" fill="white" />
        <span className="sr-only">Order on WhatsApp</span>
      </a>
    </div>
  );
}
