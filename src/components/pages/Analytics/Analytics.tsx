import React from 'react';
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
