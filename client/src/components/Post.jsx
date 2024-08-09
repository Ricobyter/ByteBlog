import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function Post() {
  const navigate = useNavigate()
  return (
<div className='post flex  w-[720px]  mt-10 border-b-2 pb-6 cursor-pointer' onClick={()=> navigate('postpage')}>
  <div className='w-4/6'>

  <div className='flex  items-center gap-2'>
    <FaUserCircle size="16"/>
    <h1 className='text-md '>Authorname in Category</h1>
  </div>

  <div className='mt-2'>
    <h1 className='text-3xl font-rubik font-medium mb-1'>Lorem, ipsum dolor sit amet conse adipisicing elit.</h1>
    <p className='text-lg font-lora text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
  </div>

  <div className='flex justify-between items-center px-4 mt-6'>
    <p >July 27</p>
    <div className='flex items-center gap-2'>
      <GoHeart />
      <p>654</p>
    </div>
    <div className='flex items-center gap-2'>
    <FaRegCommentAlt />
    <p>65</p>
    </div>
    
  </div>

  </div>
  <div className='w-2/6 flex justify-end items-center'>
    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*vGinfeZbE4XU0Et3" alt="" className='w-2/3 h-2/3 bg-cover '/>
  </div>
<div>

</div>
</div>
  )
}
