import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from "react-icons/fc";

function Register() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

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

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-md">
        <div>
          <h2 className="text-center text-3xl font-semibold dark:text-slate-50 text-gray-900 font-montserrat-alt">
            {t('Create your account')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t('Already have an account?')} <Link to="/login" className="font-medium text-[#95b627] hover:text-[#b8d865]">{t('Login')}</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}  noValidate>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">{t('Username')}</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-50" />
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
              {errors.username && <p className="text-red-500 text-xs mt-2">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t('Email address')}</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-50" />
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
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">{t('Password')}</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-50" />
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
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">{t('Confirm Password')}</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-50" />
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
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#D1EC79] hover:bg-[#b8d865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1EC79]"
            >
              {t('Register')}
            </button>
            <button
              type="submit"
              className="text-black flex items-center w-full border text-center rounded justify-center py-2 font-medium gap-2 mt-4"
            >
                <FcGoogle size={24} />
              {t('Continue with Google')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;