import React from "react";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ className, children, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-white border-2 border-gray-200 shadow-sm",
    elevated: "bg-white shadow-lg border border-gray-100",
    flat: "bg-white border-2 border-gray-200"
  };

  return (
    <div
      ref={ref}
      className={cn("rounded-2xl", variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;