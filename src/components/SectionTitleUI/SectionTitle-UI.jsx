import React from 'react'
import { ButtonUI } from '..'

<<<<<<< HEAD
const SectionTitleUI = ({isBorder, title, titleNum, href, btnText, btnStyle, onClick}) => {
 
  console.log('render sectiontitle');
  return (
    <div className={`flex font-rubik items-end text-darkBlue justify-between border-borderGrey mb-4 md:mb-[30px] leading-normal ${isBorder ? '' : 'pb-1.5 md:pb-2.5 border-b '}`} >
      <div className='flex items-center gap-2.5 '>
=======
const SectionTitleUI = ({isBorder, title, titleNum, href, ismargin}) => {
  return (
    <div className={`flex font-rubik items-end text-darkBlue justify-between border-borderGrey ${ismargin ? '' : 'mb-4 md:mb-[30px]'} ${isBorder ? '' : 'pb-1.5 md:pb-2.5 border-b '}`} >
      <div className='flex items-end gap-2.5 '>
>>>>>>> 0d1f99050441f5c0d21ad380b7fa76b3844b533b
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