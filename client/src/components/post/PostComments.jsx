import React from "react";
import { IoClose } from "react-icons/io5";

const PostComments = ({onClose}) => {
  return (
    <div className="fixed top-0 right-0 h-full bg-white border-l border-gray-300 overflow-auto" style={{ width: "380px" }}>
        <div className="flex justify-between p-4 items-center">

      <h2 className="text-xl font-semibold ">Reviews</h2>
      <IoClose size="22" onClick={onClose} className="cursor-pointer text-gray-600 hover:text-black hover:scale-105"/>
        </div>


    </div>
  );
};

export default PostComments;
