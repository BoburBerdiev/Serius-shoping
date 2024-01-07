import React from 'react'

const ButtonUI = ({leftIcon, rightIcon, text, onClick, href, cardBtn, className }) => {
  return (
    <>
    {
      href 
      ? 
      <a href={href} className={`${className} flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? 'px-4 py-2' : 'p-3'} ${cardBtn && 'py-3 px-4 w-full justify-center'}`}>
        {
          leftIcon && <span className=''>{leftIcon}</span>
        }
         <span>{text}</span>
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
        </a>
      :
      <button onClick={onClick} className={`${className} flex items-center gap-3 border relative border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? 'px-4 py-2' : 'p-3'} ${cardBtn && 'py-3 px-4 w-full justify-center'}`}>
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