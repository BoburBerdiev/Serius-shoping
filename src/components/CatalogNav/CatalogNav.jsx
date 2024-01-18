import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {RiArrowDownSLine, RiArrowUpSLine, RiMenu2Line} from "react-icons/ri";
import {changleOrder} from '@/slice/page';
import {useDispatch, useSelector} from "react-redux";
import {CiGrid41} from "react-icons/ci";
import {RxHamburgerMenu} from "react-icons/rx";
import {changleCardPosition} from "@/slice/cardPosition";

const CatalogNav = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [isSort, setIsSort] = useState(false)
    const {cardPosition} = useSelector(state => state.CardSlice)

    const orderList = [
        {
            title: t('filter.hightestprice'),
            value: '-price',
        },
        {
            title: t('filter.loweprice'),
            value: 'price',
        },
        {
            title:  t('filter.az'),
            value : 'title_ru',
        },
        {
            title:  t('filter.za'),
            value : '-title_ru',
        },
    ]
    const handleSort = (e) => {
        e.stopPropagation()
        setIsSort(!isSort)
    }
    const handleCheckSort = (e) => {
        e.stopPropagation()
        setIsSort(false)
    }
    const handleOrder = (value) => {
        dispatch(changleOrder(value.value))
    }
    useEffect(() => {
        const handleWindow = () => {
            setIsSort(false)
        }
        window.addEventListener('click', handleWindow)
        return () => {
            window.removeEventListener('click', handleWindow)
        }
    }, [isSort]);

    const cardRow = (item) => {
        dispatch(changleCardPosition(item))
    }
    return (
        <div className={'sticky top-[100px] left-0 z-10 bg-white py-5'}>
            <div className="relative w-full flex justify-between items-center">
                <button
                    className="flex items-center justify-between px-4 py-2 gap-3 rounded-[41px] border border-[#efefef]"
                    onClick={(e) => handleSort(e)}
                >
                    <RiMenu2Line className="text-xs xs:text-xl ri-menu-2-line"/>
                    <div className="flex-col items-start hidden xs:flex">
                        <p
                            className="text-[8px] font-bold uppercase tracking-[0.8px] "
                        >
                            {
                                t('filter.sort')
                            }
                        </p>
                        <p
                            className="text-xs font-normal text-[#656565] leading-[16px] "
                        >
                           11
                        </p>
                    </div>
                    <div className="hidden text-lg xs:block ">
                        <div className={`${isSort && 'hidden'}`}>
                            <RiArrowDownSLine/>
                        </div>
                        <div className={`${!isSort && 'hidden'}`}>
                            <RiArrowUpSLine/>
                        </div>
                    </div>
                </button>
                <div
                    className={`mt-4 bg-white drop-shadow-3xl dropdown-shadow rounded-[5px] border border-[#efefef] absolute z-[100] duration-500 left-0 top-7  py-2 divide-y divide-[#efefef] right-0 w-[200px] ${isSort ? '' : 'hidden'}`}
                    onClick={(e) => handleCheckSort(e)}
                >
                    {
                        orderList.map((order, ind) => (
                            <div key={ind} onClick={() => handleOrder(order)}
                                 className="px-3 py-2 cursor-pointer text-xs text-[#656565]  font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
                            >
                                {
                                    order.title
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="flex gap-5 text-xl">
                    <button className={`${cardPosition ? '  text-darkBlue' : 'text-currentGrey'}`} onClick={ () => cardRow('col') }>
                        <RxHamburgerMenu />
                    </button>
                    <button  onClick={ () => cardRow('row') } className={`${cardPosition ? ' text-currentGrey' : 'text-darkBlue'}`}  >
                        <CiGrid41 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogNav;