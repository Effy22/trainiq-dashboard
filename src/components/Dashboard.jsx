import React, { useState } from 'react';
import Sidebar from './Sidebar';
import GeneralStats from './GeneralStats';
import Teams from './Teams';
import ActivityHours from './ActivityHours';
import SkillsDevelopment from './SkillsDevelopment';
import InProgressCourses from './InProgressCourses';
import UpcomingCourses from './UpcomingCourses';
import TopEmployees from './TopEmployees';
import TopSkills from './TopSkills';

const Dashboard = ({ data }) => {
  const [activeSection, setActiveSection] = useState('general-stats');

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-7 overflow-y-auto">
        {activeSection === 'general-stats' && (
          <section id="general-stats">
            <GeneralStats 
              totalEmployees={data.total_employees} 
              totalCompletedCourses={data.total_completed_courses} 
              averageEmployeeScore={data.average_employee_score} 
            />
          </section>
        )}
        {activeSection === 'teams' && (
          <section id="teams">
            <Teams teams={data.teams} />
          </section>
        )}
        {activeSection === 'activity-hours' && (
          <section id="activity-hours">
            <ActivityHours activityHours={data.activity_hours} />
          </section>
        )}
        {activeSection === 'skills-in-development' && (
          <section id="skills-in-development">
            <SkillsDevelopment skills={data.skills_in_development} />
          </section>
        )}
        {activeSection === 'in-progress-courses' && (
          <section id="in-progress-courses">
            <InProgressCourses courses={data.in_progress_courses} />
          </section>
        )}
        {activeSection === 'upcoming-courses' && (
          <section id="upcoming-courses">
            <UpcomingCourses courses={data.upcoming_courses} />
          </section>
        )}
        {activeSection === 'top-employees' && (
          <section id="top-employees">
            <TopEmployees topEmployees={data.top_employees} />
          </section>
        )}
        {activeSection === 'top-skills' && (
          <section id="top-skills">
            <TopSkills topSkills={data.top_skills} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
