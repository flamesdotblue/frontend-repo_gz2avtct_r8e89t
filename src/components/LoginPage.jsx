import React from 'react';
import { ShieldCheck, Zap, Clock, CheckCircle2, Mail, LockKeyhole, Ticket } from 'lucide-react';

const gradient = 'from-[#7b42f6] to-[#d634f5]';

export default function LoginPage({ onSignIn }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center text-white`}>
              <Ticket size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">IT Assist</h1>
              <p className="text-sm text-gray-500">Welcome to IT Assist</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome to IT Assist</h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            Your one-stop solution for IT support and ticket management. Fast, efficient, and always here to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`h-9 w-9 rounded-md bg-gradient-to-r ${gradient} text-white flex items-center justify-center mb-2`}>
                <Zap size={18} />
              </div>
              <p className="font-medium">Quick Response</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`h-9 w-9 rounded-md bg-gradient-to-r ${gradient} text-white flex items-center justify-center mb-2`}>
                <Clock size={18} />
              </div>
              <p className="font-medium">24/7 Tracking</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`h-9 w-9 rounded-md bg-gradient-to-r ${gradient} text-white flex items-center justify-center mb-2`}>
                <ShieldCheck size={18} />
              </div>
              <p className="font-medium">Secure & Reliable</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="font-semibold mb-2">Demo Credentials</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Employee → john.doe@company.com / employee123</p>
              <p>IT Support → support@company.com / support123</p>
            </div>
          </div>
        </div>

        {/* Right Section - Sign In Card */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Sign In</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center"><Mail size={16} className="mr-2" /> Email Address</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-[#7b42f6] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center"><LockKeyhole size={16} className="mr-2" /> Password</label>
                <input type="password" placeholder="••••••••" className="w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-[#7b42f6] focus:border-transparent" />
              </div>
              <button onClick={onSignIn} className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium shadow-sm bg-gradient-to-r ${gradient}`}>
                Sign In
              </button>
              <p className="text-center text-sm text-gray-500">Need help? Contact IT Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
