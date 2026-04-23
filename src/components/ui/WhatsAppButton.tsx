"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_DETAILS } from "@/constants";

export function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${COMPANY_DETAILS.whatsapp.replace("+", "")}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center overflow-hidden"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
      <MessageCircle className="h-7 w-7 relative z-10" fill="currentColor" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 ease-in-out font-semibold px-0 group-hover:px-3 text-sm">
        Chat with us
      </span>
    </button>
  );
}
