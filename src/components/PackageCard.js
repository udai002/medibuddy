import React from 'react'

const PackageCard = () => {
  return (
    <>
      <div className='bg-white p-6 inline-block mt-10 rounded-xl'>
          <h1 className='text-xl text-[#050A4E] font-bold'>Medibuddy Fit health check-up</h1>
          <p className='text-[#1778F2] pt-5'>Reports in 10-12 hrs</p>
          <div className='flex justify-between mt-5'>
            <div className=''>
              <p className='text-[#050A4E] font-bold '>90 Tests</p>
              <ul className='text-[#4F4F4F]'>
                <li>Cholesterol - Total</li>
                <li>Vitamin D... + 87 more</li>
              </ul>
              
            </div>
            <div>
              <p className='text-[#050A4E] font-bold'>Includes</p>
                <ul className='text-[#4F4F4F]'>
                <li>Radiology</li>
              </ul>
            </div>
          </div>
          <div className='flex mt-5'>
            <div className='mr-10'>
              <h1 className='text-[#050A4E] font-bold'>Fasting</h1>
              <p>07-08hrs</p>
            </div>
            <div>
              <h1 className='text-[#050A4E] font-bold'>Available</h1>
              <p>Home</p>
            </div>
          </div>
          <div className='flex justify-between mt-5'>
            <div className='font-bold text-[#050A4E] '>0</div>
            <div className='text-[#1778F2] border-2 border-[#1778F2] py-1 px-3 rounded-xl flex justify-center items-center'>
              <button className='text-xl mr-4'>-</button><span>0</span><button className='text-xl ml-4'>+</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default PackageCard
