import React from 'react'
import PostHeader from '../../components/post/PostHeader'
import Header from '../../components/Header'
import PostContent from '../../components/post/PostContent'

const PostPage = () => {
  return (
    <div className='flex flex-col gap-6 max-w-screen justify-center items-center'>
        <Header/>

      <PostHeader />
      <PostContent />
    </div>
  )
}

export default PostPage
