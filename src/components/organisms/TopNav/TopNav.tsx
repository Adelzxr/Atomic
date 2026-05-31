import React from 'react';
import { useDashboard } from '../../../context/DashboardContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

export const TopNav: React.FC = () => {
  const { theme, toggleTheme } = useDashboard();
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
          U
        </div>
      </div>
    </header>
  );
};
