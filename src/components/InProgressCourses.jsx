import React from 'react'

const InProgressCourses = ({courses}) => {
  
  return (
    <>

      <div className=" p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          {courses.map(course => (
              <div className="md:flex p-4 border ">
                  <div className="md:shrink-0">
                    <img style={{height: '200px'}} className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern building architecture"/>
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      <h3>{course.title}</h3>
                      <h4 className='pb-1 pt-1'>Due Date:  <p>{course.due_date}</p> </h4>
                      <h4 className='pb-1 pt-1'>Status:  <p>{course.status}</p> </h4>
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

export default InProgressCourses
