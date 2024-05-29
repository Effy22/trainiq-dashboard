import { UsersIcon, CheckIcon, ChartBarIcon} from '@heroicons/react/outline';
import React from 'react';


const GeneralStats = ({ totalEmployees, totalCompletedCourses, averageEmployeeScore }) => {
  return (
    <>
    <h3 className="text-2xl mb-4 p-8">General Stats</h3>
    <div className='flex justify-center'>
      <img src="https://trainiq.ai/assets/img/front-pages/landing-page/faq-boy-with-logos.webp" style={{height: ' 250px'}} alt="" />
    </div>
    
      <div className="pt-9 general-stats grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
      
      <div className="stat bg-white p-4 rounded shadow items-center	">
        <UsersIcon className="w-9 h-10 mr-2 text-blue-700" />
        <h3 className="text-xl">Total Employees</h3>
        <p className="text-2xl">{totalEmployees}</p>
      </div>
      <div className="stat bg-white p-4 rounded shadow">
        <CheckIcon className="w-9 h-10 mr-2 text-blue-700" />
        <h3 className="text-xl">Completed Courses</h3>
        <p className="text-2xl">{totalCompletedCourses}</p>
      </div>
      <div className="stat bg-white p-4 rounded shadow">
      <ChartBarIcon className="w-9 h-10 mr-2 text-blue-700" />
        <h3 className="text-xl">Average Employee Score</h3>
        <p className="text-2xl">{averageEmployeeScore}</p>
      </div>
    </div>
    </>
  
  );
};

export default GeneralStats;

