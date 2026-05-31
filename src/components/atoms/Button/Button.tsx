import React from 'react';
import { cn } from '../../../utils/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200',
    danger: 'bg-danger text-white hover:bg-red-600',
  };
  return (
    <button className={cn('px-4 py-2 rounded-md font-medium transition-colors', variants[variant], className)} {...props} />
  );
};
