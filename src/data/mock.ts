import { User, Stat } from '../types';

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
