import React from 'react';
import Header from '../../components/Header';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";

const UserProfile = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center pt-6 pb-4  min-h-screen'>
        <div className='w-[90%] md:w-full max-w-3xl bg-white shadow-lg rounded-lg p-8'>
          <div className='flex items-center justify-center'>
            <img 
              src="https://images.unsplash.com/photo-1722842655330-e9d08c6b2b3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile"
              className='w-[170px] h-[170px] rounded-full border-4 border-gray-300'
            />
          </div>

          <form className='mt-8 flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="username" className='flex items-center text-gray-600 text-sm font-medium'>
                <FaUser className='mr-2 text-lg text-gray-600' /> <span>Username</span>
              </label>
              <input 
                id="username"
                type="text" 
                className='p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg' 
                placeholder='Enter your username' 
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='flex items-center text-gray-600 text-sm font-medium'>
                <MdEmail className='mr-2 text-xl' /> Email
              </label>
              <input 
                id="email"
                type="email" 
                className='p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg' 
                placeholder='Enter your email' 
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="about" className='flex items-center text-gray-600 text-sm font-medium'>
                <IoMdInformationCircle className='mr-2 text-xl' /> About
              </label>
              <textarea 
                id="about"
                className='p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg'
                placeholder='Tell us about yourself...'
                rows="4"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
