import React from 'react';
import { LayoutDashboard, Ticket, User, ChevronDown } from 'lucide-react';

const gradient = 'from-[#7b42f6] to-[#d634f5]';

export default function Navbar({ onNavigate, context }) {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className={`h-8 w-8 rounded-md bg-gradient-to-r ${gradient} flex items-center justify-center text-white`}>
              <Ticket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">IT Assist</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <button onClick={() => onNavigate('dashboard')} className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
            </button>
            <button onClick={() => onNavigate('tickets')} className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <Ticket className="mr-2 h-4 w-4" /> My Tickets
            </button>
            <button onClick={() => onNavigate('reviews')} className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <User className="mr-2 h-4 w-4" /> Reviews
            </button>
            <div className="relative">
              <button className={`inline-flex items-center px-3 py-1.5 rounded-md bg-gradient-to-r ${gradient} text-white shadow-sm`}> 
                <span className="mr-2">{context?.label || 'User'}</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
        {context?.sub && (
          <div className={`mb-4 -mt-3 inline-block px-3 py-1 text-xs rounded-md text-white bg-gradient-to-r ${gradient}`}>
            {context.sub}
          </div>
        )}
      </div>
    </nav>
  );
}
