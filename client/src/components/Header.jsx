import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  return (
<header className='px-6 py-2 flex justify-between w-full'>
  <div className='flex gap-8 items-center justify-center'>
    <div onClick={()=> navigate("/")}>
  <h1 className='text-3xl font-bold font-platypi'>BLOGHUB</h1>
    </div>

  <div className='flex gap-2 items-center w-[18rem] bg-gray-100 rounded-2xl px-3 py-1'>
  <FaSearch color='black' size='16' className='font-extralight'/>
    <input type='text' placeholder='Search' className='outline-none bg-transparent text-gray-700 font-light'/>
  </div>
  </div>

  <div className='font-lora flex gap-8 justify-center items-center'>
    <div className='flex gap-2 text-gray-700 hover:text-gray-800 items-center text-lg font-lora cursor-pointer'>
    <FaPenToSquare size="18" className='font-light'/>
    <p className='font-lora'>Write</p>
    </div>

<div>
  <FaUserCircle color='gray' size="26"/>
</div>

    <div>

    </div>
    {/* <button className=''>
      Login
    </button>
    <button className=''>
      Signup
    </button> */}

  </div>
  
</header>
  )
}
