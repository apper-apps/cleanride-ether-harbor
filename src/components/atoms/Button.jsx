import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-150 btn-press focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg",
    secondary: "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-lg",
    accent: "bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 hover:from-accent-600 hover:to-accent-700 focus:ring-accent-500 shadow-lg font-semibold",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 bg-white",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg h-10",
    default: "px-6 py-3 text-base rounded-xl h-14",
    lg: "px-8 py-4 text-lg rounded-2xl h-16",
    icon: "p-3 rounded-full h-12 w-12"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;