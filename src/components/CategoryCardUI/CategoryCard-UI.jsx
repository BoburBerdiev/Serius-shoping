import React from 'react'
import { ImageUI } from '..'
import { LuArrowUpRight } from "react-icons/lu";

const CategoryCardUI = ({link,src, alt, text, textPosition, iconPosition, grid  }) => {
  return (
    <a href={link} className={`w-full relative block rounded-lg overflow-hidden group h-[240px] ${grid}`}>
      <ImageUI imgStyle={'object-cover group-hover:scale-125'} src={src} alt={alt}/>
      <h2 className={`text-white font-rubik text-xl font-medium absolute top-[12%] left-[7%] ${textPosition} `}>{text}</h2>
      <span className={`absolute p-2 rounded-full bg-[#D9D9D9] bottom-[7%] right-[7%] ${iconPosition}`}><LuArrowUpRight className='w-6 h-6 lg:h-7 lg:w-7 text-white' /></span>
    </a>
  )
}

export default CategoryCardUI