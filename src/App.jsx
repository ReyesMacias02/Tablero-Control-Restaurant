import { useState } from 'react'
import {RiMenu3Fill, RiUser3Line,RiPieChartLine,RiArrowDownLine, RiAddLine, RiCloseLine} from 'react-icons/ri'
import Card from './components/Card';
import Carrito from './components/Carrito';
import Header from './components/Header';


import Sidebar from "./components/Sidebar"
const App = () => {

  const [Showmenu,setShowmenu]=useState(false)
  const [ShowOrder,setOrder]=useState(false)
  const toggleMenu= ()=>{

    setShowmenu(!Showmenu);
  };
  const toggleOrders= ()=>{

    setOrder(!ShowOrder);
    setShowmenu(false);
  };

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar Showmenu={Showmenu}/>
      < Carrito ShowOrder={ShowOrder} setOrder={setOrder} />
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl ">
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white bg-red-300 p-2'>
        {Showmenu ?  <RiCloseLine /> :  <RiMenu3Fill />}
        
        </button>
       
      </nav>
      <main className='lg:pl-32 lg:pr-96   pb-20 '>
        <div className=' md:p-8 p-4'>
      < Header />
          {/* title content*/}
          <div className='flex items-center justify-between mb-16 '>
            <h2 className='text-xl text-gray-300 '>
              Choose Dishes
            </h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B]  py-2 px-4 rounded-lg'>
              <RiArrowDownLine/> Dine in
            </button>
          </div>
          {/* contenido*/}
          <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 ' >
            {/* card*/}
            < Card img="comida1.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida2.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida3.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida1.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida2.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida3.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
              {/* card*/}
            < Card img="comida1.png" description="Speacy seasoned seafood nodles" precie=" $2.29" inventory="20 " />
             
          

          </div>
        </div> 
      
          
      </main>
    </div>
    
  )
}

export default App