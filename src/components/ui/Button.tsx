import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-[#FFD700] hover:bg-[#E6C200] text-black focus:ring-[#FFD700]',
    secondary: 'bg-black hover:bg-gray-900 text-white focus:ring-black',
    outline: 'bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black focus:ring-[#FFD700]',
    text: 'bg-transparent text-[#FFD700] hover:bg-black hover:text-[#FFD700] focus:ring-[#FFD700]'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3 rounded',
    md: 'text-base py-2 px-4 rounded-md',
    lg: 'text-lg py-2.5 px-5 rounded-md'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;