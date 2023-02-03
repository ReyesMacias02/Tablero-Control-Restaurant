import React from 'react'
import {RiDeleteBin6Line, RiCloseLine} from 'react-icons/ri'

const Carrito = (props) => {
    const {ShowOrder, setOrder}=props
  return (
    <div>
          <div className={` lg:col-span-2 fixed  right-0 top-0 bg-[#1F1D2B]  lg:rounded-tl-xl rounded-br-xl w-[100%] h-full lg:right-0 lg:w-[23rem]  transition-all z-50 ${ShowOrder ? 'right-0' : '-right-full'}`}>
          {/* Orders*/}
          <div className='relative pt-16 lg:pt-8 text-gray-300 p-4 h-full'>
             <RiCloseLine onClick={()=>setOrder(false)} className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full texts '/>
             <h1 className='text-2xl lg:text-xl my-4'>Orders #15242</h1>
             {/* Pills */}
             <div className='flex items-center gap-4 flex-wrap mb-8 '>
              <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl lg:text-s' >
                Dine In
              </button>
              <button className=' text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500  ' >
                To Go
              </button>
              <button className=' text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500 ' >
                Delivery
              </button>
             </div>
              {/* Car*/}
             <div>
              <div className='grid grid-cols-6 mb-4 p-4'>
                <h5 className='col-span-4'>
                  Item
                </h5>
                <h5 className='text-center '>
                  Qty
                </h5>
                <h5 className=' text-right md:text-center lg:text-center'>

                  Price
                </h5>
              </div>
              {/*Productos*/}
              <div className=' p-0 h-[400px] md:h-[700px] lg:h-[530px]   overflow-scroll  '>
                  {/* Card- Product*/}
                <div className='bg-[#262837] p-4 rounded-xl mb-4 '>
                  <div className='grid grid-cols-6 '>
                    {/*Descripcion product*/}
                    <div className=' col-span-4 flex items-center gap-3 '>
                       <img src="comida3.png" alt="comida" className='w-10 h-10 object-cover' />
                      <div>
                        <h5 className=' text-sm'>Speacy seasone...</h5>
                        <p className=' text-xs text-gray-500'>$2.29</p>
                      </div>
                    </div>
                    {/*cantidad*/}
                    <div className='bg-[#1F1D2B]  lg:w-full   rounded-lg  text-center py-2 md:mx-7 sm:mx-5 lg:mx-1 '>
                      <span className='  '>2</span>
                    </div>
                    {/*price total*/}
                    <div className='text-end py-1 ml-2 md:text-center  w-full '>
                      <span >$4.58</span>
                    </div>
                  </div>
                  {/* Npta*/}
                  <div className='grid grid-cols-6  '>
                    <form action="" className=' col-span-5 md:mr-6 sm:mr-5'>
                      <input type="text" className='bg-[#1F1D2B]  outline-none md:w-full    w-full  py-3 px-4 rounded-lg mt-4' placeholder='Order note.... ' />
                    </form>
                    <div className='md:mr-[1rem] md:ml-8 flex justify-center   pt-4 px-1  items-center ml-5 '>
                      <button className='hover:bg-[#1F1D2B] border border-[#ec7c6a] px-[14px]  py-3   rounded-lg  '>
                      <RiDeleteBin6Line className=' text-[#ec7c6a] text-center text-xl'/>
                    </button>
                    </div>
                    
                  </div>
                  
                </div>
                {/* Card- Product*/}
                <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                  <div className='grid grid-cols-6 '>
                    {/*Descripcion product*/}
                    <div className=' col-span-4 flex items-center gap-3'>
                       <img src="comida3.png" alt="comida" className='w-10 h-10 object-cover' />
                      <div>
                        <h5 className=' text-sm'>Speacy seasone...</h5>
                        <p className=' text-xs text-gray-500'>$2.29</p>
                      </div>
                    </div>
                    {/*cantidad*/}
                    <div className='bg-[#1F1D2B]  lg:w-full   rounded-lg  text-center py-2 md:mx-7 sm:mx-5 lg:mx-1 '>
                      <span className=' '>2</span>
                    </div>
                    {/*price total*/}
                    <div className='text-right py-1 ml-2 md:text-center w-full '>
                      <span >$4.58</span>
                    </div>
                  </div>
                  {/* Npta*/}
                  <div className='grid grid-cols-6  '>
                    <form action="" className=' col-span-5 md:mr-6 sm:mr-5'>
                      <input type="text" className='bg-[#1F1D2B]  outline-none md:w-full    w-full  py-3 px-4 rounded-lg mt-4' placeholder='Order note.... ' />
                    </form>
                    <div className='md:mr-[1rem] md:ml-8 flex justify-center   pt-4 px-1  items-center ml-5 '>
                      <button className='hover:bg-[#1F1D2B] border border-[#ec7c6a] px-[14px]  py-3   rounded-lg  '>
                      <RiDeleteBin6Line className=' text-[#ec7c6a] text-center text-xl'/>
                    </button>
                    </div>
                    
                  </div>
                  
                </div>
                {/* Card- Product*/}
                
                <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                  <div className='grid grid-cols-6 '>
                    {/*Descripcion product*/}
                    <div className=' col-span-4 flex items-center gap-3'>
                       <img src="comida3.png" alt="comida" className='w-10 h-10 object-cover' />
                      <div>
                        <h5 className=' text-sm'>Speacy seasone...</h5>
                        <p className=' text-xs text-gray-500'>$2.29</p>
                      </div>
                    </div>
                    {/*cantidad*/}
                    <div className='bg-[#1F1D2B]  lg:w-full   rounded-lg  text-center py-2 md:mx-7 sm:mx-5 lg:mx-1 '>
                      <span className=' '>2</span>
                    </div>
                    {/*price total*/}
                    <div className='text-right py-1 ml-2 md:text-center  w-full'>
                      <span >$4.58</span>
                    </div>
                  </div>
                  {/* Npta*/}
                  <div className='grid grid-cols-6  '>
                    <form action="" className=' col-span-5 md:mr-6 sm:mr-5'>
                      <input type="text" className='bg-[#1F1D2B]  outline-none md:w-full    w-full  py-3 px-4 rounded-lg mt-4' placeholder='Order note.... ' />
                    </form>
                    <div className='md:mr-[1rem] md:ml-8 flex justify-center   pt-4 px-1  items-center ml-5 '>
                      <button className='hover:bg-[#1F1D2B] border border-[#ec7c6a] px-[14px]  py-3   rounded-lg  '>
                      <RiDeleteBin6Line className=' text-[#ec7c6a] text-center text-xl'/>
                    </button>
                    </div>
                    
                  </div>
                  
                </div>
                {/* Card- Product*/}
                
                <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                  <div className='grid grid-cols-6 '>
                    {/*Descripcion product*/}
                    <div className=' col-span-4 flex items-center gap-3'>
                       <img src="comida3.png" alt="comida" className='w-10 h-10 object-cover' />
                      <div>
                        <h5 className=' text-sm'>Speacy seasone...</h5>
                        <p className=' text-xs text-gray-500'>$2.29</p>
                      </div>
                    </div>
                    {/*cantidad*/}
                    <div className='bg-[#1F1D2B]  lg:w-full   rounded-lg  text-center py-2 md:mx-7 sm:mx-5 lg:mx-1 '>
                      <span className=' '>2</span>
                    </div>
                    {/*price total*/}
                    <div className='text-right py-1 ml-2 md:text-center w-full '>
                      <span >$4.58</span>
                    </div>
                  </div>
                  {/* Npta*/}
                  <div className='grid grid-cols-6  '>
                    <form action="" className=' col-span-5 md:mr-6 sm:mr-5'>
                      <input type="text" className='bg-[#1F1D2B]  outline-none md:w-full    w-full  py-3 px-4 rounded-lg mt-4' placeholder='Order note.... ' />
                    </form>
                    <div className='md:mr-[1rem] md:ml-8 flex justify-center   pt-4 px-1  items-center ml-5 '>
                      <button className='hover:bg-[#1F1D2B] border border-[#ec7c6a] px-[14px]  py-3   rounded-lg  '>
                      <RiDeleteBin6Line className=' text-[#ec7c6a] text-center text-xl'/>
                    </button>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
                  {/*Subir pagos*/}
            <div className='bg-[#1F1D2B] absolute w-full bottom-0 left-0 p-4'>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-gray-400'>Discount</span>
                <span className=' text-gray-200'> $0</span>
              </div>
              <div className='flex items-center justify-between mb-6'>
                <span className='text-gray-400'>Subtotal</span>
                <span className=' text-gray-200'> $201.03</span>
              </div>
              <div>
                <button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg'>
                  Continue to payment
                </button>
              </div>
            </div>
              
             </div >
           
          </div>
        
         </div>
    </div>
  )
}

export default Carrito