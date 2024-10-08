import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Example course data
  const courses = [
    {
      image: '/course1.jpg',
      title: 'Graphic Design',
      category: 'Development',
      enrollments: 1200,
      authorImg: '/author1.jpg',
      authorName: 'Abel Mark',
    },
    // Add more courses here...
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      <div className="lg:w-[200px]">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Courses</h1>
          
          <SearchBar onSearch={setSearchTerm} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                image={course.image} 
                title={course.title}
                category={course.category}
                enrollments={course.enrollments}
                authorImg={course.authorImg}
                authorName={course.authorName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;