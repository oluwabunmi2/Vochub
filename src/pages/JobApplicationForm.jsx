import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import SuccessModal from '../components/SuccessModal';

function JobApplicationForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: user.name,
    email: user.email,
    resume: null,
    linkedin: ''
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job applied:', formData);
    // Handle form submission (e.g., send data to API)
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigate('/dashboard');
    }, 5000);
  };

  return (
    <div className="max-w-2xl p-6 mx-auto mt-8 bg-white rounded font-inter">
      <Link className='flex items-center gap-2 mb-4 text-gray-800' to='/jobs'>
        <GoArrowLeft />
        Go back
      </Link>
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Apply for Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-2 bg-white border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 bg-white border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Resume</label>
          <input 
            type="file" 
            name="resume" 
            onChange={handleFileChange} 
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">LinkedIn Profile (optional)</label>
          <input 
            type="text" 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
            className="w-full p-2 bg-white border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#8cd836] text-white p-2 rounded font-semibold"
        >
          Submit Application
        </button>
      </form>
      <SuccessModal 
        isVisible={isModalVisible} 
        onClose={() => {
          setModalVisible(false);
          navigate('/dashboard');
        }} 
        title="Application Submitted" 
        message="You have successfully applied for the job. We will get back to you soon!" 
      />
    </div>
  );
}

export default JobApplicationForm;