import React from 'react'

const UpcomingCourses = ({courses}) => {
  
  return (
    <>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 overflow-hidden md:max-w-2xl">
          {courses.map(course => (
              <div className="md:flex p-4 border ">
                  <div className="md:shrink-0">
                    <img style={{height: '200px'}} className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern building architecture"/>
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      <h3>{course.title}</h3>
                    </div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{course.assigned_to}</a>
                    <p className="mt-2 text-slate-500">{course.description}</p>
                  </div>
                  </div>
            ))}
        </div>
      
    </>
  )
}

export default UpcomingCourses
