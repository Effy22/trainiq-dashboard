import React, { useState } from 'react';
import { HomeIcon, UsersIcon, ClipboardListIcon, ChartBarIcon, BookOpenIcon, ClipboardCheckIcon, StarIcon } from '@heroicons/react/outline';

const Sidebar = ({ setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative lg:flex">
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:w-64`}>
        <div className="flex justify-between items-center mb-6 p-4 lg:hidden">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar} className="no-bg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li className="flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('general-stats')} className="text-lg w-full button-opaque-bg text-left py-2 px-4 rounded-lg">General Stats</button>
          </li>
          <li className="flex items-center">
            <UsersIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('teams')} className="text-lg w-full text-left button-opaque-bg py-2 px-4 rounded-lg">Teams</button>
          </li>
          <li className="flex items-center">
            <ChartBarIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('activity-hours')} className=" button-opaque-bg text-lg w-full text-left py-2 px-4 rounded-lg">Activity Hours</button>
          </li>
          <li className="flex items-center">
            <ClipboardListIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('skills-in-development')} className="button-opaque-bg text-lg  w-full text-left py-2 px-4 rounded-lg">Skills In Development</button>
          </li>
          <li className="flex items-center">
            <BookOpenIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('in-progress-courses')} className="text-lg  button-opaque-bg w-full text-left py-2 px-4 rounded-lg">In Progress Courses</button>
          </li>
          <li className="flex items-center">
            <ClipboardCheckIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('upcoming-courses')} className="sidebar-button button-opaque-bg text-lg w-full text-left py-2 px-4 rounded-lg">Upcoming Courses</button>
          </li>
          <li className="flex items-center">
            <StarIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('top-employees')} className="text-lg  w-full button-opaque-bg text-left py-2 px-4 rounded-lg">Top Employees</button>
          </li>
          <li className="flex items-center">
            <StarIcon className="w-6 h-6 mr-2" />
            <button onClick={() => setActiveSection('top-skills')} className="text-lg  w-full button-opaque-bg text-left py-2 px-4 rounded-lg">Top Skills</button>
          </li>
          <li className="flex items-center">
            <UsersIcon className="w-6 h-6 mr-2" />
            <button onClick={() => alert('Create New Team clicked')} className="text-lg w-full text-left py-2 px-4 rounded-lg">Create New Team</button>
          </li>
          <li className="flex items-center">
            <UsersIcon className="w-6 h-6 mr-2" />
            <button onClick={() => alert('Add New Employee to a Team clicked')} className="text-lg w-full text-left py-2 px-4 rounded-lg">Add New Employee to a Team</button>
          </li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0  opacity-50 z-20 lg:hidden" onClick={toggleSidebar}></div>
      )}
      <button className="fixed top-4 left-4 z-40 lg:hidden no-bg" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
