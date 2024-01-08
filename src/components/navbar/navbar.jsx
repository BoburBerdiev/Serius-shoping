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

const navInfo = [
    {
        title:'Чехлы',
        products: [
            {
                product: 'iPhone',
                link: '#',
            },
            {
                product: 'Samsung',
                link: '#,'
            },
            {
                product: 'Xiaomi',
                link: '#'
            },
            {
                product: 'Huawei',
                link: '#',
            },
            {
                product: 'Oppo',
                link: '#'
            },
            {
                product: 'Vivo',
                link: '#',
            },
            {
                product: 'Realmi',
                link:'#',
            },
        ]
    },

    {
        title: 'Гаджеты',
        products: [
            {
                product: 'Флешки',
                link: '#',
            },
            {
                product: 'Детские часы',
                link: '#',
            },
            {
                product: 'Power Bank',
                link: '#',
            },
            {
                product: 'Кольцевые лампы',
                link: '#',
            },
            {
                product: 'Прочие гаджеты',
                link:'#',
            },
        ]
    },

    {
        title: 'Стекла и пленки',
        products: [
            {
                product: 'iPhone',
                link: '#',
            },
            {
                product: 'Samsung',
                link: '#,'
            },
            {
                product: 'Xiaomi',
                link: '#'
            },
            {
                product: 'Huawei',
                link: '#',
            },
            {
                product: 'Oppo',
                link: '#'
            },
            {
                product: 'Vivo',
                link: '#',
            },
            {
                product: 'Realmi',
                link:'#',
            },
            {
                product: 'Nokia',
                link:'#',
            },
            {
                product: 'Asus',
                link:'#',
            },
            {
                product: 'OnePlus',
                link:'#',
            },
            {
                product: 'ZTE',
                link:'#',
            },
            {
                product: 'Стекла для камеры',
                link: '#',
            }
        ]
    },
    {
        title: 'Аудио',
        products: [
            {
                product: 'AUX',
                link: '#',
            },
            {
                product: 'Bluetooth колонки',
                link: '#',
            },
            {
                product: 'Наушники',
                link: '#',
            }
        ]
    },
    {
        title: 'Кабели и ЗУ',
        products: [
            {
                product: 'Кабели',
                link: '#',
            },
            {
                product: 'ЗУ',
                link: '#',
            },
        ]
    },
    {
        title: 'Аксессуары для смарт часов',
        products: [
            {
                product: 'Ремешки',
                link: '#',
            },
            {
                product: 'Стекла и пленки',
                link: '#',
            },
            {
                product: 'Разное',
                link: '#',
            },
        ]
    },
]


const Navbar = () => {
    const [openNav , setOpenNav] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
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
               <div className='flex items-center gap-[18px]'>
                    <Link href="/" className="flex items-center space-x-3 relative w-[98px] h-4">
                        <ImageUI src={'/logo.png'} />
                    </Link>
                    
                    <ButtonUI className={`${openNav && 'bg-darkBlue text-white'} duration-300 max-md:text-base`} leftIcon={!openNav ? <img src='/menu.svg' className='w-4 md:w-6 h-4 md:h-6'/> : <IoClose className='text-white md:text-2xl' />} text={'Каталог'} onClick={(e) => navbarHandler(e)} />
                    <div className={`absolute grid grid-rows-[0fr] duration-[.4s] top-[55px] md:top-[80px] w-full h-[90vh] left-0 z-50 ${openNav && 'grid-rows-[1fr]'}`}>
                        <div className={`container overflow-hidden flex items-start flex-wrap gap-x-2 lg:gap-x-7 bg-white ${openNav && 'overflow-scroll pb-14'}`}>
                        {
                            navInfo.map((item, index) => (
                                <ul className='text-darkBlue pt-5 lg:py-10' key={index}>
                                    <h3 className='lg:text-lg font-medium pb-[10px]'>{item.title}</h3>
                                    {item.products.map((product, productIndex) => (
                                        <li className='relative group z-50 pb-2 text-[#8A8A8A] duration-300 hover:text-darkBlue' key={productIndex}>
                                            <a href={product.link} className='flex items-center justify-between gap-5 max-md:text-sm'>
                                                {product.product}
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
                            <input id='search' name='search' type="search" maxLength={50} className='bg-transparent focus:outline-none w-full' placeholder='Поиск товаров ' />
                        </div>
                    </div>
                    <label onClick={(e) => searchHandler(e)} for='search' className='md:h-full h-10 w-10 md:w-12 md:absolute top-0 right-0 bg-darkBlue rounded-[10px] cursor-pointer flex items-center justify-center text-white md:text-2xl'>
                        <IoIosSearch />
                    </label>
                </div>
                <div className='flex items-center gap-[18px] max-md:hidden'>
                    <a href='#' className='flex flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500'>
                        <LuShoppingBag className='text-xl' />
                        Корзина
                    </a>
                    <a href='#' className='flex flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500'>
                        <FiPhone className='text-xl' />
                        Контакты
                    </a>
                </div>
               
           </div>
       </nav>
   )
};

export default Navbar;