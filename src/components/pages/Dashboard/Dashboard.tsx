import React from 'react';
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
