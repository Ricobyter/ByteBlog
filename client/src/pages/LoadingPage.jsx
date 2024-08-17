import React from 'react'
import LoadingGif from '../assets/loading_gif.gif'

const LoadingPage = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <img src={LoadingGif} alt="" />
      
    </div>
  )
}

export default LoadingPage
