import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <section className='section w-full'>

    
    <header className="flex justify-between w-[100%]">
        <div>

    <Link to = "/" className='text-xl font-bold'>BlogHub</Link>
        </div>
    <nav className="flex gap-5 text-md">
      <Link to = '/login' className="hover:text-gray-700 transition-all">
        Login
      </Link>
      <Link to ='/profile'>
      Profile
      </Link>
    </nav>
    <hr className="text-gray-400 bg-gray-600 mt-2" />
  </header>
  </section>
  )
}
