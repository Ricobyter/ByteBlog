import React from "react";
import { LuMailPlus } from "react-icons/lu";
const PostFooter = () => {
  return (
    <div className="w-[800px] bg-transparent py-24">
      <div className="flex flex-col w-full">
        <div className="ml-2">
          <img
            src="https://images.pexels.com/photos/3064714/pexels-photo-3064714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-[70px] w-[70px] rounded-full"
          />
        </div>

        <div className="flex mt-6 justify-between w-full items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-rubik">Written by Author</h1>
            <p className="text-lg mt-2 text-gray-700">Author's Foller Count</p>
          </div>

          <div className="flex gap-6 ">
            <button className="bg-green-500 text-white px-3 py-1 rounded-2xl text-lg">
              Follow
            </button>
            <button className="p-2 text-white text-xl bg-green-500 rounded-full">
              <LuMailPlus />
            </button>
          </div>
        </div>

        <div className="mt-3 text-md">
            <p> Authro's Bio Lorem, ipsum dolor.</p>
        </div>

        <hr  className="mt-8"/>
      </div>

      {/* More from Author  */}
      
    </div>
  );
};

export default PostFooter;
