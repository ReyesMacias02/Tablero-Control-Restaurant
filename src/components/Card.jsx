import React from 'react'

const Card = (props) => {
    const{img, description, precie, inventory} =props
  return (

  <div className='bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-1 text-center text-gray-300'>
             
  <img src={img} className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
  <p className='text-xl lg:text-2xl'>
    {description}
  </p>
  <span className='text-gray-400'>
    {precie}
  </span>
  <p className='text-gray-600'>
 {inventory} Bowls available
  </p>
</div>
  )
}

export default Card