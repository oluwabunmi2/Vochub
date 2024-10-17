/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from "react-icons/fc";
import { register, googleAuth } from '../../services/apiService'; // Import the register and googleAuth functions
import Loader from '../../components/Loader/Loader'; // Import the Loader component

function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const validateForm = () => {
    let formErrors = {};

    if (!formData.username) {
      formErrors.username = t('Username is required');
    }

    if (!formData.email) {
      formErrors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t('Email is invalid');
    }

    if (!formData.password) {
      formErrors.password = t('Password is required');
    } else if (formData.password.length < 6) {
      formErrors.password = t('Password must be at least 6 characters');
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = t('Passwords do not match');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Show loader
      try {
        const data = await register(
          formData.username,
          formData.email,
          formData.password,
          formData.confirmPassword
        );

        if (data.token) {
          console.log(data, data.token);
          localStorage.setItem('token', data.token);
          window.history.replaceState(null, '', '/dashboard');
          navigate('/dashboard');
        }
      } catch (error) {
        if (error.errors) {
          setErrors(error.errors);
        } else {
          setApiError(error.message || 'Registration failed');
        }
      } finally {
        setLoading(false); // Hide loader
      }
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true); // Show loader
    try {
      await googleAuth();
    } catch (error) {
      setApiError(error.message || 'Google authentication failed');
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {loading && <Loader />} {/* Show loader when loading */}
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-md">
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-slate-50 font-montserrat-alt">
            {t('Create your account')}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            {t('Already have an account?')} <Link to="/login" className="font-medium text-[#95b627] hover:text-[#b8d865]">{t('Login')}</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister} noValidate>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">{t('Username')}</label>
              <div className="relative">
                <FaUser className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.username ? 'border-red-500' : 'border-gray-300 border-solid'
                  } dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Username')}
                />
              </div>
              {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t('Email address')}</label>
              <div className="relative">
                <FaEnvelope className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 border-solid'
                  } dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Email address')}
                />
              </div>
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">{t('Password')}</label>
              <div className="relative">
                <FaLock className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300 border-solid'
                  } dark:border-gray-700 placeholder-gray-800 dark:bg-[#222222] bg-white dark:text-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Password')}
                />
              </div>
              {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">{t('Confirm Password')}</label>
              <div className="relative">
                <FaLock className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300 border-solid'
                  } dark:border-gray-700 placeholder-gray-800 dark:bg-[#222222] bg-white dark:text-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Confirm Password')}
                />
              </div>
              {errors.confirmPassword && <p className="mt-2 text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>
          </div>

          {apiError && <p className="mt-2 text-xs text-red-500">{apiError}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#D1EC79] hover:bg-[#b8d865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1EC79]"
            >
              {t('Register')}
            </button>
            <span
              onClick={handleGoogleAuth}
              className="flex items-center justify-center w-full gap-2 py-2 mt-2 font-medium text-center text-black border rounded cursor-pointer"
            >
                <FcGoogle size={24} />
              {t('Continue with Google')}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
