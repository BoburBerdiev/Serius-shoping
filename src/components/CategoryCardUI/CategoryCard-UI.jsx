import { ImageUI } from '..'
import { LuArrowUpRight } from "react-icons/lu";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {selectCatalog} from "@/slice/filterQuery";

const CategoryCardUI = ({src,  text,value, textPosition, iconPosition, grid  }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const FilterCatalog = () => {
        dispatch(selectCatalog(value))
        router.push('/product')
    }

    return (

    <button onClick={FilterCatalog} className={` ring ring-white hover:ring-darkBlue/90 ring-offset-2 w-full ring-5  relative block rounded-lg overflow-hidden group h-[150px] sm:h-[240px]  before:w-full  before:h-full before:absolute before:bg-black/20 before:duration-200 hover:before:bg-black/30 before:top-0 before:left-0 before:z-[4] ${grid}`}>
      <ImageUI imgStyle={'object-cover group-hover:scale-125'} src={src} alt={text}/>
      <h2 className={`text-white font-rubik text-base md:text-xl font-medium absolute top-[12%] left-[7%] sm:top-5 sm:left-5 z-10 ${textPosition} `}>{text}</h2>
      <span className={`absolute p-2 group-hover:rotate-45 duration-200 rounded-full bg-borderGrey bottom-[7%] right-[7%] sm:bottom-5 sm:right-5 z-10 group-hover:bg-darkBlue border-2 border-borderGrey group-hover:border-white ${iconPosition ? iconPosition : 'bottom-[30px] right-[30px]'}`}><LuArrowUpRight className='w-5 h-5 lg:h-7 lg:w-7 text-white' /></span>
    </button>
  )
}

export default CategoryCardUI