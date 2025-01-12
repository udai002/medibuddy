import React from 'react'

const Banner = ({banner}) => {
    const {bannerUrl} = banner[0]
  return (
    <div className='flex mt-3 justify-center p-4'>
      <img src={bannerUrl} className='w-full' alt="Banner" />
    </div>
  )
}

export default Banner
