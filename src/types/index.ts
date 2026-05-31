export interface User {
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
