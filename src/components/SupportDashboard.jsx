import React from 'react';
import { CircleDot, Clock, CheckCircle2, ListChecks, PencilLine, BadgeCheck, User, StickyNote } from 'lucide-react';

const gradient = 'from-[#7b42f6] to-[#d634f5]';

function Stat({ title, value, icon: Icon, desc, bgClass, textClass }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center">
      <div className={`h-10 w-10 mr-3 rounded-lg ${bgClass} ${textClass} flex items-center justify-center`}> 
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default function SupportDashboard() {
  return (
    <div className="bg-[#f8f9fc] min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">IT Support Dashboard</h2>
          <p className="text-gray-600">Manage and resolve all support tickets.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Stat title="Open Tickets" value="0" icon={Clock} desc="Awaiting response" bgClass="bg-yellow-100" textClass="text-yellow-600" />
          <Stat title="In Progress" value="0" icon={CircleDot} desc="Being worked on" bgClass="bg-blue-100" textClass="text-blue-600" />
          <Stat title="Resolved" value="1" icon={CheckCircle2} desc="Successfully closed" bgClass="bg-green-100" textClass="text-green-600" />
          <Stat title="Total Tickets" value="1" icon={ListChecks} desc="All time" bgClass="bg-purple-100" textClass="text-purple-600" />
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100">
          <div className={`px-6 py-4 rounded-t-2xl text-white font-semibold bg-gradient-to-r ${gradient}`}>All Tickets</div>
          <div className="p-6">
            {/* Ticket Card */}
            <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">Login</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">Resolved</span>
                </div>
                <button className={`inline-flex items-center px-3 py-1.5 rounded-md text-white bg-gradient-to-r ${gradient} text-sm shadow-sm`}>
                  <PencilLine className="h-4 w-4 mr-1" /> Edit Ticket
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-1">
                  <p className="flex items-center"><User className="h-4 w-4 mr-2 text-gray-500" /> <span className="font-medium">Employee:</span> John Doe</p>
                  <p className="flex items-start"><StickyNote className="h-4 w-4 mr-2 text-gray-500 mt-0.5" /> <span className="font-medium mr-1">Description:</span> today morning i was try to login by facing issue.</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center"><BadgeCheck className="h-4 w-4 mr-2 text-gray-500" /> <span className="font-medium mr-1">Comment:</span> done due to cache</p>
                  <p className="text-gray-500">Oct 26, 2025, 3:22 PM • Ticket ID: #0001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
