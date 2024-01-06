import { CardUl } from "@/components";


export default function Home() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8 py-20">
        <CardUl src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} sale={'65 000 сум'} price={'85 000 сум'}/>
        <CardUl src={'/L9-Max-PC.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} sale={'65 000 сум'} price={'85 000 сум'}/>
        <CardUl src={'/L9-Max-PC.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} sale={'65 000 сум'} price={'85 000 сум'}/>
        <CardUl src={'/L9-Max-PC.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} sale={'65 000 сум'} price={'85 000 сум'}/>
        <CardUl src={'/L9-Max-PC.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} sale={'65 000 сум'} price={'85 000 сум'}/>
      </div>
    </div>
    
  )
}
