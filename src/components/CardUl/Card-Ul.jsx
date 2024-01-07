import { ButtonUI, ImageUI } from "../index"
import { LuShoppingBag } from "react-icons/lu";

const CardUI = ({src, alt, title, price, salePrice, percent, rows}) => {
  return (
    <div className={`flex ${rows ? 'items-center' : 'flex-col  h-full'}  gap-3.5 md:gap-6`}>
      <div className={`${rows ? 'w-[40%]' : 'w-full'}`}>
        <div className={`relative w-full ${rows ? 'h-[200px] md:h-[240px] lg:h-[260px] ' : 'h-[220px] md:h-[270px] lg:h-[310px]'} overflow-hidden rounded-lg`}>
          <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>  
          {
           percent && <span className="py-1 px-2 bg-currentRed absolute text-white text-xs md:text-sm font-rubik font-medium rounded-lg top-3 right-3 z-10  ">Sale</span>
          }
        </div>
      </div>
      <div className={`gap-y-4 flex  flex-col h-full ${rows ? 'w-1/2 justify-center' : 'w-full justify-between'}`}>
      <div className="space-y-3 lg:space-y-[18px]">
        <h5 className="font-rubik md:text-lg break-all">
          { title }
        </h5>
        <div className="flex items-end gap-3 ">
          <p className={`font-rubik font-medium md:text-lg lg:text-xl ${percent ? 'text-currentRed' : 'text-currentBlue'}`}>{price} </p>
          {
            percent && <span className="text-currentGrey line-through text-xs md:text-sm lg:text-base">{salePrice}</span>
          }
        </div>
      </div>
      <div className="flex gap-2.5 justify-between md:pr-3">
        <ButtonUI leftIcon={<LuShoppingBag className="h-[22px] w-[22px]"/>}/>
        <ButtonUI href={'#'} text={'Подробнее'} cardBtn={true}/>
      </div>
      </div>
    </div>
  )
}

export default CardUI