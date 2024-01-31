import Link from "next/link";

const ButtonUI = ({leftIcon,type, rightIcon, text, onClick, href, cardBtn, className, titleBtn , respText }) => {

  return (
    <>
    {
      href 
      ? 
      <Link href={href} className={`${className} ${titleBtn ? 'text-sm md:text-base lg:text-lg' : 'flex items-center gap-3 border border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg'}   ${text ? 'px-2 py-2' : 'py-2 px-2.5 md:p-3'} ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}`}>
        {
          leftIcon && <span className=''>{leftIcon}</span>
        }
         <span>{text}</span>
         {
          rightIcon && <span className=''>{rightIcon}</span>
         }
        </Link>
      :
      <button type={type ? type : 'button'} onClick={onClick} className={`${className} flex items-center justify-center gap-3 border relative border-darkBlue rounded-lg text-darkBlue font-rubik md:text-lg  ${text ? 'px-4 py-2' : 'py-2 px-2.5 md:p-3'} ${respText && 'py-2 px-2.5 md:p-3'} ${cardBtn && 'w-full text-sm md:text-base lg:text-lg justify-center text-white bg-darkBlue'}  `} >
        { 
          leftIcon && <span className=''>{leftIcon}</span>
        }
        {
          text &&  <span className={`${respText ? 'hidden md:block' : 'block'}`}>{text}</span>
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