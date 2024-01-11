import { IoClose } from "react-icons/io5";
import { ImageUI } from '..'

const CartProductUI = ({src, title,price, salePrice}) => {
  return (
    <div className='flex justify-between w-full font-rubik max-sm:flex-col items-center gap-2 sm:gap-0 shop-cart relative py-5 sm:py-0'>
      <div className="flex items-center w-full sm:w-auto gap-3 ">
        <div className='h-20 w-20 xl:w-24 xl:h-24 relative'>
          <ImageUI src={src} imgStyle={'object-cover'}/>
        </div>
        <p className='line-clamp-2	text-sm  md:text-base max-w-[150px] xl:max-w-[280px]'>{title}</p>
        <div className="relative ">
          {salePrice && 
             <h3 className=" line-through text-currentGrey text-xs lg:text-sm absolute -bottom-4 lg:-bottom-5 ">{salePrice}сум</h3>
          }   
          <h4 className='lg:text-lg '>{price}сум</h4>
        </div>
      </div>
       <div className="flex  items-center gap-5 justify-end w-full sm:w-auto">
        <div className='flex px-3 py-1.5 bg-[#F5F5F5] rounded-lg order-2 sm:order-1'>
          <button className="cursor-pointer outline-none">-
          </button>
          <input type="number" className="outline-none w-[70px] appearance-none  text-center text-md bg-[#F5F5F5]" value="100"/>
          <button className="rounded-r cursor-pointer">+
          </button>
        </div>
        
      </div>
      <button className="absolute top-0 right-0 sm:static"><IoClose className="w-6 h-6 text-[#8A8A8A] cursor-pointer" /></button>
    </div>
  )
}

export default CartProductUI