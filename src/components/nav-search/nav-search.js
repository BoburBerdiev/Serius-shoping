import React, {useRef, useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import SearchCardUI from "@/components/search-card/search-card-UI";
import {useTranslation} from "react-i18next";

const NavSearch = () => {
    const {t}=useTranslation()
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const searchInputRef = useRef(null);
    const [isDelayActive, setIsDelayActive] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchHandler = (e) => {
        e.stopPropagation();
        setIsSearchBarOpen((prevstate) => !prevstate);
        if (!isSearchBarOpen) {
            searchInputRef.current.focus();
        }
    };
    const handleInputClick = (e) => {
        e.stopPropagation();
    };
    const handleSearchFocus = () => {
        setIsSearchBarOpen(true);
        setIsSearchFocused(true);
        setIsDelayActive(false);
    };
    const handleSearchBlur = () => {
        setIsDelayActive(true);
        setTimeout(() => {
            setIsSearchFocused(false);
            setIsSearchBarOpen(false);
            setIsDelayActive(false);
        }, 100);
    };





    return (
        <div className='md:relative md:flex-1 md:bg-[#F5F5F5] md:py-[14px] md:px-[30px] rounded-[10px]'>
            <div
                className={`max-md:absolute top-14 max-md:grid duration-500 grid-rows-[0fr] ${isSearchBarOpen && 'grid-rows-[1fr] max-md:py-5'} left-0 bg-[#f5f5f5] w-full z-50 max-md:px-5 rounded-[10px]`}>
                <div className='overflow-hidden'>
                    <input ref={searchInputRef} onFocus={handleSearchFocus} onBlur={handleSearchBlur}
                           onClick={handleInputClick} id='search' name='search' type="search" maxLength={50}
                           className='bg-transparent focus:outline-none w-full' placeholder={t('navbar.input')}/>
                </div>
            </div>
            <label onBlur={handleSearchBlur} onClick={(e) => {
                searchHandler(e);
                e.preventDefault()
            }} htmlFor='search'
                   className='md:h-full h-10 w-10 md:w-12 md:absolute top-0 right-0 bg-darkBlue max-md:rounded-[10px] rounded-r-[10px] cursor-pointer flex items-center justify-center text-white md:text-2xl'>
                <IoIosSearch/>
            </label>
            <div
                className={`${isSearchFocused ? 'block' : 'hidden'} duration-500 absolute w-full md:max-lg:w-[200%] z-50 top-[115px] md:top-14 md:left-[50%] lg:left-0 right-0 md:max-lg:translate-x-[-50%] bg-white rounded-xl overflow-hidden pb-2`}>
                <SearchCardUI href={'/product'} price={'150000 сум'}/>
                <SearchCardUI href={'#'} sale={'120000 сум'} price={'150000 сум'}/>
                <SearchCardUI href={'#'} sale={'120000 сум'} price={'150000 сум'}/>
                <SearchCardUI href={'#'} price={'150000 сум'}/>
                <SearchCardUI href={'#'} sale={'120000 сум'} price={'150000 сум'}/>

            </div>
        </div>
    );
};

export default NavSearch;