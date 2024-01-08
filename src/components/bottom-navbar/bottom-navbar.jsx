import { HiMenuAlt1 } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { ButtonUI } from '..'

const BottomNavbar = () => {
  return (
    <div className='w-full h-fit fixed z-40 bottom-0 left-0 right-0 py-1 bg-darkBlue md:hidden'>
      <div className="container flex items-center justify-center gap-10">
        <ButtonUI leftIcon={<HiMenuAlt1 className="text-white text-xl" />} className={'text-sm border-0 p-1 text-white gap-[2px] flex-col'} text={'Меню'} />
        <ButtonUI leftIcon={<LuShoppingBag className='text-2xl font-thin' />} text={'Корзина'} href={'#'} className={'text-sm flex flex-col items-center justify-center text-white duration-300 hover:text-slate-500 gap-[2px]'} />
      </div>
    </div>
  )
}

export default BottomNavbar