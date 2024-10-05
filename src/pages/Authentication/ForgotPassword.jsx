import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = t('Email is invalid');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your forgot password logic goes here (e.g., sending reset link)
      setMessage(t('If the email exists, you will receive a password reset link.'));
      setEmail(''); // Reset the email field after submission
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-md">
        <div>
          <h2 className="text-center text-3xl font-semibold dark:text-slate-50 text-gray-900 font-montserrat-alt">
            {t('Forgot Password')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t("Enter your email address and we'll send you a link to reset your password.")}
          </p>
        </div>

        {message && <p className="text-green-500 text-center">{message}</p>}

        <form className="mt-8 space-y-6" onSubmit={handleForgotPassword} noValidate>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">{t('Email address')}</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-50" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 border-solid'
                  } dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Email address')}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#D1EC79] hover:bg-[#b8d865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1EC79]"
            >
              {t('Send reset link')}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="font-medium text-[#95b627] hover:text-[#b8d865]">
            {t('Back to login')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;