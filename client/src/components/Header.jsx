import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Options from './Options';

export default function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const userCircleRef = useRef(null);
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target) &&
        userCircleRef.current && !userCircleRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      gsap.set(optionsRef.current, { display: "block" }); // Ensure display is set before animation
      gsap.fromTo(
        optionsRef.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(optionsRef.current, {
        opacity: 0,
        x: 10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(optionsRef.current, { display: "none" }) // Set display to none after animation
      });
    }
  }, [showOptions]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='px-6 py-2 flex justify-between w-full'>
      <div className='flex gap-8 items-center justify-center'>
        <div className='cursor-pointer' onClick={() => navigate("/")}>
          <h1 className='text-3xl font-bold font-platypi'>BLOGHUB</h1>
        </div>

        <div className='hidden md:flex gap-2 items-center w-[18rem] bg-gray-100 rounded-2xl px-3 py-1'>
          <FaSearch color='black' size='16' className='font-extralight'/>
          <input type='text' placeholder='Search' className='outline-none bg-transparent text-gray-700 font-light'/>
        </div>
      </div>

      <div className='font-lora flex gap-8 justify-center items-center'>
        <div className='hidden md:flex gap-2 text-gray-700 hover:text-gray-800 items-center text-lg font-lora cursor-pointer'>
          <FaPenToSquare size="18" className='font-light'/>
          <p className='font-lora'>Write</p>
        </div>

        <div className='relative cursor-pointer' ref={userCircleRef} onClick={toggleOptions}>
          <FaUserCircle color='gray' size="26"/>
          {showOptions && (
            <div
              ref={optionsRef}
              className="absolute right-[145px] top-4/5 transform -translate-x-2 translate-y-1 bg-white mt-2 shadow-lg rounded-md"
              style={{ width: userCircleRef.current ? `${userCircleRef.current.offsetWidth}px` : 'auto' }} // Default to 'auto' if the ref is not available
            >
              <Options />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
