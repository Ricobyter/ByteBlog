import React from 'react'
import ChooseCategory from './ChooseCategory'
import RecommendedTopics from './RecommendedTopics'

const RecentPost = () => {
  return (
    <div className='max-w-[300px] flex flex-col'>
        {/* <h1 className='text-2xl font-medium font-platypi pb-2'>Popular Posts</h1>
        <hr /> */}

        {/* Post  */}
        {/* <div className='flex flex-col p-2 '>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>

        </div> */}
      
        <h1 className='text-2xl font-medium font-platypi pb-2 '>Recent Posts</h1>
        <hr />
        <div className='flex flex-col p-2 '>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>
            <div className='flex pb-4 border-b-2 pt-2 justify-center items-center gap-2'>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*8lz-q8Um3g1d1zUjCG4zHQ.jpeg" alt="" className='h-[50px] w-[50px] rounded-full'/>
            <div>
                <p className='text-xs text-gray-500'>July 11, 2024</p>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur ,fjdjfb.</h1>
            </div>
            </div>

        </div>
        <ChooseCategory />
        <RecommendedTopics/>
         
    </div>
  )
}

export default RecentPost
