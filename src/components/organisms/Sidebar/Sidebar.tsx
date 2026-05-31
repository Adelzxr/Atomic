import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BarChart, Settings } from 'lucide-react';
import { cn } from '../../../utils/classNames';

export const Sidebar: React.FC = () => {
  const links = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'Users' },
    { to: '/analytics', icon: BarChart, label: 'Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4 flex flex-col">
      <div className="font-bold text-xl mb-8 flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">A</div>
        Adminify
      </div>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
              isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
          >
            <link.icon size={20} />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
