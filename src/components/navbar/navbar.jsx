import {useEffect} from 'react'
import Link from "next/link";
import {ButtonUI, ImageUI} from "@/components";
import {CiMenuBurger} from "react-icons/ci";
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa";
import MiniNavbar from "../mini-navbar/mini-navbar";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";


const Navbar = () => {
    const { t  } = useTranslation();
    const { lang } = useSelector((state) => state.langSlice);
    const [openNav , setOpenNav] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)


    const { data: catalog } = useQuery("catalog", () =>
        apiService.getData("/categories/")
    );
    const navbarHandler = (e) => {
        e.stopPropagation()
        setOpenNav(prevstate => !prevstate)
    }
    const searchHandler = (e) => {
        e.stopPropagation()
        setOpenSearch(prevstate => !prevstate)
    }
    useEffect(() => {
        const handleCLoseNav = () => {
            setOpenNav(false)
        }
        const closeSearch = () => {
            setOpenSearch(false)
        }

        window.addEventListener('click', handleCLoseNav)

        return () => {
            window.removeEventListener('click', handleCLoseNav)
        }
    }, [openNav, openSearch])

   return (
       <nav className="bg-white fixed w-[100%] z-50 top-0 start-0 border-b border-gray-200 font-rubik">
        <MiniNavbar />
           <div className="container relative flex flex-wrap items-center justify-between py-2 md:py-4 gap-x-10">
               <div className='flex items-center gap-[18px] max-md:justify-between max-md:flex-1'>
                    <Link href="/" className="flex items-center space-x-3 relative w-[98px] h-10 max-md:order-2 max-md:mx-auto">
                        <ImageUI src={'/logo.png'} alt={'Sirus'} imgStyle={'object-contain'}/>
                    </Link>
                    
                    <ButtonUI className={`${openNav && 'bg-darkBlue text-white'} duration-300 max-md:text-base`} leftIcon={!openNav ? <img src='/menu.svg' className='w-4 md:w-6 h-4 md:h-6'/> : <IoClose className='text-white md:text-2xl' />} text={t('navbar.catalog')} onClick={(e) => navbarHandler(e)} />
                    <div className={`absolute grid grid-rows-[0fr] duration-[.4s] top-[55px] md:top-[80px] w-full left-0 z-50 ${openNav && 'grid-rows-[1fr] h-[90vh]'}`}>
                        <div className={`container overflow-hidden flex items-start flex-wrap gap-x-2 lg:gap-x-7 bg-white overscroll-y-auto ${openNav && 'overflow-scroll pb-14'}`}>
                        {
                            catalog?.map(item  => (
                                <ul className='text-darkBlue pt-5 lg:py-10' key={item?.id}>
                                    <h3 className='lg:text-lg font-medium pb-[10px]'>{lang === 'ru' ? item?.title_ru : item?.title_uz}</h3>
                                    {item?.sub_categories?.map(product => (
                                        <li className='relative group z-50 pb-2 text-[#8A8A8A] duration-300 hover:text-darkBlue' key={product?.id}>
                                            <a href={`catalog?${product?.title_uz}`} className='flex items-center justify-between gap-5 max-md:text-sm'>
                                                {lang === 'ru' ? product?.title_ru : product?.title_uz}
                                                <div className='text-white text-xl duration-300 group-hover:text-darkBlue'>
                                                    <MdOutlineKeyboardArrowRight />
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className='md:relative md:flex-1 md:bg-[#F5F5F5] md:py-[14px] md:px-[30px] rounded-[10px]'>
                    <div className={`max-md:absolute top-14 max-md:grid duration-500 grid-rows-[0fr] ${openSearch && 'grid-rows-[1fr] max-md:py-5'} left-0 bg-[#f5f5f5] w-full z-50 max-md:px-5 rounded-[10px]`}>
                        <div className='overflow-hidden'>
                            <input id='search' name='search' type="search" maxLength={50} className='bg-transparent focus:outline-none w-full' placeholder={t('navbar.input')} />
                        </div>
                    </div>
                    <label onClick={(e) => searchHandler(e)} htmlFor='search' className='md:h-full h-10 w-10 md:w-12 md:absolute top-0 right-0 bg-darkBlue rounded-r-[10px] cursor-pointer flex items-center justify-center text-white md:text-2xl'>
                        <IoIosSearch />
                    </label>
                </div>
                <div className='flex items-center gap-[18px] max-md:hidden'>
                    {/* orasini kottalashtrsh kk */}
                    <Link href='/order' className='flex flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500'>
                        <LuShoppingBag className='text-xl' />
                        {t('navbar.basket')}
                    </Link>
                    <Link href='/contact' className='flex flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500'>
                        <FiPhone className='text-xl' />
                        {t('navbar.contact')}
                    </Link>
                </div>
               
           </div>
       </nav>
   )
};

export default Navbar;