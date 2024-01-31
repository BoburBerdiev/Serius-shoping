import {useEffect, useRef} from 'react'
import Link from "next/link";
import {ButtonUI, ImageUI, NavSearch} from "@/components";
import {useState} from "react";
import MiniNavbar from "../mini-navbar/mini-navbar";
import {IoIosSearch} from "react-icons/io";
import {LuShoppingBag} from "react-icons/lu";
import {FiPhone} from "react-icons/fi";
import {IoClose} from "react-icons/io5";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useTranslation} from "react-i18next";
import SearchCardUI from '../search-card/search-card-UI';
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {selectFilterBrands, selectFilterCatalog, selectFilterPriceValue, selectFilterSubCategory} from "@/slice/filter";
import {useRouter} from "next/router";
import {selectAllQuery, selectBrand, selectCatalog, selectStock, selectSubCatalog} from "@/slice/filterQuery";
import {BiCategoryAlt} from "react-icons/bi";


const Navbar = ({catalog}) => {
    const {t} = useTranslation();
    const {lang} = useSelector((state) => state.langSlice);
    const [openNav, setOpenNav] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const {allCount} = useSelector(state => state.basketSlice)

    const navbarHandler = (e) => {
        e.stopPropagation()
        setOpenNav(prevstate => !prevstate)
    }



    useEffect(() => {
        const path=router.asPath.split('/')
        if (path[0]!=='product'&&path[1]!=='product'){
            dispatch(selectStock(""))
            dispatch(selectCatalog(""))
            dispatch(selectBrand(""))
            dispatch(selectSubCatalog(""))
            dispatch(selectAllQuery(null))
            dispatch(selectFilterPriceValue([0,0]))

            dispatch(selectFilterSubCategory(null))
        }
    }, [router.asPath]);

    useEffect(() => {
        const handleCLoseNav = () => {
            setOpenNav(false)
        }
        window.addEventListener('click', handleCLoseNav)

        return () => {
            window.removeEventListener('click', handleCLoseNav)
        }
    }, [openNav])

    const filterSubCatalog = (item) => {
        let subTitleSend = {
            subTitle: item.title_uz,
            title: item.categories.title_uz
        }
        dispatch(selectFilterSubCategory(subTitleSend))
        dispatch(selectCatalog(subTitleSend?.title))
        dispatch(selectSubCatalog(subTitleSend?.subTitle))
        dispatch(selectBrand(""))
        dispatch(selectFilterPriceValue([0,0]))

        dispatch(selectStock(""))

        router.push('/product')
    }


    return (
        <nav className="bg-white fixed w-[100%] z-50 top-0 start-0 border-b border-gray-200 font-rubik">
            <MiniNavbar/>
            <div
                className="container relative flex flex-wrap items-center justify-between py-2 md:py-4 gap-5 md:gap-x-10">
                <div className='flex items-center gap-[18px] max-md:justify-between max-md:flex-1'>
                    <Link href="/"
                          className="flex flex-shrink-0 items-center space-x-3 relative w-[98px] h-10 max-md:order-2 max-md:mx-auto">
                        <ImageUI src={'/logo.png'} alt={'Sirus'} imgStyle={'object-contain'}/>
                    </Link>

                    <ButtonUI respText={true} className={`${openNav && 'bg-darkBlue text-white'} flex-shrink-0 duration-300 max-md:text-base`}
                              leftIcon={!openNav ? <BiCategoryAlt  className='w-4 md:w-6 h-4 md:h-6'/>  :
                                  <IoClose className='text-white md:text-2xl'/>} text={t('navbar.catalog')}
                              onClick={(e) => navbarHandler(e)}/>
                    <div
                        className={`absolute grid grid-rows-[0fr] duration-[.4s] top-[55px] md:top-[80px] w-full left-0 z-50 ${openNav && 'grid-rows-[1fr] h-[90vh]'}`}>
                        <div
                            className={`container overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white overscroll-y-auto ${openNav && 'overflow-scroll pb-14'}`}>
                            {
                                catalog?.map(item => (
                                    item?.sub_categories.length > 0 &&
                                    <ul className='text-darkBlue pt-5 lg:py-10' key={item?.id}>
                                        <h3 className='lg:text-lg font-medium pb-[10px]'>{lang === 'ru' ? item?.title_ru : item?.title_uz}</h3>
                                        {item?.sub_categories?.map(product => (
                                            <li className='relative group z-50 pb-2 text-[#8A8A8A] duration-300 hover:text-darkBlue'
                                                key={product?.id}>
                                                <button onClick={() => filterSubCatalog(product)}
                                                        className='flex text-wrap break-words items-center justify-between text-left gap-5 max-md:text-sm whitespace-nowrap'>
                                                    {lang === 'ru' ? product?.title_ru : product?.title_uz}
                                                    <div
                                                        className='text-white text-xl duration-300 group-hover:text-darkBlue'>
                                                        <MdOutlineKeyboardArrowRight/>
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <NavSearch/>
                <div className='flex items-center gap-[18px] max-md:hidden'>
                    <Link href='/order'
                          className='flex relative flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500 group'>
                        <div className={'relative'}>
                        <LuShoppingBag className='text-xl'/>
                        <span
                            className={'text-[10px] absolute group-hover:bg-slate-500 -top-2 -right-1 py-[3px] px-[4px] bg-darkBlue text-white rounded-full'}>{allCount}</span>
                        </div>
                        {t('navbar.basket')}
                    </Link>
                    <Link href='/contact'
                          className='flex flex-col items-center justify-center text-darkBlue duration-300 hover:text-slate-500'>
                        <FiPhone className='text-xl'/>
                        {t('navbar.contact')}
                    </Link>
                </div>

            </div>
        </nav>
    )
};

export default Navbar;