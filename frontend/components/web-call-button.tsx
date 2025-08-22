"use client";

import { Headphones } from "lucide-react";

interface WebCallButtonProps {
  variant?: "default" | "large" | "footer";
  text?: string;
  className?: string;
}

export function WebCallButton({ 
  variant = "default", 
  text = "Web Call",
  className = "" 
}: WebCallButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const baseClasses = "inline-flex items-center gap-2 font-bold transition-colors";
  
  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg",
    large: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl shadow-lg",
    footer: "text-blue-400 hover:underline justify-start"
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`${text} with Tony`}
    >
      <Headphones className={variant === "large" ? "h-6 w-6" : variant === "footer" ? "h-4 w-4" : "h-5 w-5"} />
      <span>{text}</span>
    </button>
  );
}