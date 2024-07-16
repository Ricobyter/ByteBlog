import React from 'react'
import { FaUserCircle } from "react-icons/fa";

export default function Post() {
  return (
    <section className='section'>
    <div className="mt-10 flex flex-col md:flex-row h-[350px] md:h-[300px] w-full p-2 shadow-lg shadow-black rounded-md justify-between">
    <div className="h-full md:w-1/2">
      <img
        src="https://www.livemint.com/lm-img/img/2024/07/08/600x338/2-1_1720408341185_1720408352762.png"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-grow flex-col md:w-1/2 p-4">
      <h2 className="text-lg  md:text-xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        perferendis reiciendis dolores.
      </h2>
      <div className="flex gap-2 items-center mt-2">
        <FaUserCircle size={28} />
        <p className="text-gray-700">Rico</p>
      </div>
      <p className="hidden md:block mt-4 line-clamp-1 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quasi aspernatur esse deserunt id accusantium laborum consequuntur,
        deleniti obcaecati illum, debitis tempora a voluptatibus maiores.
      </p>
    </div>
  </div>
  </section>
  )
}
