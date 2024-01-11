import React from 'react'
import { ButtonUI } from '..'

const SectionTitleUI = ({isBorder, title, titleNum, href, ismargin, btnText, btnStyle, onClick}) => {
  return (
    <div className={`flex font-rubik items-end text-darkBlue justify-between border-borderGrey ${ismargin ? '' : 'mb-4 md:mb-[30px]'} ${isBorder ? '' : 'pb-1.5 md:pb-2.5 border-b '}`} >
      <div className='flex items-end gap-2.5 '>
        <h2 className=' font-medium text-2xl md:text-3xl lg:text-4xl'>{title}</h2>
        {
          titleNum && 
          <span className='text-currentGrey text-sm md:text-xl lg:text-[26px] '>{titleNum}</span>
        }
      </div>
      {
        btnText && <span className={btnStyle}><ButtonUI href={href} titleBtn={true} text={btnText} onClick={onClick}/></span>
      }
    </div>
  )
}

export default SectionTitleUI