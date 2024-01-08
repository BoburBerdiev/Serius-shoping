import { AddCardUI, BannerUI, ButtonUI, CardUI, CategoryCardUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI } from "@/components";

export default function Home() {
  return (
    <>
    <div className="relative flex flex-col md:justify-center items-center bg-darkBlue h-screen ">
      <div className="container h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col items-center md:items-start justify-center text-white relative z-20">
            <h3 className="text-2xl text-center">Идеальный магазин мобильных аксессуаров</h3>
            <ButtonUI text={'Посмотреть товары'} className={'border-white text-white w-fit'}/>
          </div>
          <div className="absolute z-[2] md:relative w-full h-[550px] mt-20">
            <ImageUI src={'/header.png'} imgStyle={'object-contain'}/>
          </div>
        </div>
      </div>
    </div>
    {/* <BannerUI src={'/mobile-images/banners/main-banner.jpg'} height={'h-[80vh]'} alt={''}/> */}
    <SectionUI customPadding={'py-10 md:pt-20'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <CategoryCardUI grid={'md:row-span-2 md:h-full lg:col-span-3'} text={'Чехлы'} link={'#'} textPosition={'lg:top-10 lg:left-10'} iconPosition={'lg:bottom-auto lg:top-10 lg:right-10'} src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Стекла и пленки'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/phone-glass.png'}/>
        <CategoryCardUI grid={'sm:col-span-2 md:col-span-1 lg:col-span-2'} textPosition={'lg:top-[30px] left-7'} text={'Гаджеты'} src={'/mobile-images/categories/gadgets.png'}/>
        <CategoryCardUI grid={'lg:col-span-4'} text={'Аудио'} iconPosition={'lg:top-7 lg:right-11 lg:bottom-auto'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/audio.png'}/>
        <CategoryCardUI grid={'lg:col-span-3'} iconPosition={'lg:top-[30px] lg:bottom-auto lg:right-[30px]'} textPosition={'lg:bottom-8 lg:left-6 lg:top-auto'} text={'Аксессуары для смарт часов'} src={'/mobile-images/categories/smart-watch.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Кабели и ЗУ'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/cables.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Разное'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/other-products.png'}/>
      </div>

    </SectionUI>
    <SectionUI customPadding={'py-10 md:pb-20'}>
      <SectionTitleUI title={'Распродажа'} href={'#'}/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px]">
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <AddCardUI src={'/mobile-images/banners/bannerca.png'} alt={''} href={'#'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
      </div>
    </SectionUI>
    <BannerUI src={'/mobile-images/banners/banner.jpg'} height={'h-[200px] md:h-[300px] lg:h-[350px]'}/>
    <SectionUI customPadding={'py-10 md:pt-20'}>
      <SectionTitleUI title={'Новинки'} href={'#'}/>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8">
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
      </div>
    </SectionUI>
    <SectionUI customPadding={'py-10 md:pb-20'}>
      <ServiceSectionUI/>
    </SectionUI>
    </>
  )
}
