import React from 'react'

const ChooseCategory = () => {
  return (
    <div className='max-w-[300px] mt-6'>
        <h1 className='text-2xl font-medium font-platypi pb-2'>Popular Authors</h1>
        <hr  className='mb-4'/>

        {/* Authors  */}
     <div className='flex gap-2  mb-4'>
      <div>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
      </div>
        
        <div className='ml-2'>
            <h1 className='font-platypi'>Author name </h1>
            <p className='line-clamp-2 text-xs'>Author bio Lorem, Lorem ipsum dolor sit. .</p>
        </div>
        <div>

            <button className='border-2 text-sm text-black rounded-2xl px-2 py-1 border-black'>Follow</button>
        </div>

     </div>
     <div className='flex gap-2 mt-2  mb-4'>
      <div>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
      </div>
        
        <div className='ml-2 '>
            <h1 className='font-platypi'>Author name </h1>
            <p className='line-clamp-2 text-xs'>Author bio Lorem, Lorem ipsum dolor sit. .</p>
        </div>
        <div>

            <button className='border-2 text-sm text-black rounded-2xl px-2 py-1 border-black'>Follow</button>
        </div>

     </div>
     <div className='flex gap-2  mb-4'>
      <div>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
      </div>
        
        <div className='ml-2'>
            <h1 className='font-platypi'>Author name </h1>
            <p className='line-clamp-2 text-xs'>Author bio Lorem, Lorem ipsum dolor sit. .</p>
        </div>
        <div>

            <button className='border-2 text-sm text-black rounded-2xl px-2 py-1 border-black'>Follow</button>
        </div>

     </div>

    </div>
  )
}

export default ChooseCategory
