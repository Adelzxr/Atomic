import React from 'react';
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
