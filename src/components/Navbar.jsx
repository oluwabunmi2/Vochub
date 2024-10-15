import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { logout } from '../services/apiService'; // Import the logout function

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white ">
      {/* Left: Search Input */}
      <div className="relative flex items-center w-full space-x-2 md:w-auto">
        <FiSearch size={18} className="absolute ml-4 text-gray-400" />
        <input
          type="text"
          placeholder={t('Search...')}
          className="w-full md:w-64 px-8 py-1 font-inter  border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#D1EC79] bg-white "
        />
      </div>

      {/* Right: Icons and Profile */}
      <div className="relative flex items-center ml-4 space-x-4 md:ml-0">
        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="flex items-center space-x-2 text-gray-400">
          <MdOutlineLanguage size={20} />
          <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
        </button>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <button className="relative flex items-center space-x-2 text-gray-400">
            <IoIosNotificationsOutline size={32} />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 h-4 w-4 bg-[#D1EC79] rounded-full flex items-center justify-center text-xs text-gray-700 font-inter">
              3
            </span>
          </button>
        </div>

        {/* Profile Picture with Dropdown */}
        <div className="relative">
          <FaUserCircle 
            size={30} 
            className="text-gray-700 cursor-pointer" 
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white border rounded-md">
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('View Profile')}
              </Link>
              <Link 
                to="/settings" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Settings')}
              </Link>
              <div 
                className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={handleLogout}
              >
                {t('Logout')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
