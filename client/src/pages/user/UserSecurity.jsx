import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { FaLock, FaEnvelope, FaShieldAlt, FaTrash } from "react-icons/fa";

const UserSecurity = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center py-10 h-full'>
        <div className='w-[90%] max-w-3xl bg-white shadow-lg rounded-lg px-3 py-8 md:p-8'>
          <h1 className='text-2xl font-semibold text-gray-800 mb-6'>Settings</h1>

          <div className='flex flex-col gap-4'>
            <Link to="/change-password" className='flex items-center p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition'>
              <FaLock className='mr-3 text-lg text-gray-700' />
              <span className='text-gray-700'>Change Password</span>
            </Link>

            <Link to="/change-email" className='flex items-center p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition'>
              <FaEnvelope className='mr-3 text-lg text-gray-700' />
              <span className='text-gray-700'>Change Email</span>
            </Link>

            <Link to="/mfa-settings" className='flex items-center p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition'>
              <FaShieldAlt className='mr-3 text-lg text-gray-700' />
              <span className='text-gray-700'>Multi-Factor Authentication</span>
            </Link>

            <button 
              onClick={() => { /* Handle account deletion here, or navigate to a confirmation page */ }}
              className='flex items-center p-3 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 transition'
            >
              <FaTrash className='mr-3 text-lg' />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSecurity;
