import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RaiseTicket from './components/RaiseTicket';
import SupportDashboard from './components/SupportDashboard';

const gradient = 'from-[#7b42f6] to-[#d634f5]';

export default function App() {
  const [view, setView] = useState('login');
  const context = view === 'dashboard'
    ? { label: 'IT Support Team – IT Support', sub: 'IT Support Dashboard' }
    : view === 'tickets'
    ? { label: 'John Doe – Employee', sub: 'Raise a New Ticket' }
    : { label: 'Guest', sub: 'Sign in to continue' };

  const handleNavigate = (route) => {
    if (route === 'dashboard') setView('dashboard');
    if (route === 'tickets') setView('tickets');
    if (route === 'reviews') setView('login');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-900">
      <Navbar onNavigate={handleNavigate} context={context} />
      {view === 'login' && (
        <LoginPage onSignIn={() => setView('tickets')} />
      )}
      {view === 'tickets' && (
        <RaiseTicket />
      )}
      {view === 'dashboard' && (
        <SupportDashboard />
      )}
    </div>
  );
}
