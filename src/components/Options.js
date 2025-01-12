import React from 'react'

const Options = ({options}) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {options.map(item=><div className='flex flex-col justify-center items-center m-4 w-20 md:flex-grow'>
        <img className='w-20' src={item.iconUrl} alt="" />
        <p className='text-[#2D2D2D] font-semibold'>{item.iconText}</p>
      </div>)}
    </div>
  )
}

export default Options
