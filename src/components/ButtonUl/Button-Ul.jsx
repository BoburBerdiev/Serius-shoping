import Link from "next/link";

const ButtonUI = ({leftIcon,type, rightIcon, text, onClick, href, cardBtn, className, titleBtn , respText  , btnRed , count}) => {

  return (
    <>
    {
      href 
      ? 
      <Link href={href} className={`${className} ${titleBtn ?  'text-sm md:text-base lg:text-lg' : 'flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg'} ${btnRed ? 'duration-100 border-currentRed text-currentRed hover:bg-currentRed hover:text-white' :'border-darkBlue text-darkBlue hover:opacity-80'}  ${text ? 'px-2 py-2' : 'py-2 px-2.5 md:p-3'} ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}`}>
        {
          leftIcon && <span className=''>{leftIcon}</span>
        }
         <span>{text}</span>
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
        </Link>
      :
      <button type={type ? type : 'button'} onClick={onClick} className={`${className} ${btnRed ? 'duration-100  border-currentRed text-currentRed hover:bg-currentRed hover:text-white' :'border-darkBlue text-darkBlue hover:opacity-80'} flex items-center justify-center gap-3 border relative  rounded-lg  font-rubik md:text-lg  ${text ? 'px-4 py-2' : 'py-2 px-2.5 md:p-3'} ${respText && 'py-2 px-2.5 md:p-3'} relative ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}  `} >
        { 
          leftIcon && <span className=''>{leftIcon}</span>
        }
        {
          text &&  <span className={`${respText ? 'hidden md:block' : 'block'}`}>{text}</span>
        }
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }

        {
          count && <span className={'absolute top-0 right-2 text-xs rounded-full'}>{count}</span>
        }
      </button>

    }
    </>
  )
}

export default ButtonUI