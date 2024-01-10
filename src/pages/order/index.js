import { BreadcrumbUI, ButtonUI, ImageUI, OrderForm, SectionTitleUI, SectionUI, ServiceSectionUI, ShopCartUI, SwiperUI, TotalCardUI } from "@/components"
import { useState } from "react"
import { IoIosCheckmarkCircle } from "react-icons/io";
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
	const [isBasket, setIsBasket] = useState(true)
	const [orderAccepted, setOrderAccepted] = useState(false)

	const openModal = () => (
		setOrderAccepted(prevstate => !prevstate)
	)
	const anOrderForm = () => (
		setIsBasket(prevstate => !prevstate)
	)
  return (
    <div className="font-rubik h-full">
      {
        cartIsHave ?
        <div>
          <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik'}>
            <BreadcrumbUI/>
						{
							isBasket ? 
							<div>
                <div className="grid lg:grid-cols-6 mt-[30px] gap-4 lg:gap-x-[30px]">
                  <div className="lg:col-span-4 order">
                    <div className="px-3 md:px-[30px] flex flex-col w-full divide-y  divide-borderGrey border border-borderGrey rounded-lg max-h-[580px] md:max-h-[420px] overflow-y-scroll">
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
					    		<div className="lg:col-span-2">
					    			<TotalCardUI howMany={2} price={'1 440 000'} salePrice={'60 000'} btn={true} onClick={anOrderForm}/>
					    		</div>
                </div>
								<SectionUI>
			            <SectionTitleUI title={'Вам может понравиться'} href={'#'}/>
			           	<div>
			           		<SwiperUI idSwiper={'myswiper2'} productsArr={beLikeProducts}/>				
			           	</div>
			          </SectionUI>
							</div>
						: 
							<OrderForm onClick={openModal}/>
						}
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


			{
				orderAccepted && 
				<div className="w-full font-rubik h-screen fixed top-0 left-0 bg-black/40 flex items-center justify-center z-50 ">
					<div className="max-w-[600px] w-full bg-white rounded-lg py-5 md:py-10 lg:py-[50px] flex flex-col items-center px-5 mx-5 gap-4 lg:gap-[30px]">
				  	<IoIosCheckmarkCircle className="w-10 h-10 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] text-currentGreen"/>
						<div>
							<SectionTitleUI ismargin={'true'} title={'Ваш заказ принят'} isBorder={true}/>
						</div>
							<p className="mt-2.5 text-center">Мы в скором времени свяжемся с вами</p>
							<div className="w-1/2">
  							<ButtonUI text={'Перейти на главную'} cardBtn={true} className={'py-3 md:py-4'} href={'/'}/>
							</div>
					</div>
				</div>
			}
    </div>
  )
}

export default index