import React from 'react'

const LifeStylePackage = ({healthPack}) => {
    const {props} = healthPack ;
    const item = props[0]
  return (
    <div>
        <h1>{healthPack.title}</h1>
        <div>
            <img src={`https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config/${item.imgSrc}`} alt={item.title} />
            <p>{item.title}</p>
        </div>
    </div>
  )
}

export default LifeStylePackage
