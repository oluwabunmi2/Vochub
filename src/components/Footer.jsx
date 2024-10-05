import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-light-body dark:bg-dark-body text-light-text dark:text-slate-50 py-8">
      <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="font-montserrat-alt text-lg font-semibold mb-2 text-[#] dark:text-slate-50 text-light-text">
            Vocational <span className="text-[#D1EC79] dark:text-gray-300">Hub</span>
          </h1>
          <p className="text-sm text-gray-50 dark:text-gray-400 font-inter">
            {t('Empowering people with vocational skills for a brighter future.')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left font-inter">
          <Link to="/" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('home')}</Link>
          <Link to="/services" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('services')}</Link>
          <Link to="/portfolio" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('portfolio')}</Link>
          <Link to="/contact" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('contact')}</Link>
        </div>

        {/* Social Media Icons */}
      <div className='flex items-center gap-4'>
      <button className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '><FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Login</button>
      <button className='border text-white flex items-center gap-2 px-4 py-2 rounded-full '><GiArchiveRegister size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Register</button>
      </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p className='font-inter text-white'>© {new Date().getFullYear()} Vocational Hub. {t('All rights reserved.')}</p>
      </div>
    </footer>
  );
}

export default Footer;