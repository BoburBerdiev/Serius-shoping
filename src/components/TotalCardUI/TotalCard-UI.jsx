import { ButtonUI } from '..'
import {priceView} from "@/helper";
import {useTranslation} from "react-i18next";

const TotalCardUI = ({howMany, price, salePrice, btn, onClick}) => {
    const {t}  = useTranslation()
  return (
    <div className='w-full border border-borderGrey p-4 xl:p-[30px] font-rubik rounded-lg'>
      <h3 className='font-medium text-lg lg:text-xl'>{t('order.all')}</h3>
      <div className='flex items-center justify-between pt-3 md:pt-5'>
        <p className='text-sm xl:text-sm space-x-1'>
          <span>{howMany}</span>
            <span>
            {t('order.productPrice')}
        </span>
        </p>
        <p className='font-medium  xl:text-xl '>
          <span>{priceView(price)}</span>
          <span> {t('product-inner.sum')} </span>
        </p>
      </div>
      {
        salePrice && <p className='text-currentGreen mt-2.5  text-sm xl:text-base'>{t('order.discountPrice')} {priceView(salePrice)} {t('product-inner.sum')}</p>
      }
      {
        
        btn && <div className='mt-4 md:mt-6'>

          <ButtonUI cardBtn={true} className={'md:py-4'} text={t('btn.checkout')} onClick={onClick}/>
        </div> 
      }
    </div>
  )
}

export default TotalCardUI