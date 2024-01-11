import { BannerUI, BreadcrumbUI, ButtonUI, CardUI, ImageUI, InfoProductUI, SectionTitleUI, SectionUI, SwiperUI } from '@/components'
import { Fragment, useState } from 'react'
import { HiMiniCheckCircle } from "react-icons/hi2";
import { GoXCircleFill } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


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
const allAboutProduct = [
  {
    title: 'Тип',
    value: 'беспроводные наушники',
  },
  {
    title: 'Сенсорная панель управления',
    value: 'есть',
  },
	{
    title: 'Частотный диапазон',
    value: '20-20000 Гц',
  },
	{
    title: 'Сенсорная панель управления',
    value: 'есть',
  },
	{
    title: 'Сенсорная панель управления',
    value: 'есть',
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
    title: 'Сопротивление, Ом',
    value: '32 Ом',
  },
	{
    title: 'Материал корпуса',
    value: 'пластик',
  },
	{
    title: 'Дальность действия в помещении, м',
    value: 'есть',
  },
  {
    title: 'Индикатор заряда аккумулятора',
    value: 'есть',
  },
  {
    title: 'Цвет',
    value: 'белый',
  },
  {
    title: 'Время автономной работы, мин',
    value: '360',
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
const beLikeProducts = [
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
]
const viewedCards = [
	{
		title: 'Чехол для iPhone 14 Ультратонкий силикон Premium',
		price: '70 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для Xiaomi Redmi 12c Ультратонкий силикон Premium c  ',
		price: '40 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
	{
		title: 'Чехол для iPhone 11 Pro Simply TPU',
		price: '65 000 сум',
		imageArr : [
			{
				id: 1,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 2,
				image : '/Card.png',
				alt: ''
			},
			{
				id: 3,
				image : '/Card.png',
				alt: ''
			},
		]
	},
]
const ProductDetailed = () => {
  const [isHave, setIsHave] = useState(true)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik pruduct-inner relative '}>
        <div className='space-y-5 md:space-y-[30px]'>
          <BreadcrumbUI/>
          <SectionTitleUI title={'Наушники Xiaomi Buds 3T Pro (White)'} isBorder={true}/>
          <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-16 gap-6 lg:gap-[30px] static'>
            <div className=' md:col-span-6 '>
              <div className='w-full aspect-video	h-full relative flex gap-5 md:gap-[30px]'>
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
                      <SwiperSlide key={image?.id} className='relative w-full h-full'>
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
                        <SwiperSlide key={image?.id} className='relative aspect-square h-auto w-full border'>
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
              <div className='w-full border border-borderGrey rounded-lg p-3 md:p-5  bg-white z-30 sticky top-[100px] left-0'>
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
                <h3 className={`text-xl xl:text-2xl ${isHave ? 'text-black' : 'text-borderGrey'} mb-5 md:mb-[30px] `}>1 200 000 сум</h3>
                <ButtonUI text={'Добавить в корзину'} cardBtn={true} className={'bg-darkBlue text-white mt-3.5'}/>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-16 static'>
            <div className='col-span-full md:col-span-12 space-y-2.5'>
						  <h2 className='font-medium md:text-lg'>Описание товара</h2>
							<p className='text-justify md:text-start'>Наушники TWS Xiaomi Buds 3T Pro – модель, которая позволит не расставаться с музыкой или книгами ни на минуту. Слушайте любимые композиции дома, по пути на работу или во время занятий спортом – качественные динамики с поддержкой широкого частотного диапазона, удобная внутриканальная конструкция и система активного подавления внешних шумов подарит вам яркие эмоции при прослушивании. С помощью 6 цифровых микрофонов наушники также отлично подойдут для общения, обеспечивая точную передачу вашего голоса в любых условиях.
								<br />
								Используйте Xiaomi Buds 3T Pro с любыми устройствами при помощи беспроводной связи Bluetooth. Версия протокола 5.2 в сочетании с емкими аккумуляторами может обеспечить до 18 часов работы, а мощный и стабильный сигнал позволит слушать музыку на расстоянии до 10 метров от смартфона. Управляйте воспроизведением простым прикосновением – сенсорные кнопки на наушниках сделают использование особенно простым и удобным. Комплектация модели включает в себя набор силиконовых амбушюров разного размера.
								<br />
								* Комплектацию и цвет товара уточняйте у консультанта
							</p>
            </div>
          </div>
					<div className='grid grid-cols-16'>
						<div className='col-span-full lg:col-span-12 space-y-2.5'>
							<h2 className='font-medium md:text-lg'>Все характеристики</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 md:grid-rows-7 gap-y-2'>
								{
									allAboutProduct.map(info => (
										<InfoProductUI title={info.title} value={info.value} key={info.title}/>
									))
								}
							</div>
						</div>
					</div>
        </div>

        
      </SectionUI>   
			<SectionUI>
			  <SectionTitleUI title={'Вам может понравиться'} btnText={'Смотреть все'} btnStyle={'border-0'} href={'#'}/>
				<div>
					<SwiperUI idSwiper={'myswiper2'} productsArr={beLikeProducts}/>				
				</div>
			</SectionUI>   
			<SectionUI customPadding={'py-10 md:pb-20'}>
				<SectionTitleUI title={'Недавно просмотренные'}/>
				<div className=''>
					<SwiperUI idSwiper={'viewedSwiper'} productsArr={viewedCards} />
				</div>
			</SectionUI>
    </>
  )
}

export default ProductDetailed;