import React from "react";
import { FaRegMessage ,  FaHeart} from "react-icons/fa6";

const MorePosts = () => {
  return (
    <div className="w-full mt-16">
      <h1 className="text-lg font-rubik mb-8 "> More Posts</h1>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        <div className="w-full h-[420px] flex flex-col">
          <img
            src="https://images.pexels.com/photos/27583783/pexels-photo-27583783/free-photo-of-a-classic-yellow-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="h-1/2 w-full object-cover"
          />

          <div className="flex mt-4 items-center gap-4">
            <img
              src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[30px] w-[30px] object-cover rounded-full ml-2"
            />
            <p className="text-lg font-lora">Author </p>
          </div>

          <div className="px-2 mt-3">
            <p className="text-xl font-semibold font-lora">
              Title Lore ipsum dolor sit amet consectetur.
            </p>
            <p className="mt-1">
              Description Lorem ipsum dolor sit amet consectetur Koiu.
            </p>
          </div>

          <div className="flex justify-between px-2 mt-4">
            <div className="flex gap-4 items-center">
              <p className="text-xs text-gray-500">July 27</p>
              <p className="flex items-center">
                <FaRegMessage size="14" className="text-gray-400" />{" "}
                <span className="text-xs text-gray-500 ml-2">Comm</span>
              </p>
              <p className="flex items-center">
                <FaHeart size="14" className="text-gray-400" />{" "}
                <span className="text-xs text-gray-500 ml-2">Comm</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[420px] flex flex-col">
          <img
            src="https://images.pexels.com/photos/27583783/pexels-photo-27583783/free-photo-of-a-classic-yellow-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="h-1/2 w-full object-cover"
          />

          <div className="flex mt-4 items-center gap-4">
            <img
              src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[30px] w-[30px] object-cover rounded-full ml-2"
            />
            <p className="text-lg font-lora">Author </p>
          </div>

          <div className="px-2 mt-3">
            <p className="text-xl font-semibold font-lora">
              Title Lore ipsum dolor sit amet consectetur.
            </p>
            <p className="mt-1">
              Description Lorem ipsum dolor sit amet consectetur Koiu.
            </p>
          </div>

          <div className="flex justify-between px-2 mt-4">
            <div className="flex gap-4 items-center">
              <p className="text-xs text-gray-500">July 27</p>
              <p className="flex items-center">
                <FaRegMessage size="14" className="text-gray-400" />{" "}
                <span className="text-xs text-gray-500 ml-2">Comm</span>
              </p>
              <p className="flex items-center">
                <FaHeart size="14" className="text-gray-400" />{" "}
                <span className="text-xs text-gray-500 ml-2">Comm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorePosts;
