import React from 'react'

const ActiveAppointment = () => {
  return (
    <div className='p-6'>
        <div className='flex justify-between'>
        <h1 className='font-bold text-[#050A4E] text-xl'>Your Active Booking</h1>
        <button className='text-[#1778F2] font-semibold'>View All</button>
        </div>
        <div className='text-gray-600 text-center mt-5'>
            No booking Available
        </div>
    </div>
  )
}

export default ActiveAppointment
