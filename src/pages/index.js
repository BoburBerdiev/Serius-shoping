import { CardUI } from "@/components";


export default function Home() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8 py-20">
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'} percent={'-25%'} salePrice={'85 000 сум'}/>
        <CardUI src={'/Card.png'} title={'Чехол для iPhone 11 Pro Simply TPU'} price={'65 000 сум'}  salePrice={'85 000 сум'}/>
       
      </div>
    </div>
    
  )
}
