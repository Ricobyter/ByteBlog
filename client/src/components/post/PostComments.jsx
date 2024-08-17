import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsByPostId } from "../../store/commentSlice";

const PostComments = ({ onClose, postId }) => {
  const dispatch = useDispatch();
  const { comments, error } = useSelector((state) => state.comments);
  // const {
  //   isPostLoading,
  //   postTitle,
  //   postImage,
  //   postDescription,
  //   postContent,
  //   postCategory,
  //   postAuthorId,
  //   postDate,
  //   post,
  // } = useSelector((state) => state.posts);

  // const postId = {postId};

  useEffect(() => {
    if (postId) {
      dispatch(fetchCommentsByPostId(postId));
    }
  }, [dispatch, postId]);
  return (
    <div
      className="fixed top-0 right-0 h-full bg-white border-l border-gray-300 overflow-auto"
      style={{ width: "370px" }}
    >
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-semibold ">Reviews</h2>
        <IoClose
          size="22"
          onClick={onClose}
          className="cursor-pointer text-gray-600 hover:text-black hover:scale-105"
        />
      </div>

      <div className="px-4 ">
        <textarea
          name=""
          rows="3"
          id=""
          className="rounded-md w-full py-2 px-2  outline-none bg-gray-100"
          placeholder="Add a reply..."
        />
      </div>

      <hr className="my-6" />


      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div className="px-4" key={comment._id}>
            <div className="flex gap-4 items-center">
              <img
                src={comment.userId.photo || "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"}
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />
              <div className="flex flex-col gap-0">
                <h1 className="font-medium text-gray-600 text-md">
                  {comment.userId.name}
                </h1>
                <p className="text-sm font-normal text-gray-500">
                  about {comment.created_at}
                </p>
              </div>
            </div>

            <p className="font-lora font-light text-sm my-3">
              {comment.content}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <GoHeart size="18" />
                <p className="text-gray-400 font-extralight text-xs">
                  {comment.likes.length} Likes
                </p>
              </div>
              <button>Reply</button>
            </div>
            <hr className="mt-6" />
          </div>
        ))
      ) : (
        <p className="px-4 text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default PostComments;
