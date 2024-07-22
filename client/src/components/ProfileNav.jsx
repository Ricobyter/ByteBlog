import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const ProfileNav = () => {
  return (
    <div className="h-full md:h-[20rem] w-[3.6rem] text-xl">
      <nav className="flex flex-col justify-between items-center h-full bg-gradient-to-r from-orange-500 to-orange-200 ">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center justify-center font-bold h-[5rem] w-14  text-white ${isActive ? 'bg-white border-2 border-orange-400 scale-110 text-orange-600' : 'bg-transparent'} transition-transform duration-200`
          }
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/usersecurity"
          className={({ isActive }) =>
            `flex items-center justify-center font-bold h-[5rem] w-14  text-white ${isActive ? 'bg-white scale-110 text-orange-600' : 'bg-transparent'} transition-transform duration-200`
          }
        >
          <IoSettingsSharp />
        </NavLink>
        <NavLink
          to="/userworks"
          className={({ isActive }) =>
            `flex items-center justify-center font-bold h-[5rem] w-14  text-white ${isActive ? 'bg-white scale-110 text-orange-600' : 'bg-transparent'} transition-transform duration-200`
          }
        >
          <FaPenNib />
        </NavLink>
        <NavLink
          to="/signout"
          className={({ isActive }) =>
            `flex items-center justify-center font-bold h-[5rem] w-14   text-white ${isActive ? 'bg-white scale-110 text-orange-600' : 'bg-transparent'} transition-transform duration-200`
          }
        >
          <FaSignOutAlt />
        </NavLink>
      </nav>
    </div>
  );
};

export default ProfileNav;
