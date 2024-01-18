import { ImageUI } from '..'
import { LuArrowUpRight } from "react-icons/lu";

const CategoryCardUI = ({link,src, alt, text, textPosition, iconPosition, grid  }) => {
  return (
    <a href={link ? link : '#'} className={`w-full relative block rounded-lg overflow-hidden group h-[240px] before:w-full before:h-full before:absolute before:bg-black/0 before:duration-200 hover:before:bg-black/20 before:top-0 before:left-0 before:z-[4] ${grid}`}>
      <ImageUI imgStyle={'object-cover group-hover:scale-125'} src={src} alt={'text'}/>
      <h2 className={`text-white font-rubik text-xl font-medium absolute top-[12%] left-[7%] sm:top-5 sm:left-5 z-10 ${textPosition} `}>{text}</h2>
      <span className={`absolute p-2 group-hover:rotate-45 duration-200 rounded-full bg-[#D9D9D9] bottom-[7%] right-[7%] sm:bottom-5 sm:right-5 z-10 group-hover:bg-darkBlue border-2 border-[#D9D9D9] group-hover:border-white ${iconPosition ? iconPosition : 'bottom-[30px] right-[30px]'}`}><LuArrowUpRight className='w-6 h-6 lg:h-7 lg:w-7 text-white' /></span>
    </a>
  )
}

export default CategoryCardUI