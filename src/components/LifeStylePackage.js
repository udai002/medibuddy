import React from 'react'

const LifeStylePackage = ({healthPack}) => {
    const {props} = healthPack ;
    const item = props[0]
    const healtPackList = [
      {
        title:"Diabetes",
        imgSrc:"/diabetes.png"
      },
      {
        title:"Hyper Tension",
        imgSrc:"/hyperTension.png"
      },
      {
        title:"Obsesity",
        imgSrc:"/obesity.png"
      },
      {
        title:"Smoking",
        imgSrc:"/smoking.png"
      }
    ]
  return (
    <div>
        <h1 className='text-xl font-bold p-6 text-[#050A4E]'>{healthPack.title}</h1>
        <div className='flex justify-center grow flex-wrap items-center'>
        {healtPackList.map(item=><div className='flex flex-col m-4  grow mt-5 items-center'>
            <img className='mb-4 w-14' src={item.imgSrc} alt={item.title} />
            <p className='whitespace-nowrap'>{item.title}</p>
        </div>)}
        </div>
    </div>
  )
}

export default LifeStylePackage
