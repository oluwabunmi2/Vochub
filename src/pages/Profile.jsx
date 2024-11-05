// src/pages/Profile.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaCamera, FaMedal, FaFileAlt, FaSignInAlt } from 'react-icons/fa';
import { updateProfilePicture } from '../services/apiService';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    phone: user?.phone ? user?.phone : 'Phone: Not Available',
    profilePic: user?.profile_picture || 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
    badges: ['Top Learner', 'Completionist'],
    certificates: [
      { title: 'Certified Baker', date: 'Sep 15, 2024' },
      { title: 'Resin Craft Mastery', date: 'Aug 22, 2024' },
    ],
    loginHistory: [
      { date: 'Oct 20, 2024', device: 'Chrome on Windows 10' },
      { date: 'Oct 18, 2024', device: 'Firefox on Android' },
    ],
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleProfilePicUpdate = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const response = await updateProfilePicture(file);
        
        if (response.data.success) {
          // Update the profile picture in local state after a successful upload
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            profilePic: URL.createObjectURL(file),
          }));
          console.log('Profile picture updated successfully');
        }
      } catch (error) {
        console.error('Error updating profile picture:', error);
      }
    }
  };

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen font-inter">
      {/* Sidebar */}
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-[200px]">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold">Profile</h1>

          {/* Profile Info Section */}
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={userInfo.profilePic}
                  alt="Profile Pic"
                  className="object-cover w-20 h-20 rounded-full cursor-pointer"
                  onClick={() => document.getElementById('profilePicInput').click()} // Trigger file input on click
                />
                <input 
                  id="profilePicInput" 
                  type="file" 
                  className="hidden" 
                  onChange={handleProfilePicUpdate} 
                />
              </div>
              <div className="ml-6 font-inter">
                <h2 className="text-lg font-semibold text-gray-800">{userInfo.name}</h2>
                <p className="text-gray-500">{userInfo.email}</p>
                <p className="text-gray-500">{userInfo.phone}</p>
              </div>
            </div>
          </div>  

          {/* Badges Section */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Badges</h3>
            <div className="flex space-x-4">
              {userInfo.badges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 bg-[#8cd836] text-white px-4 py-2 rounded-lg shadow">
                  <FaMedal />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Certificates</h3>
            <ul className="space-y-2">
              {userInfo.certificates.map((cert, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FaFileAlt className="text-gray-500" />
                    <span>{cert.title}</span>
                  </div>
                  <span className="text-gray-500">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Login History Section */}
          <div className="p-6 mt-6 text-gray-800 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-semibold">Login History</h3>
            <ul className="space-y-2">
              {userInfo.loginHistory.map((login, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaSignInAlt className="text-gray-500" />
                    <span>{login.device}</span>
                  </div>
                  <span className="text-gray-500">{login.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;