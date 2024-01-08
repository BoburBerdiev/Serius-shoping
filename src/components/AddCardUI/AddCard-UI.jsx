import React from 'react'
import { ImageUI } from '..'

const AddCardUI = ({href, src, alt}) => {
  return (
    <a href={href} className='w-full h-full block relative rounded-lg overflow-hidden bg-addCard '>
      <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>
    </a>
  )
}

export default AddCardUI