import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (<>
    <div className='flex justify-between items-center p-4'>
      <div className=' flex items-center'>
        <FaArrowLeft className='text-2xl'/>
        <div className='ml-3'>
            <h1 className='text-xl font-semibold'>Billekahalli</h1>
            <p>Sarvabhoumanagar Billekahalli</p>
        </div>
      </div>
      <div className='flex'>
        <div className='mx-2 text-2xl'>
            <LuWallet/>
        </div>
        <div className='mx-2 text-2xl'>
            <IoCartOutline/>
        </div>
      </div> 
    </div>
    <div className='m-4 flex'>
        <input type="search" className='w-[300px] border-2 px-2 py-2 rounded-xl' placeholder='Find lab tests, diagnostics centres' /> 
        <button className='relative right-8'><CiSearch/></button>
    </div>
    </>
  )
}

export default Navbar
