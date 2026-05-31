import React from 'react';
import { cn } from '../../../utils/classNames';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={cn('bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4', className)}>
    {children}
  </div>
);
