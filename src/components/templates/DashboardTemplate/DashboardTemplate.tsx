import React from 'react';
import { Sidebar } from '../../organisms/Sidebar/Sidebar';
import { TopNav } from '../../organisms/TopNav/TopNav';

export const DashboardTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <TopNav />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  </div>
);
