import { CardUI, CategoryCardUI, SectionTitleUI } from "@/components";


export default function Home() {
  return (
    <>
    <section className="py-20 md:pt-40">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <CategoryCardUI grid={'md:row-span-2 md:h-full lg:col-span-3'} text={'Чехлы'} link={'#'} textPosition={'lg:top-10 lg:left-10'} iconPosition={'lg:bottom-auto lg:top-10 lg:right-10'} src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Стекла и пленки'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/phone-glass.png'}/>
        <CategoryCardUI grid={'sm:col-span-2 md:col-span-1 lg:col-span-2'} textPosition={'lg:top-[30px] left-7'} text={'Гаджеты'} src={'/mobile-images/categories/gadgets.png'}/>
        <CategoryCardUI grid={'lg:col-span-4'} text={'Аудио'} iconPosition={'lg:top-7 lg:right-11 lg:bottom-auto'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/audio.png'}/>
        <CategoryCardUI grid={'lg:col-span-3'} iconPosition={'lg:top-[30px] lg:bottom-auto lg:right-[30px]'} textPosition={'lg:bottom-8 lg:left-6 lg:top-auto'} text={'Аксессуары для смарт часов'} src={'/mobile-images/categories/smart-watch.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Кабели и ЗУ'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/cables.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Разное'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/other-products.png'}/>
        </div>
      </div>
    </section>

    <div className="container py-20">
      <div>
        <SectionTitleUI title={'Распродажа'} isBorder={true} href={'#'}/>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8">
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
      </div>
    </div>
    
    
    </>
  )
}
