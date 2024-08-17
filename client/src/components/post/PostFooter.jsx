import React from "react";
import { LuMailPlus } from "react-icons/lu";
import MoreAuthorPost from "./MoreAuthorPost";
import MorePosts from "./MorePosts";
import { useSelector } from "react-redux";
const PostFooter = () => {
  const {
    isPostLoading,
    postTitle,
    postImage,
    postDescription,
    postContent,
    postCategory,
    postAuthorId,
    postDate,
    post
  } = useSelector((state) => state.posts);
  return (
    <div className="w-[750px] bg-transparent py-24">
      <div className="flex flex-col w-full">
        <div className="ml-2">
          <img
            src={post?.author.photo}
            alt=""
            className="h-[70px] w-[70px] rounded-full"
          />
        </div>

        <div className="flex mt-6 justify-between w-full items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-rubik">Written by {post?.author.name}</h1>
            <p className="text-lg mt-2 text-gray-700">Author's Follower Count</p>
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

        <div className="mt-1 text-md">
            <p className="text-gray-500"> {post?.author.bio}</p>
        </div>

      </div>

      {/* More from Author  */}
      <div className="w-[800px]">
        <MoreAuthorPost />
        <MorePosts />
      </div>
      
    </div>
  );
};

export default PostFooter;
