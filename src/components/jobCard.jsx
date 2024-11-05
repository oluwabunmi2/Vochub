import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function JobCard({ title, company, location, type, postedDate, description, jobId }) {
  return (
    <div className="p-4 transition-shadow duration-150 bg-white rounded-lg shadow-lg cursor-pointer font-inter hover:shadow-xl">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{postedDate}</p>
      </div>
      <p className="mt-2 text-gray-700">{company}</p>
      <p className="text-sm text-gray-500">{location} - {type}</p>
      <div 
        className="mt-4 text-gray-700" 
        dangerouslySetInnerHTML={{ __html: description.slice(0, 100) + '...' }}
      />
      <div className="flex justify-between mt-4">
        <Link 
          to={`/jobs/${jobId}`} 
          className="text-[#002266] font-semibold hover:underline text-sm"
        >
          View Details
        </Link>
        <a 
          href="https://linkedin.com" 
          className="flex items-center text-[#0077b5] hover:underline text-xs"
        >
          <FaLinkedin size={18} className="mr-2" /> Apply via LinkedIn
        </a>
      </div>
    </div>
  );
}

export default JobCard;