import { ButtonUI, InputUI, SectionTitleUI } from '..'
import {useTranslation} from "react-i18next";


const OrderForm = ({onClick , onSubmit , formUserAddress , formUserPhone ,formUserName}) => {
  const {t}  = useTranslation()

  return (
    <div className="mt-4 md:mt-6 font-rubik">
    <SectionTitleUI title={t('order.checkout')} isBorder={true}/>
    <div className="w-full">
      <div className="">
        <form onSubmit={onSubmit} className='w-full '>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-5 sm:gap-x-[30px]'>
            <InputUI formname={formUserName}  placeholder={t('form.name')} type={'text'}/>
            <InputUI formname={formUserPhone}  placeholder={t('form.phone')} type={'text'}/>
            <InputUI placeholder={t('form.address')} formname={formUserAddress} type={'text'} className={'sm:col-span-2'}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[30px] items-center mt-4 md:mt-[30px]'>
            {
              <>
            <ButtonUI type={'submit'}  cardBtn={true} text={t('btn.order')} className={'py-3 md:py-4'} />
                <ButtonUI type={'button'}  cardBtn={false} text={t('btn.back')} className={'py-3 md:py-4'} onClick={onClick}/>
              </>
            }
          </div>
        </form>
      </div>

    </div>
   </div>
  )
}

export default OrderForm