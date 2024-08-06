import React from 'react'

const ChooseCategory = () => {
  return (
    <div className='max-w-[300px] mt-6'>
        <h1 className='text-2xl font-medium font-platypi pb-2'>Popular Authors</h1>
        <hr  className='mb-4'/>

        {/* Authors  */}
     <div className='flex gap-4 flex-wrap items-center mb-4'>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
        
        <div>
            <h1 className='font-platypi'>Author name </h1>
            <p className='line-clamp-2'>Author bio Lorem, ipsum dolor.</p>
            <button className='text-blue-600'>+ Follow</button>
        </div>

     </div>
     <div className='flex gap-4 flex-wrap items-center mb-4'>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
        
        <div>
            <h1 className='font-platypi'>Author name </h1>
            <button className='text-blue-600'>+ Follow</button>
        </div>

     </div>
     <div className='flex gap-4 flex-wrap items-center mb-4'>
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" className='h-[55px] w-[55px] rounded-full'/>
        
        <div>
            <h1 className='font-platypi'>Author name </h1>
            <button className='text-blue-600'>+ Follow</button>
        </div>

     </div>
    </div>
  )
}

export default ChooseCategory
