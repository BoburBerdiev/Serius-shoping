import { BannerUI, BreadcrumbUI, ButtonUI, ImageUI, InfoProductUI, SectionTitleUI, SectionUI, SwiperUI } from '@/components'
import { Fragment, useState } from 'react'
import { HiMiniCheckCircle } from "react-icons/hi2";
import { GoXCircleFill } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import product from './product.module.css'

const shortAboutProduct = [
  {
    title: 'SKU',
    value: '8077',
  },
  {
    title: 'Тип',
    value: 'беспроводные наушники',
  },
  {
    title: 'Тип подключения',
    value: 'беспроводное',
  },
  {
    title: 'Класс водонепроницаемости',
    value: 'IP55',
  },
  {
    title: 'Материал корпуса',
    value: 'пластик',
  },
  {
    title: 'Футляр с зарядным устройством',
    value: 'есть',
  },
]
const productImages = [
  {
    src: '/airpods.png',
    alt: '',
    id: 1
  },
  {
    src: '/airpods (1).png',
    alt: '',
    id: 2
  },
  {
    src: '/airpods (2).png',
    alt: '',
    id: 3
  },
]
const ProductDetailed = () => {
  const [isHave, setIsHave] = useState(true)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik pruduct-inner'}>
        <div className='space-y-5 md:space-y-[30px]'>
          <BreadcrumbUI/>
          <SectionTitleUI title={'Наушники Xiaomi Buds 3T Pro (White)'} isBorder={true}/>
          <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-16 gap-6 lg:gap-[30px]'>
            <div className=' md:col-span-6 '>
              <div className='w-full aspect-video	 relative flex gap-5 md:gap-[30px]'>
                {
                  productImages &&
                  <>
                  <Swiper
                    spaceBetween={10}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode,  Thumbs]}
                    className={ `  mySwiper2 w-[80%] h-full order-2`}
                  >
                  {
                    productImages?.map(image => (
                      <SwiperSlide key={image?.id} className='relative w-full h-full '>
                        <ImageUI src={image?.src} imgStyle={'object-cover'}/>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={`mySwiper w-[50px] md:w-[60px] h-full order-1 `}
                >
                      <div className='flex flex-col '>
                  {
                    
                    productImages?.map(image => (
                        <SwiperSlide key={image?.id} className='relative aspect-square h-auto w-full'>
                          <ImageUI src={image?.src} imgStyle={'object-cover cursor-pointer'}/>
                        </SwiperSlide>
                    ))
                  }

                    </div>

                </Swiper>
                  </>
                }
                
              </div>
            </div>
            <div className='md:col-span-6 space-y-2.5  text-darkBlue'>
              <h2 className='font-medium md:text-lg'>Коротко о товаре</h2>
              <div className='space-y-2'>
                {
                  shortAboutProduct.map(item => (
                    <Fragment key={item.id}>
                      <InfoProductUI title={item?.title} value={item?.value}/>
                    </Fragment>
                  ))
                }
              </div>
            </div>
            <div className='lg:col-span-4 md:col-span-5 '>
              <div className='w-full border border-borderGrey rounded-lg p-3 md:p-5'>
                {
                  isHave ? 
                  <div className='flex items-center gap-1 text-[#36E3A4]  mb-5'>
                    <HiMiniCheckCircle className='w-6 h-6 ' />
                    <p>В наличии</p>
                  </div>
                  : 
                  <div>
                    <div className='flex items-center gap-1 text-currentRed  mb-5'>
                      <GoXCircleFill className='w-6 h-6 ' />
                      <p>Нет в наличии</p>
                    </div>
                  </div>
                }
                <h3 className={`text-2xl ${isHave ? 'text-black' : 'text-borderGrey'} mb-5 md:mb-[30px] `}>1 200 000 сум</h3>
                <ButtonUI text={'Добавить в корзину'} cardBtn={true} className={'bg-darkBlue text-white mt-3.5'}/>
              </div>
            </div>
          </div>
        </div>

        
      </SectionUI>      
    </>
  )
}

export default ProductDetailed;