import React from 'react';
import { cn } from '../../../utils/classNames';

export const Heading: React.FC<{ children: React.ReactNode, level?: 1|2|3|4|5|6, className?: string }> = ({ children, level = 2, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizes = { 1: 'text-3xl', 2: 'text-2xl', 3: 'text-xl', 4: 'text-lg', 5: 'text-base', 6: 'text-sm' };
  return <Tag className={cn('font-bold tracking-tight', sizes[level], className)}>{children}</Tag>;
};

export const Text: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <p className={cn('text-gray-600 dark:text-gray-400', className)}>{children}</p>
);
