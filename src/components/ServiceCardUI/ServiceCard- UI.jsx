import { ImageUI } from '..'
import {useSelector} from "react-redux";

const ServiceCardUI = ({icon, title_uz , title_ru, subTitle_ru , subTitle_uz}) => {
    const { lang } = useSelector((state) => state.langSlice);

  return (
    <div className='flex flex-col items-center gap-1 font-rubik w-full'>
      <div className='w-10 h-10 md:w-[60px] md:h-[60px] m-1 relative'>
        <ImageUI alt={'service'} src={icon} imgStyle={'object-contain'}/>
      </div>
        <h4 className='font-medium text-center text-darkBlue text-lg md:text-xl'>{lang === 'ru' ? title_ru : title_uz }</h4>
        <p className='md:text-lg text-center'>{lang === 'ru' ?  subTitle_ru : subTitle_uz}</p>
    </div>
  )
}

export default ServiceCardUI