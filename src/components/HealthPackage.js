import React from 'react'
import PackageCard from './PackageCard'

const HealthPackage = ({category , packages}) => {
  const {categories} = category
  const arrayCat = categories["10386"]
  console.log(categories)	
  return (
    <div className='bg-[#E8F2FE] w-full p-6'>
      <h1 className='text-xl font-bold text-[#050A4E]'>{categories.heading}</h1>
      <div>
        <ul className='flex items-start overflow-y-hidden'>
            {arrayCat.map(item=>{
              const len = item.length 
              console.log(len*10)
              return<li className="px-4 py-2 bg-white rounded-xl mr-4 mt-4 inline-block whitespace-nowrap">{item}</li>
            })}
        </ul>
      </div>
      <div>
        <PackageCard/>
      </div>
    </div>
  )
}

export default HealthPackage
