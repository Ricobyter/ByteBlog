import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/postSlice";
export default function Post({id}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { posts, isPostLoading, isErrorPost, error } = useSelector((state) => state.posts);

  const handleClick = () => {
    navigate(`/postpage/${id}`); // Navigate with the ID as a URL parameter
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <>
    { posts.map((post) => (
    <div
      className="post flex  w-[720px]  mt-10 border-b-2 pb-6 cursor-pointer"
      onClick={() => navigate(`/postpage/${post._id}`)}
      key={post._id}
    >
      <div className="w-4/6">
        <div className="flex  items-center gap-2">
          <FaUserCircle size="16" />
          <h1 className="text-md ">{post.author.name} in Category</h1>
        </div>

        <div className="mt-2">
          <h1 className="text-3xl font-rubik font-medium mb-1">
            {truncateText(post.title, 7)}
            {/* {post.title} */}
          </h1>
          <p className="text-lg font-lora text-gray-500">
            {post.description}
          </p>
        </div>

        <div className="flex justify-between items-center px-2 mt-6">
          <p> {new Date(post.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}</p>
          <div className="flex items-center gap-2">
            <GoHeart />
            <p>654</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCommentAlt />
            <p>65</p>
          </div>
        </div>
      </div>
      <div className="w-2/6 flex justify-end items-center">
        <img
          src={post.image}
          alt=""
          className="w-2/3 h-2/3 bg-cover "
        />
      </div>
      <div></div>
    </div>
    ))
}
    </>
  );
}
