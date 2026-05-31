import React from 'react';
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
