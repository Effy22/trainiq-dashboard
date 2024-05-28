import React, { useState } from 'react';
import { HomeIcon, UsersIcon, ClipboardListIcon, ChartBarIcon, BookOpenIcon, ClipboardCheckIcon, StarIcon } from '@heroicons/react/outline';

const Sidebar = ({ setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-full p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button className="lg:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      <ul className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <li className="mb-4 flex items-center">
          <HomeIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('general-stats')} className="text-lg button-opaque-bg">General Stats</button>
        </li>
        <li className="mb-4 flex items-center">
          <UsersIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('teams')} className="text-lg button-opaque-bg">Teams</button>
        </li>
        <li className="mb-4 flex items-center">
          <ChartBarIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('activity-hours')} className="text-lg button-opaque-bg">Activity Hours</button>
        </li>
        <li className="mb-4 flex items-center">
          <ClipboardListIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('skills-in-development')} className="text-lg button-opaque-bg">Skills In Development</button>
        </li>
        <li className="mb-4 flex items-center">
          <BookOpenIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('in-progress-courses')} className="text-lg button-opaque-bg">In Progress Courses</button>
        </li>
        <li className="mb-4 flex items-center">
          <ClipboardCheckIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('upcoming-courses')} className="text-lg button-opaque-bg">Upcoming Courses</button>
        </li>
        <li className="mb-4 flex items-center">
          <StarIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('top-employees')} className="text-lg button-opaque-bg">Top Employees</button>
        </li>
        <li className="mb-4 flex items-center">
          <StarIcon className="w-6 h-6 mr-2" />
          <button onClick={() => setActiveSection('top-skills')} className="text-lg button-opaque-bg">Top Skills</button>
        </li>
        <li className="mb-4 flex items-center">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <UsersIcon className="w-6 h-6 mr-2" />
            Create New Team
          </button>
        </li>
        <li className="flex items-center">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <UsersIcon className="w-6 h-6 mr-2" />
            Add New Employee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
