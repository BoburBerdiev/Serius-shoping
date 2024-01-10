import { BreadcrumbUI, CardUI, Navbar, SectionTitleUI, SectionUI } from "@/components"
const productImage = [
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
const index = () => {
  return (
    <>
    <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik pruduct-inner relative '}>
      <div className="space-y-5 md:space-y-[30px]">
        <BreadcrumbUI/>
        <SectionTitleUI title={'Чехлы для телефонов'} titleNum={'(35)'} />
        <div className="grid grid-cols-5">
          <div>

          </div>
          <div className="col-span-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CardUI imageArr={productImage} src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} salePrice={'85 000 сум'}/>
          <CardUI imageArr={productImage} src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} salePrice={'85 000 сум'}/>
          <CardUI imageArr={productImage} src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} salePrice={'85 000 сум'}/>
          <CardUI imageArr={productImage} src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'5 000 000 сум'} salePrice={'85 000 сум'}/>
          </div>
        </div>
      </div>
    </SectionUI>
    </>
  )
}

export default index