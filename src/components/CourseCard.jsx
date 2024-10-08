import React from 'react';

const CourseCard = ({ image, title, category, enrollments, authorImg, authorName }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-700">{enrollments} enrollments</p>
      </div>
      <div className="flex items-center mt-4">
        <img 
          src={authorImg} 
          alt={authorName} 
          className="w-10 h-10 rounded-full"
        />
        <p className="ml-3 text-gray-700">{authorName}</p>
      </div>
    </div>
  );
}

export default CourseCard;