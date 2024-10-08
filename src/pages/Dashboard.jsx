import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div className="flex bg-[#f9f9f9]">
      {/* Sidebar */}
      <div className="lg:w-[200px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6 ">
          <h1>Welcome to your Dashboard</h1>
          {/* Add more dashboard content here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;