import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doRegisterWithEmailAndPassword } from '../../firebase/auth'; // Adjust according to your import
import { IoAlertCircleOutline } from "react-icons/io5";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please log in or use a different email.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      default:
        return 'An unknown error occurred. Please try again later.';
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0 && !isRegistering) {
      setIsRegistering(true);
      setErrorMessage(''); // Clear any existing error message
      try {
        // Log the email and password to verify inputs
        console.log('Registering with:', email, password);

        const userCredential = await doRegisterWithEmailAndPassword(email, password);
        console.log('Registration successful:', userCredential);

        // If the registration is successful, set a success message
        setSuccessMessage('Registration successful! Redirecting to login...');
        
        // After a brief delay, redirect to login page
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds for better user experience
      } catch (error) {
        // Log the error to better understand why it failed
        console.error('Registration Error:', error);

        // Set the error message if there's a Firebase authentication error
        setErrorMessage(getCustomErrorMessage(error.code || 'default'));
      } finally {
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Sign Up</h2>
        <p className="text-gray-400 mb-4 text-center">Create your account to get started</p>

        {/* Show success message if registration is successful */}
        {successMessage && (
          <p className="bg-green-500 text-md text-center mb-5 text-white p-2 rounded flex items-center gap-2 justify-center">
            <IoAlertCircleOutline /> {successMessage}
          </p>
        )}

        {/* Show error message if registration failed */}
        {errorMessage && (
          <p className="bg-red-500 text-md text-center mb-5 text-white p-2 rounded flex items-center gap-2 justify-center">
            <IoAlertCircleOutline /> {errorMessage}
          </p>
        )}

        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 focus:outline-none focus:border-[#002266] rounded-md bg-transparent"
              placeholder="example@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 focus:outline-none focus:border-[#002266] rounded-md bg-transparent"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#95b627] text-white font-semibold rounded-full hover:bg-[#001b4f] transition"
            disabled={isRegistering}
          >
            {isRegistering ? 'Registering...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <Link to="/login" className="text-[#002266] font-medium">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
