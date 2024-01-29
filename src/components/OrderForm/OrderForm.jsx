import { ButtonUI, InputUI, SectionTitleUI, TotalCardUI } from '..'
import {useForm} from "react-hook-form";


const OrderForm = ({onClick , onSubmit , formUserAddress , formUserPhone ,formUserName}) => {
  return (
    <div className="mt-4 md:mt-6 font-rubik">
    <SectionTitleUI title={'Оформление заказа'} isBorder={true}/>
    <div className="w-full">
      <div className="">
        <form onSubmit={onSubmit} className='w-full '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-5 sm:gap-x-[30px]'>
            <InputUI formname={formUserName}  placeholder={'Имя и фамилия'} type={'text'}/>
            <InputUI formname={formUserPhone}  placeholder={'Номер телефона'} type={'text'}/>
            <InputUI placeholder={'Адрес'} formname={formUserAddress} type={'text'} className={'sm:col-span-2'}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[30px] items-center mt-4 md:mt-[30px]'>
            {
            <ButtonUI  cardBtn={true} text={'Заказать'} className={'py-3 md:py-4'} onClick={onClick}/>
            }
            <button >Назад</button>
          </div>
        </form>
      </div>

    </div>
   </div>
  )
}

export default OrderForm