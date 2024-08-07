import React from "react";
import { GoHeart } from "react-icons/go";
import { FaRegCommentAlt } from "react-icons/fa";

const PostHeader = () => {
  return (
    <div className="max-w-[800px] flex flex-col">
      <div className="flex-col">
        <h1 className="text-5xl font-semibold font-rubik">
          Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <p className="text-2xl font-semibold font-lora text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="flex mt-8  font-lora gap-6 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
            alt=""
            className="h-[45px] w-[45px] rounded-full bg-cover"
          />
          <div className="flex flex-col">
            <p className="font-lora text-gray-700 font-medium">
              Author name{" "}
              <span>
                <button className="text-blue-600 font-lora ml-4 text-md">
                  Follow
                </button>
              </span>
            </p>
            <div className="flex text-xs mb-2">
              <p className="text-xs text-gray-600">
                Published in yada Yada Category
              </p>
              <p className="ml-6 text-gray-700">22 July 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <hr />
        <div className="flex mt-2 mb-2">
          <div className="flex text-gray-500">
            <GoHeart size="22" className="" />
            <p className="ml-2 ">Likes</p>
          </div>

          <div className="ml-12 flex text-gray-500 items-center">
            <FaRegCommentAlt size="18" className=" font-light" />
            <p className="ml-2">Comments</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PostHeader;
