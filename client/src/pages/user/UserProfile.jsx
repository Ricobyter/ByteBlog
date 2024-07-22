import React from 'react'
import ProfileNav from '../../components/ProfileNav'

const UserProfile = () => {
  return (
    <div className='h-screen w-screen flex md:gap-8 justify-center items-center '>
      <ProfileNav />
      <div className='h-[55vh] rounded-lg shadow-lg relative w-[40vw] px-6'>
        <h1 className='relative text-6xl top-[-20px]'>Profile</h1>
        <div>
            <div className='flex-col justify-between w-2/3'>
                <input type='text' placeholder='Name' id='name' className='border-b-2 w-[15vw] outline-none' />
                <input type='text' placeholder='Name' id='name' className='border-b-2 w-[15vw] outline-none' />
                <input type='text' placeholder='Name' id='name' className='border-b-2 w-[15vw] outline-none' />
                <input type='text' placeholder='Name' id='name' className='border-b-2 w-[15vw] outline-none' />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default UserProfile
