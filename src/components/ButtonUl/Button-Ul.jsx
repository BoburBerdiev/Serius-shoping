import React from 'react'

const ButtonUI = ({leftIcon, rightIcon, text, onClick, href, cardBtn }) => {
  return (
    <>
    {
      href 
      ? 
      <a href={href} className={`flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? '' : 'p-3'} ${cardBtn && 'py-3 px-4 w-full justify-center'}`}>
        {
          leftIcon && <span className=''>{leftIcon}</span>
        }
         <span>{text}</span>
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
        </a>
      :
      <button onClick={onClick} className={`flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? '' : 'p-3'} ${cardBtn && 'py-3 px-4 w-full justify-center'}`}>
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