import React from 'react'

import PostHeader from '../../components/post/PostHeader'
import Header from '../../components/Header'
import PostContent from '../../components/post/PostContent'
import PostFooter from '../../components/post/PostFooter'

const PostPage = () => {
  return (
    <div className='flex flex-col gap-6 max-w-screen justify-center items-center'>
        <Header/>

      <PostHeader />
      <PostContent />
      <div className='w-full flex justify-center items-center bg-gray-100 mt-12'>
        <PostFooter/>
        
      </div>
    </div>
  )
}

export default PostPage
