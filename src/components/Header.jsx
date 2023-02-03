import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'

const Header = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
  return (
     
      <header >
      {/* Titulo y buscador*/}
      <div className='flex flex-col md:flex-row  md:justify-between md:items-center gap-4 mb-6'>
          <div>
        <h1 className='lg:text-s text-gray-300 mb-2'>Jeager Resto</h1>
        <p className='text-gray-500'>{hoy.toDateString()} </p>
      </div>
      <form>
        <div className='w-full relative'>
          <RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
           <input  type="text" placeholder='Search' className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none' /> 
        </div>
      
      </form>
      </div>
    {/*  Tabs*/}
    <nav className='text-gray-300 flex items-center justify-between lg:justify-start md:gap-8 border-b mb-6'>
      <a href='a' className=' text-s relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 border-[#ec7c6a] text-[#ec7c6a] before:rounded-full before:-bottom-[1px] '> Hot Dishes</a>
      <a href='a'  className='  py-2 pr-4 lg:text-s ' > Could Dishes</a>
      <a href='a'  className=' py-2 pr-4 lg:text-s'> Soups</a>
      <a href='a'  className=' py-2 pr-4 lg:text-s'> Grill</a>
    </nav>
    
    </header>
  )
}

export default Header