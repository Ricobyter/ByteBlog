import React, { useEffect } from "react";

import PostHeader from "../../components/post/PostHeader";
import Header from "../../components/Header";
import PostContent from "../../components/post/PostContent";
import PostFooter from "../../components/post/PostFooter";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../store/postSlice";
import { fetchAuthorById } from "../../store/authorSlice";
import LoadingPage from "../LoadingPage";


const PostPage = () => {
  const { id } = useParams();
  const postId = id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    // dispatch(fetchAuthorById("66b7a29393aa9bc912984606"));
  }, [dispatch, id]);

  const {
    isPostLoading,
    postTitle,
    postImage,
    postDescription,
    postContent,
    postCategory,
    postAuthorId,
    postDate,
    post, 
    
  } = useSelector((state) => state.posts);


  // if(isPostLoading){
  //   return <LoadingPage />
  // }

  return (
    <div className="flex flex-col gap-6 max-w-screen justify-center items-center">
      <Header />

      <PostHeader
        title={post?.title }
        description={post?.description}
        category={post?.category}
        authorname={post?.author.name}
        authorImage={post?.author.photo}
        published = {postDate}
        postId = {post?._id}
      />
      <PostContent content={postContent} image={post?.image} />
      <div className="w-full flex justify-center items-center bg-gray-100 mt-12">
        <PostFooter />
      </div>
    </div>
  );
};

export default PostPage;
