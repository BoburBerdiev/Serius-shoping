import React from 'react'

const SectionTitleUI = ({isBorder, title, titleNum, href}) => {
  return (
    <div className={`flex font-rubik items-end text-darkBlue justify-between border-borderGrey mb-4 md:mb-[30px] ${isBorder && 'pb-1.5 md:pb-2.5 border-b '}`} >
      <div className='flex items-end gap-2.5 '>
        <h2 className=' font-medium text-xl md:text-2xl lg:text-4xl'>{title}</h2>
        {
          titleNum && 
          <span className='text-currentGrey text-sm '>{titleNum}</span>
        }
      </div>
      {
        href && <a href={href} className='text-sm md:text-base lg:text-lg'> Смотреть все</a>
      }
    </div>
  )
}

export default SectionTitleUI