import { HiMenuAlt1 } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { ButtonUI } from '..'
import { useEffect, useState } from "react";

const bottomNavInfo = [
  {
    name: 'Скидки',
    link: '#'
  },
  {
    name: 'Новинки',
    link: '#'
  },
  {
    name: 'Акции',
    link: '#'
  },
]

const BottomNavbar = () => {

  const [dropdown, setDropdown] = useState(false)

  const bottomNavbarHandler = (e) => {
    e.stopPropagation()
    setDropdown(prevstate => !prevstate)
}
  
  useEffect(() => {
    const handleCloseModal=()=>{
      setDropdown(false)
    }

    window.addEventListener('click',handleCloseModal)
  
    return () => {
      window.removeEventListener('click',handleCloseModal)
    }
  }, [dropdown])
  return (
    <div className='w-full h-fit fixed z-40 bottom-0 left-0 right-0 bg-darkBlue md:hidden'>
      <div className="bg-darkBlue relative z-50 py-1">
        <div className="container flex items-center justify-center gap-10">
          <ButtonUI leftIcon={<HiMenuAlt1 className="text-white text-xl" />} onClick={(e) => bottomNavbarHandler(e)} className={'text-sm border-0 p-1 text-white gap-[2px] flex-col'} text={'Меню'} />
          <ButtonUI leftIcon={<LuShoppingBag className='text-2xl font-thin' />} text={'Корзина'} href={'#'} className={'text-sm flex flex-col items-center justify-center text-white duration-300 hover:text-slate-500 gap-[2px]'} />
        </div>
      </div>
      <div className={`absolute z-40 bottom-[-200px] left-0 right-0 w-full duration-300 text-center ${dropdown && 'bottom-[100%]'}`}>
        <div className="bg-darkBlue py-3 space-y-3">
          <div className="w-10 h-[6px] rounded-full bg-slate-600 mx-auto"></div>
          <ul className="flex flex-col items-center gap-3 text-white lg:gap-10 max-md:text-sm lg:text-lg font-medium">
            {
              bottomNavInfo.map(item => (
                <li key={item.name} className="w-full">
                  <a href={item.link} className="text-white w-full block">
                    {item.name}
                  </a>
                </li>
              ))
            }
          </ul>
          <a href='#' className='flex flex-col items-center justify-center text-white'>
              Контакты
          </a>
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar