import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/lgoin/login';
import DashboardPage from './pages/dashboard/DashboardPage';
import NotFound from './pages/notFound/NotFound';
import HomePage from './pages/home/HomePage';
import ProtectedLayout from './pages/dashboard/ProtectedLayout';
import ProfilePage from './pages/profile/Profile';
import SettingsPage from './pages/settings/Settings';
import RoleBasedRoute from './pages/dashboard/RoleBasedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Apply ProtectedLayout to routes that require protection */}
      <Route element={<ProtectedLayout />}>
        <Route path="/home" element={<RoleBasedRoute element={<HomePage />} allowedRoles={['system-admin']} />} />
        <Route path="/dashboard" element={<RoleBasedRoute element={<DashboardPage />} allowedRoles={['system-admin', 'super-admin']} />} />
        <Route path="/profile" element={<RoleBasedRoute element={<ProfilePage />} allowedRoles={['super-admin']} />} />
        <Route path="/setting" element={<RoleBasedRoute element={<SettingsPage />} allowedRoles={['super-admin']} />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
