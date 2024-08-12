import React, { useState, useRef, useEffect } from "react";
import { GoHeart } from "react-icons/go";
import { FaRegCommentAlt } from "react-icons/fa";
import gsap from 'gsap';
import PostComments from "./PostComments";

const PostHeader = () => {
  const [showComments, setShowComments] = useState(false);
  const commentsRef = useRef(null);

  const toggleComments = () => {
    setShowComments(prev => !prev);
  };

  useEffect(() => {
    const commentsSection = commentsRef.current;

    if (showComments) {
      gsap.set(commentsSection, { display: "block" });
      gsap.fromTo(
        commentsSection,
        { width: 0 },
        { width: "380px", duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(commentsSection, {
        width: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(commentsSection, { display: "none" }) // Set display to none after animation
      });
    }
  }, [showComments]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commentsRef.current && !commentsRef.current.contains(event.target) && !event.target.closest('.fa-reg-comment-alt')) {
        setShowComments(false); // Close the comments section
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative max-w-[800px] flex flex-col">
      <div className="flex-col">
        <h1 className="text-5xl font-semibold font-rubik">
          Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <p className="text-2xl font-semibold font-lora text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="flex mt-8 font-lora gap-6 items-center">
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
            <GoHeart size="22" />
            <p className="ml-2">Likes</p>
          </div>

          <div className="ml-12 flex text-gray-500 items-center cursor-pointer" onClick={toggleComments}>
            <FaRegCommentAlt size="18" className="font-light" />
            <p className="ml-2">Comments</p>
          </div>
        </div>
        <hr />
      </div>
      {showComments && (
        <div
          ref={commentsRef}
          className="fixed top-0 right-0 h-full bg-white border-l border-gray-300 overflow-auto comment-section"
        >
          <PostComments onClose={() => setShowComments(false)} />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
