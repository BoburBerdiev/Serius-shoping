import { IoClose } from "react-icons/io5";
import { ImageUI } from '..'
import {useDispatch, useSelector} from "react-redux";
import {decrementCount, incrementCount,totalAllPrice, deleteOrderAction,  } from "@/slice/basket";
import {GoPlus} from "react-icons/go";
import {HiOutlineMinusSmall} from "react-icons/hi2";
import {priceView} from "@/helper";

const ShopCartUI = ({product}) => {
const dispatch =     useDispatch()

    const { lang } = useSelector((state) => state.langSlice);
    const handlePlus = () => {
        dispatch(incrementCount(product))
        dispatch(totalAllPrice())
    }
    const handleMinus = () => {
        dispatch(decrementCount(product))
        dispatch(totalAllPrice())
    }

    const removeItem = (btn) => {
        dispatch(deleteOrderAction(product));
        dispatch(totalAllPrice())
    };
  return (
    <div className='flex justify-between w-full font-rubik max-sm:flex-col items-center gap-2 sm:gap-0 shop-cart relative py-5 sm:py-0'>
      <div className="flex items-center w-full sm:w-auto gap-3 ">
        <div className='h-20 w-20 xl:w-24 xl:h-24 relative'>
            {
                product?.image &&
                <ImageUI src={product?.image} imgStyle={'object-cover'} alt={ product?.title_ru}/>
            }
        </div>
        <p className='line-clamp-2	text-sm  md:text-base max-w-[150px] xl:max-w-[280px]'>{lang === 'ru' ? product?.title_ru : product?.title_uz}</p>
        <div className="relative ">
          {product?.salePrice &&
             <h3 className=" line-through text-currentGrey text-xs lg:text-sm absolute -bottom-4 lg:-bottom-5 ">{product?.salePrice?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')}сум</h3>
          }   
          <h4 className='lg:text-lg '>{priceView(product?.price)}сум</h4>
        </div>
      </div>
       <div className="flex  items-center gap-5 justify-end w-full sm:w-auto">
        <div className='flex px-3 py-1.5 bg-[#F5F5F5] rounded-lg order-2 sm:order-1'>
          <button onClick={handleMinus} className="cursor-pointer outline-none p-2">
              <HiOutlineMinusSmall />
          </button>
          <p   className="outline-none w-[70px] flex justify-center items-center  text-center text-md bg-[#F5F5F5]">
              {product?.count}
          </p>
          <button onClick={handlePlus} className="rounded-r cursor-pointer p-2">
              <GoPlus />
          </button>
        </div>
        
      </div>
      <button className="absolute top-0 right-0 sm:static"><IoClose  onClick={() => removeItem(product)} className="w-6 h-6 text-[#8A8A8A] cursor-pointer" /></button>
    </div>
  )
}

export default ShopCartUI