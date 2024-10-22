// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './routes/i18n'; // Import i18n configuration
import Home from './pages/Home';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Dashboard from './pages/dashboard';
import Enrollment from './pages/Enrollment';
import Courses from './pages/Courses';
// import PrivateRoute from './components/PrivateRoute'; 
import GoogleCallback from './components/GoogleCallback';
import Jobs from './pages/jobs';
import JobApplicationForm from './pages/JobApplicationForm';
import JobDetails from './pages/JobDetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // If AOS is used, ensure it's refreshed here
      // AOS.refresh();
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            // <AuthRedirect>
              <Login />
            // </AuthRedirect>
          }
        />
        <Route
          path="/register"
          element={
            // <AuthRedirect>
              <Register />
            // </AuthRedirect>
          }
        />
        <Route path="/auth/callback" element={<GoogleCallback />} /> {/* Handle Google callback */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Home />} />
        {/* Comment out PrivateRoute */}
        {/* <Route path="/dashboard" element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/enroll/:title" element={<Enrollment />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/jobs/:jobId/apply" element={<JobApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;