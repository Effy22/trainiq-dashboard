import React from 'react';

const Teams = ({ teams }) => {

  const capitalizeFirstLetter = (sentence) => {
    const firstSentence = sentence.split(' ')[0];
    const capitalizedFirstWord = firstSentence.charAt(0).toUpperCase() + firstSentence.slice(1);
    const restOfSentence = sentence.slice(firstSentence.length);
    return capitalizedFirstWord + restOfSentence;
  };

  if (!teams) {
    return <div>No teams data available.</div>;
  }

  return (
    <div className="flex-1 teams mb-4 w-4/5">
      {teams.map(team => (
        <div key={team.title} className="team bg-white p-4 rounded shadow mb-4">
          <h3 className="text-2xl">{team.title}</h3>
          <p className="text-gray-500">{capitalizeFirstLetter(team.description)}</p>
          <h4 className="text-xl mt-4">Employees</h4>
          <ul>
            {team.employees.map((employee, empIndex) => (
              <li key={empIndex} className="p-2 border-b last:border-none">
                <p className="font-semibold text-gray-700 ">{employee.name} - {employee.title}</p>
                <p>Score: {employee.current_score}</p>
                <p>Lessons Taken: {employee.lessons_taken}</p>
                <p>Skills Being Developed: {employee.skills_being_developed.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Teams;
