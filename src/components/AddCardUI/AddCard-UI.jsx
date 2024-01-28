import React from 'react'
import { ImageUI } from '..'

const AddCardUI = ({href, src, alt , onClick}) => {
  return (
    <div onClick={onClick} className='cursor-pointer w-full h-full block relative rounded-lg overflow-hidden bg-addCard '>
      <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>
    </div>
  )
}

export default AddCardUI