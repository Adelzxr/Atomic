import React from 'react';
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
