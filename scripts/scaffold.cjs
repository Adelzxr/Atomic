const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

const files = {
  // Config
  '../tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      }
    },
  },
  plugins: [],
}`,
  '../postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
  'index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 antialiased;
  }
}
`,
  // Types
  'types/index.ts': `export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  avatar?: string;
  createdAt: string;
}

export interface Stat {
  label: string;
  value: string;
  change: number;
}
`,
  // Utils
  'utils/classNames.ts': `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
  // Data
  'data/mock.ts': `import { User, Stat } from '../types';

export const mockUsers: User[] = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2023-01-15' },
  { id: '2', name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', createdAt: '2023-02-20' },
  { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer', status: 'Pending', createdAt: '2023-03-10' },
];

export const mockStats: Stat[] = [
  { label: 'Total Users', value: '1,234', change: 12 },
  { label: 'Revenue', value: '$45,678', change: 8.5 },
  { label: 'Active Sessions', value: '892', change: -2.4 },
  { label: 'Conversion Rate', value: '3.4%', change: 1.2 },
];
`,
  // State
  'context/DashboardContext.tsx': `import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const DashboardContext = createContext<DashboardState | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <DashboardContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error('useDashboard must be used within DashboardProvider');
  return context;
};
`,
  // Atoms
  'components/atoms/Button/Button.tsx': `import React from 'react';
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
`,
  'components/atoms/Badge/Badge.tsx': `import React from 'react';
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
`,
  'components/atoms/Card/Card.tsx': `import React from 'react';
import { cn } from '../../../utils/classNames';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={cn('bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4', className)}>
    {children}
  </div>
);
`,
  'components/atoms/Input/Input.tsx': `import React from 'react';
import { cn } from '../../../utils/classNames';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={cn('rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary', className)} {...props} />
);
`,
  'components/atoms/Typography/Typography.tsx': `import React from 'react';
import { cn } from '../../../utils/classNames';

export const Heading: React.FC<{ children: React.ReactNode, level?: 1|2|3|4|5|6, className?: string }> = ({ children, level = 2, className }) => {
  const Tag = \`h\${level}\` as keyof JSX.IntrinsicElements;
  const sizes = { 1: 'text-3xl', 2: 'text-2xl', 3: 'text-xl', 4: 'text-lg', 5: 'text-base', 6: 'text-sm' };
  return <Tag className={cn('font-bold tracking-tight', sizes[level], className)}>{children}</Tag>;
};

export const Text: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <p className={cn('text-gray-600 dark:text-gray-400', className)}>{children}</p>
);
`,
  // Molecules
  'components/molecules/StatCard/StatCard.tsx': `import React from 'react';
import { Card } from '../../atoms/Card/Card';
import { Heading, Text } from '../../atoms/Typography/Typography';

export const StatCard: React.FC<{ label: string, value: string, change: number }> = ({ label, value, change }) => (
  <Card>
    <Text>{label}</Text>
    <div className="flex items-end gap-2 mt-2">
      <Heading level={3}>{value}</Heading>
      <span className={change >= 0 ? 'text-success' : 'text-danger'}>
        {change > 0 && '+'}{change}%
      </span>
    </div>
  </Card>
);
`,
  // Organisms
  'components/organisms/Sidebar/Sidebar.tsx': `import React from 'react';
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
`,
  'components/organisms/TopNav/TopNav.tsx': `import React from 'react';
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
`,
  // Templates
  'components/templates/DashboardTemplate/DashboardTemplate.tsx': `import React from 'react';
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
`,
  // Pages
  'components/pages/Dashboard/Dashboard.tsx': `import React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { Heading } from '../../atoms/Typography/Typography';
import { StatCard } from '../../molecules/StatCard/StatCard';
import { mockStats } from '../../../data/mock';
import { Card } from '../../atoms/Card/Card';

export const Dashboard: React.FC = () => (
  <DashboardTemplate>
    <Heading level={1} className="mb-6">Dashboard Overview</Heading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {mockStats.map(stat => <StatCard key={stat.label} {...stat} />)}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="h-64 flex items-center justify-center">
        <span className="text-gray-400">Activity Feed Placeholder</span>
      </Card>
      <Card className="h-64 flex items-center justify-center">
        <span className="text-gray-400">Quick Actions Placeholder</span>
      </Card>
    </div>
  </DashboardTemplate>
);
`,
  'components/pages/Users/Users.tsx': `import React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { Heading } from '../../atoms/Typography/Typography';
import { Card } from '../../atoms/Card/Card';
import { mockUsers } from '../../../data/mock';
import { Badge } from '../../atoms/Badge/Badge';

export const Users: React.FC = () => (
  <DashboardTemplate>
    <Heading level={1} className="mb-6">Users Management</Heading>
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map(user => (
              <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <Badge variant={user.status === 'Active' ? 'success' : user.status === 'Pending' ? 'warning' : 'default'}>
                    {user.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </DashboardTemplate>
);
`,
  'components/pages/Analytics/Analytics.tsx': `import React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { Heading } from '../../atoms/Typography/Typography';
import { Card } from '../../atoms/Card/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', pv: 2400 },
  { name: 'Feb', pv: 1398 },
  { name: 'Mar', pv: 9800 },
  { name: 'Apr', pv: 3908 },
  { name: 'May', pv: 4800 },
  { name: 'Jun', pv: 3800 },
];

export const Analytics: React.FC = () => (
  <DashboardTemplate>
    <Heading level={1} className="mb-6">Analytics</Heading>
    <Card className="h-96">
      <Heading level={3} className="mb-4">Traffic Overview</Heading>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </DashboardTemplate>
);
`,
  'components/pages/Settings/Settings.tsx': `import React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { Heading } from '../../atoms/Typography/Typography';
import { Card } from '../../atoms/Card/Card';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

export const Settings: React.FC = () => (
  <DashboardTemplate>
    <Heading level={1} className="mb-6">Settings</Heading>
    <Card className="max-w-2xl">
      <Heading level={3} className="mb-4">Profile Information</Heading>
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
          <Input className="w-full" placeholder="Admin User" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
          <Input type="email" className="w-full" placeholder="admin@example.com" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </Card>
  </DashboardTemplate>
);
`,
  // App
  'App.tsx': `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './context/DashboardContext';
import { Dashboard } from './components/pages/Dashboard/Dashboard';
import { Users } from './components/pages/Users/Users';
import { Analytics } from './components/pages/Analytics/Analytics';
import { Settings } from './components/pages/Settings/Settings';

function App() {
  return (
    <DashboardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
`,
  'main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`
};

for (const [relativePath, content] of Object.entries(files)) {
  const absolutePath = path.resolve(srcDir, relativePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, content);
}
console.log('Scaffolding complete.');
