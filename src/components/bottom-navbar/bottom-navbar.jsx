import { HiMenuAlt1 } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import {ButtonUI, ImageUI, SelectLang} from '..'
import { useEffect, useState } from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {formatPhoneNumber} from "@/helper";
import {changleLang} from "@/slice/lang";
//
// const bottomNavInfo = [
//   {
//     name: 'Скидки',
//     link: '#'
//   },
//   {
//     name: 'Новинки',
//     link: '#'
//   },
//   {
//     name: 'Акции',
//     link: '#'
//   },
// ]

const BottomNavbar = ({phone}) => {
  const {allCount} = useSelector(state => state.basketSlice)
  const { t , i18n  } = useTranslation();
  const [dropdown, setDropdown] = useState(false)
  const dispatch = useDispatch();

  const bottomNavbarHandler = (e) => {
    e.stopPropagation()
    setDropdown(prevstate => !prevstate)
}
  const handleChangleLang = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(changleLang(lang))
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
    // top radius boladi
    <div className='w-full h-fit fixed z-40 bottom-0 left-0 right-0  bg-darkBlue md:hidden'>
      <div className="bg-darkBlue relative z-50 py-1">
        <div className="container flex items-center justify-center gap-10">
          <ButtonUI leftIcon={<HiMenuAlt1 className="text-white text-xl" />} onClick={(e) => bottomNavbarHandler(e)} className={'text-sm border-0 p-1 text-white gap-[2px] flex-col'} text={t('navbar.menu')} />
          <div className={'relative'}>
             <span
                 className={'text-[10px] absolute group-hover:bg-slate-500 -top-0 right-2.5 py-[3px] px-[4px]  text-darkBlue bg-white rounded-full'}>{allCount}</span>
            <ButtonUI leftIcon={<LuShoppingBag className='text-2xl font-thin'/>} text={t('navbar.basket')} href={'/order'}
                      className={'text-sm flex flex-col items-center justify-center text-white duration-300 hover:text-slate-500 gap-[2px]'}/>
          </div>
        </div>
      </div>
      <div
          className={`absolute z-40 bottom-[-200px] left-0 right-0 w-full duration-300 text-center ${dropdown && 'bottom-[100%]'}`}>
        <div className="bg-darkBlue py-3 space-y-3 rounded-t-[10px] border-t border-white">
          <div className="w-10 h-[6px] rounded-full bg-slate-600 mx-auto"></div>
          <ul className="flex flex-col items-center gap-3 text-white lg:gap-10 max-md:text-sm lg:text-lg font-medium">
            {/*{*/}
            {/*  bottomNavInfo.map(item => (*/}
            {/*    <li key={item.name} className="w-full">*/}
            {/*      <Link href={item.link} className="text-white w-full block">*/}
            {/*        {item.name}*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  ))*/}
            {/*}*/}
          </ul>
          <Link href='/contact' className='flex flex-col items-center justify-center text-white'>
            {t('navbar.contact')}
          </Link>
          <div className={'flex justify-center items-cente r'}>
            <ul className="overflow-hidden rounded-b-xl  text-white text-lg bg-darkBlue">
              <li onClick={() => handleChangleLang(t('ru'))}
                  className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center justify-center gap-1">
                <div className="h-5 w-5 shrink-0 relative">
                  <ImageUI src={'/ru-flag.svg'} alt={'ru'} priority={true}
                           imgStyle={`w-full h-full object-cover rounded-full`}/>
                </div>
                {t('navbar.ru')}
              </li>
              <li onClick={() => handleChangleLang(t('uz'))}
                  className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center justify-center gap-1">
                <div className="h-5 w-5 shrink-0 relative">
                  <ImageUI src={'/uzbekistan.png'} alt={'uz'} priority={true}
                           imgStyle={`w-full h-full object-cover rounded-full`}/>
                </div>
                {t('navbar.uz')}
              </li>
            </ul>
          </div>
          {/*<a href={`tel:${phone}`} className="flex flex-col items-center justify-center text-white">{formatPhoneNumber(phone)}</a>*/}
        </div>
      </div>
    </div>
  )
}

export default BottomNavbar