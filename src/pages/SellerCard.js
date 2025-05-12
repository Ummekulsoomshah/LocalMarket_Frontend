import React from "react";

export const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white shadow-md rounded-2xl p-4 transition hover:shadow-lg ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

export const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-4 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";
