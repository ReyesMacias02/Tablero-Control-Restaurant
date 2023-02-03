import React from 'react'
import {RiHome6Line,RiPercentLine,RiPieChartLine,RiMailLine, RiNotificationLine, RiSettingsLine, RiLogoutBoxRLine} from 'react-icons/ri'

const Sidebar = (props) => {
    const { Showmenu } = props;
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-21 h-full  flex flex-col justify-between py-3
    rounded-tr-xl rounded-br-xl z-50 transition-all ${Showmenu ? "left-0" : "-left-full"}`}>
       <div>
         <ul className='pl-2'>
            <li>
             <img className='w-20 h-15 mb-6 mt-4 '  src="logo-restaurant.png" alt="logo" />
            </li>
            <li className='bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg '>
                <a className='bg-[#ec7c6a] p-3  mx-3 flex justify-center rounded-xl text-white' href='a'> 
                <RiHome6Line className='text-xl '/> 
                </a>
            </li>
            <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiPercentLine className='text-xl'/> 
                </a>
            </li>
            <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiPieChartLine className='text-xl '/> 
                </a>
            </li>
            <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiMailLine className='text-xl '/> 
                </a>
            </li>
            <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiNotificationLine className='text-xl '/> 
                </a>
            </li>
            <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiSettingsLine className='text-xl'/> 
                </a>
            </li>
        </ul>
       </div>
       <div>
        <ul className='pl-2'>
        <li className='hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-lg  group transition-colors'>
                <a className='group-hover:bg-[#ec7c6a]  p-3 mx-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors' href='a'> 
                <RiLogoutBoxRLine className='text-xl'/> 
                </a>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar