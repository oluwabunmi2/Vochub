import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import JobCard from '../components/jobCard';
import SearchBar from '../components/SearchBar';
import { getAllJobs } from '../services/apiService';

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        setError(error.message || 'Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-[200px] font-inter">
        <Navbar />
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold">Job Opportunities</h1>
          <SearchBar onSearch={setSearchTerm} />
          {loading ? (
            <p>Loading jobs...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  title={job.title} 
                  company={job.company}
                  location={job.location}
                  type={job.type}
                  postedDate={job.postedDate}
                  description={job.description}
                  jobId={job.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;