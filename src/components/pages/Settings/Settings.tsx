import React from 'react';
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
