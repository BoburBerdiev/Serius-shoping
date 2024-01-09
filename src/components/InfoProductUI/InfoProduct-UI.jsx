import React from 'react'

const InfoProductUI = ({title, value}) => {
  return (
    <div className='flex justify-between items-end text-sm xl:text-base w-full '>
      <p className='text-currentGrey whitespace-nowrap'>{title}</p>
      <div className='h-full w-full border-b border-dashed'></div>
      <p className='text-black whitespace-nowrap'>{value}</p>
    </div>
  )
}

export default InfoProductUI