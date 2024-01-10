import { ButtonUI } from '..'

const TotalCardUI = ({howMany, price, salePrice, btn, onClick}) => {
  return (
    <div className='w-full border border-borderGrey p-4 xl:p-[30px] font-rubik rounded-lg'>
      <h3 className='font-medium text-lg lg:text-xl'>Итого</h3>
      <div className='flex items-center justify-between pt-3 md:pt-5'>
        <p className='text-sm xl:text-sm'>
          <span>{howMany}</span>
          <span> товара на сумму:</span>
        </p>
        <p className='font-medium  xl:text-xl '>
          <span>{price}</span>
          <span>сум</span>
        </p>
      </div>
      {
        salePrice && <p className='text-currentGreen mt-2.5  text-sm xl:text-base'>Скидка: {salePrice} сум</p>
      }
      {
        
        btn && <div className='mt-4 md:mt-6'>
          <ButtonUI cardBtn={true} className={'md:py-4'} text={'Оформить заказ'} onClick={onClick}/>
        </div> 
      }
    </div>
  )
}

export default TotalCardUI