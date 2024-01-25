import React from 'react'

const InfoProductUI = ({title, value}) => {
  return (
    <div className='flex justify-between items-end text-sm xl:text-base w-full '>
      <p className='text-currentGrey whitespace-nowrap '>{title}</p>
      <div className='h-full w-full border-b flex-1 border-dashed'></div>
      <p className='text-black max-w-1/2 text-right text-wrap'>{value}</p>
    </div>
  )
}

export default InfoProductUI