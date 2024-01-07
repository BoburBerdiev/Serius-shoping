import { CardUI, CategoryCardUI } from "@/components";


export default function Home() {
  return (
    <>
    <div className="container py-20">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 md:gap-8 py-20">
        <CardUI src={'/Card.png'} rows={true} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} rows={true} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} rows={true} title={'Чехол для iPhone 11 Pro Simply TPU '} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
      </div>
    </div>
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCardUI grid={'md:row-span-2 md:h-full'} text={'Чехлы'} link={'#'} textPosition={'md:top-10 md:left-10'} iconPosition={''} src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI src={'/mobile-images/categories/phone-case.png'}/>

        </div>
      </div>
    </section>
    
    </>
  )
}
