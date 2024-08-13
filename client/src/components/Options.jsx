import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaEdit, FaBookmark, FaSignOutAlt } from 'react-icons/fa';

const Options = () => {
  return (
    <div className="absolute bg-white border border-gray-300 shadow-lg rounded-md mt-2 py-4 px-2 w-[180px]">
      <Link to='/profile'>
        <button className="flex items-center text-gray-700 py-1 px-2 w-full text-left cursor-pointer hover:bg-gray-100 rounded-md">
          <FaUser className="mr-2 text-lg" />
          Profile
        </button>
      </Link>

      <Link to='/usersecurity'>
        <button className="flex items-center text-gray-700 py-1 px-2 w-full text-left cursor-pointer hover:bg-gray-100 rounded-md">
          <FaCog className="mr-2 text-lg" />
          Settings
        </button>
      </Link>

      <Link to='/createpost'>
        <button className="flex items-center text-gray-700 py-1 px-2 w-full text-left cursor-pointer hover:bg-gray-100 rounded-md">
          <FaEdit className="mr-2 text-lg" />
          Write
        </button>
      </Link>

      <Link to='/userbookmarks'>
        <button className="flex items-center text-gray-700 py-1 px-2 w-full text-left cursor-pointer hover:bg-gray-100 rounded-md">
          <FaBookmark className="mr-2 text-lg" />
          Bookmarks
        </button>
      </Link>

      <button 
        className="flex items-center text-gray-700 py-1 px-2 w-full text-left cursor-pointer hover:bg-gray-100 rounded-md"
        onClick={() => { /* Handle logout logic here */ }}
      >
        <FaSignOutAlt className="mr-2 text-lg" />
        Logout
      </button>
    </div>
  );
};

export default Options;
