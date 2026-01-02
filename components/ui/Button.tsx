
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Extending HTMLMotionProps<"button"> instead of React.ButtonHTMLAttributes<HTMLButtonElement>
// ensures that the props passed to <motion.button> have the correct types for motion-specific handlers.
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-slate-950 hover:bg-slate-200 focus:ring-white",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]",
    outline: "border border-white/20 text-white hover:bg-white/10 focus:ring-white/50",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
