import { ImageUI } from '..'

const ServiceCardUI = ({icon, title, subTitle}) => {
  return (
    <div className='flex flex-col items-center gap-1 font-rubik w-full'>
      <div className='w-10 h-10 md:w-[60px] md:h-[60px] m-1 relative'>
        <ImageUI src={icon} imgStyle={'object-contain'}/>
      </div>
        <h4 className='font-medium text-center text-darkBlue text-lg md:text-xl'>{title}</h4>
        <p className='md:text-lg text-center'>{subTitle}</p>
    </div>
  )
}

export default ServiceCardUI