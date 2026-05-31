import React from 'react';
import { cn } from '../../../utils/classNames';

export const Badge: React.FC<{ children: React.ReactNode, variant?: 'success' | 'warning' | 'danger' | 'default' }> = ({ children, variant = 'default' }) => {
  const variants = {
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-danger/10 text-danger',
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  };
  return <span className={cn('px-2 py-1 text-xs rounded-full font-semibold', variants[variant])}>{children}</span>;
}
