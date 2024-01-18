import React, { useEffect } from 'react'

const ButtonUI = ({leftIcon, rightIcon, text, onClick, href, cardBtn, className, titleBtn }) => {

  return (
    <>
    {
      href 
      ? 
      <a href={href} className={`${className} ${titleBtn ? 'text-sm md:text-base lg:text-lg' : 'flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg'}   ${text ? 'px-2 py-2' : 'py-2 px-2.5 md:p-3'} ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}`}>
        {
          leftIcon && <span className=''>{leftIcon}</span>
        }
         <span>{text}</span>
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
        </a>
      :
      <button onClick={onClick} className={`${className} flex items-center gap-3 border relative border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? 'px-4 py-2' : 'py-2 px-2.5 md:p-3'} ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}`}>
        { 
          leftIcon && <span className=''>{leftIcon}</span>
        }
        {
          text &&  <span>{text}</span>
        }
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
      </button>

    }
    </>
  )
}

export default ButtonUI