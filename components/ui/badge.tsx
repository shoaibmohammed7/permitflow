import React, { ReactNode } from "react";

interface BadgeProps {
  variant?: string;
  className?: string;
  children: ReactNode;
}

// Badge Component
export const Badge: React.FC<BadgeProps> = ({ variant, className, children }) => {
  // Define base classes for Badge
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  // Handle different variants if needed (outline, filled, etc.)
  const variantClasses = variant === "outline" ? "border" : "";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
