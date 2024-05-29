import React from 'react';

const SkillsDevelopment = ({ skills }) => {
  if (!skills) {
    return <div>No skills data available.</div>;
  }

  return (
    <div className="skills-development mb-4 p-8 container mx-auto h-dvs flex flex-wrap">
      {skills.map(skill => (
        <div key={skill.skill} className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="skill p-4 rounded shadow mb-4 bg-blue-500 max-w-xs">
            <h3 className="text-2xl text-white">{skill.skill}</h3>
            <p className="text-gray-100">{skill.description}</p>
            <p className="text-xl mt-4 text-white font-light">Employee Count:</p> <p className="text-xl mt-2 text-white" >{skill.employees}</p>
        
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDevelopment;
