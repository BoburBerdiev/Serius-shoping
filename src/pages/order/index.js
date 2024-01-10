import { BreadcrumbUI, ButtonUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI, ShopCartUI, SwiperUI } from "@/components"
import { useState } from "react"

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

const index = () => {
  const [cartIsHave, setCartIsHave] = useState(true)
  return (
    <div className="font-rubik h-full">
      {
        cartIsHave ?
        <div>
          <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik '}>
            <BreadcrumbUI/>
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-[30px]">
              <div className="lg:col-span-4 ">
                <div className="px-3 md:px-[30px] flex flex-col w-full divide-y  divide-borderGrey   border border-borderGrey rounded-lg h-[580px] md:h-[420px] overflow-y-scroll">
                  <div className="flex  items-center justify-center w-full py-4 md:py-[30px]">
                    <ShopCartUI title={'Наушники Xiaomi Buds 3T Pro (White)'} price={1200000} src={'/airpods.png'}/>
                  </div>
                  <div className="flex  items-center justify-center w-full py-4 md:py-[30px] ">
                    <ShopCartUI title={'Наушники Xiaomi Buds 3T Pro (White)'} price={1200000} src={'/airpods.png'}/>
                  </div>
                  <div className="flex  items-center justify-center w-full py-4 md:py-[30px] ">
                    <ShopCartUI title={'Наушники Xiaomi Buds 3T Pro (White)'} price={1200000} src={'/airpods.png'}/>
                  </div>
                </div>

              </div>
            </div>
          </SectionUI>
          <SectionUI>
			      <SectionTitleUI title={'Вам может понравиться'} href={'#'}/>
			    	<div>
			    		<SwiperUI idSwiper={'myswiper2'} productsArr={beLikeProducts}/>				
			    	</div>
			    </SectionUI>
          <div className="container "><div className="w-full border-t border-borderGrey"></div></div>
          <SectionUI customPadding={'py-10 md:pb-20'}>
            <ServiceSectionUI/>
          </SectionUI>
        </div>
        : 
        <div className="">
          <div className="w-full h-screen flex flex-col items-center justify-center gap-y-4 md:gap-y-[30px]">
          <div className="relative w-20 h-20 md:w-[134px] md:h-[152px]">
            <ImageUI src={'/empty cart.png'} imgStyle={'object-contain'}/>
          </div>
          <div className="flex flex-col items-center ">
            <SectionTitleUI title={'Ваша корзина пуста'} isBorder={true}/>
            <p className="text-center">Найдите нужные товары в каталоге или через поиск</p>
          </div>
          <ButtonUI text={'Перейти на главную'} href={'#'} className={'bg-darkBlue text-white py-3 px-5 md:py-4 md:px-8'}/>
          </div>
        </div>
      }
    </div>
  )
}

export default index