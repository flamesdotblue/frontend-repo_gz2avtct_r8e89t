import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, Info, Network, Lock, Bug, Printer, HelpCircle } from 'lucide-react';

const gradient = 'from-[#7b42f6] to-[#d634f5]';

const issueOptions = [
  { key: 'Network Issue', icon: Network },
  { key: 'Login Problem', icon: Lock },
  { key: 'System Error', icon: Bug },
  { key: 'Printer Issue', icon: Printer },
  { key: 'Other', icon: HelpCircle },
];

export default function RaiseTicket() {
  const [issueType, setIssueType] = useState('Network Issue');
  const [description, setDescription] = useState('');

  return (
    <div className="bg-[#f8f9fc] min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Welcome, John Doe!</h2>
            <p className="text-gray-600">Need IT support? Create a ticket and we’ll help you right away.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100">
            <div className={`px-6 py-4 rounded-t-2xl text-white font-semibold bg-gradient-to-r ${gradient}`}>Raise a New Ticket</div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Issue Type</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {issueOptions.map(({ key, icon: Icon }) => (
                    <label key={key} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#7b42f6] cursor-pointer">
                      <input type="radio" name="issueType" className="text-[#7b42f6]" checked={issueType === key} onChange={() => setIssueType(key)} />
                      <Icon className={`h-4 w-4 text-[#7b42f6]`} />
                      <span className="text-sm font-medium text-gray-800">{key}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Please describe your issue in detail..." rows={5} className="w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-[#7b42f6] focus:border-transparent" />
              </div>

              <button className={`inline-flex items-center px-5 py-2.5 rounded-lg text-white font-medium shadow-sm bg-gradient-to-r ${gradient}`}>
                Submit Ticket
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h4 className="font-semibold mb-3">Quick Tips</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {['Be specific about your issue','Include error messages','Mention when it started','Check “My Tickets” for updates'].map((tip) => (
                <li key={tip} className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> {tip}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h4 className="font-semibold mb-3">Need Immediate Help?</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p className="flex items-center"><Mail className="h-4 w-4 text-[#7b42f6] mr-2" /> IT Help Desk – support@company.com</p>
              <p className="flex items-center"><Phone className="h-4 w-4 text-[#7b42f6] mr-2" /> Phone Support – +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
