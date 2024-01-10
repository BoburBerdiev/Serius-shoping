import React from 'react'
import { ButtonUI } from '..'

const SectionTitleUI = ({isBorder, title, titleNum, href, ismargin}) => {
  return (
    <div className={`flex font-rubik items-end text-darkBlue justify-between border-borderGrey ${ismargin ? '' : 'mb-4 md:mb-[30px]'} ${isBorder ? '' : 'pb-1.5 md:pb-2.5 border-b '}`} >
      <div className='flex items-end gap-2.5 '>
        <h2 className=' font-medium text-2xl md:text-3xl lg:text-4xl'>{title}</h2>
        {
          titleNum && 
          <span className='text-currentGrey text-sm '>{titleNum}</span>
        }
      </div>
      {
        href && <ButtonUI href={href} titleBtn={true} text={'Смотреть все'}/>
      }
    </div>
  )
}

export default SectionTitleUI