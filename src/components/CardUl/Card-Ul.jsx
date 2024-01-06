import { ButtonUI, ImageUI } from "../index"
import { LuShoppingBag } from "react-icons/lu";

const CardUI = ({src, alt, title, price, salePrice, percent}) => {
  return (
    <div className="flex flex-col h-full justify-between gap-3.5 md:gap-6">
      <div className="space-y-3.5">
        <div className="relative w-full h-[220px] md:h-[270px] lg:h-[310px] overflow-hidden rounded-lg">
          <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>  
          {
           percent && <span className="py-1 px-2 bg-currentRed absolute text-white text-xs md:text-sm font-rubik font-medium rounded-lg top-3 right-3 z-10  ">{percent}</span>
          }
        </div>
        <div className="space-y-3 lg:space-y-[18px]">
          <h5 className="font-rubik md:text-lg ">
            { title }
          </h5>
          <div className="flex items-end gap-3 ">
            <p className={`font-rubik font-medium md:text-lg lg:text-xl ${percent ? 'text-currentRed' : 'text-currentBlue'}`}>{price} </p>
            {
              percent && <span className="text-currentGrey line-through text-xs md:text-sm lg:text-base">{salePrice}</span>
            }
          </div>
          </div>
      </div>
      <div className="flex gap-2.5 justify-between md:pr-3">
        <ButtonUI leftIcon={<LuShoppingBag className="h-[22px] w-[22px]"/>}/>
        <ButtonUI href={'#'} text={'Подробнее'} cardBtn={true}/>
      </div>
    </div>
  )
}

export default CardUI