import React, {useEffect, useRef, useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import SearchCardUI from "@/components/search-card/search-card-UI";
import {useTranslation} from "react-i18next";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import useDebounce from "@/hook/useDebounce";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {useRouter} from "next/router";
import {PageWayRouter} from "@/helper";

const NavSearch = () => {
    const router = useRouter()
    const [slug , setSlug] = useState(null)
    const {t}=useTranslation()
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const searchInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('')
    const debounceInputValue = useDebounce(inputValue, 700)
    const [isShowPanel, setIsShowPanel] = useState(false)

    const {refetch,data, isLoading} = useQuery('search-input', () => apiService.getData(`product-search?search=${debounceInputValue}`),
        {
            enabled:false
        })
    useEffect(()=> {
        let findPage =  PageWayRouter(router.asPath , 'product')
        if(findPage !== 'product') {
            setSlug('product/')
        }else  {
            setSlug('')
        }
    }  , [router.asPath])

    useEffect(() => {
        console.log(debounceInputValue)
        if (debounceInputValue!==""){
            refetch()
        }else{
            setIsShowPanel(false)
        }
    }, [debounceInputValue])

    useEffect(()=>{
        if (data!==undefined){
            setIsShowPanel(true)
        }
    },[data])
    useEffect(()=>{
        window.addEventListener('click',()=>setIsShowPanel(false))

        return ()=>{
            window.removeEventListener('click',()=>setIsShowPanel(false))
        }
    },[isShowPanel])

    console.log(data?.results)

    const onChangeSearch = (e) => {
        const text = e.target.value
        setInputValue(text)
    }

    const searchHandler = (e) => {
        e.stopPropagation();
        setIsSearchBarOpen((prevstate) => !prevstate);
    };


    return (
        <div className='md:relative md:flex-1 md:bg-[#F5F5F5] md:py-[14px] md:px-[30px] rounded-[10px]'>
            <div
                className={`max-md:absolute top-14 max-md:grid duration-500 grid-rows-[0fr] ${isSearchBarOpen && 'grid-rows-[1fr] max-md:py-5'} left-0 bg-[#f5f5f5] w-full z-50 max-md:px-5 rounded-[10px]`}>
                {}
                <div className='overflow-hidden'>
                    <input
                        ref={searchInputRef}
                           onChange={(e) => onChangeSearch(e)}
                           value={inputValue} id='search' name='search' type="search" maxLength={50}
                           className='bg-transparent focus:outline-none w-full' placeholder={t('navbar.input')}/>
                </div>
            </div>
            <label  onClick={(e) => {
                searchHandler(e);
                e.preventDefault()
            }} htmlFor='search'
                   className='md:h-full h-10 w-10 md:w-12 md:absolute top-0 right-0 bg-darkBlue max-md:rounded-[10px] rounded-r-[10px] cursor-pointer flex items-center justify-center text-white md:text-2xl'>
                {
                    isLoading ? <AiOutlineLoading3Quarters />:
                <IoIosSearch/>
                }

            </label>
            <div
                className={`${  isShowPanel
                    ? 'block' : 'hidden'} ${data?.results.length > 4 ? 'overflow-y-scroll h-[300px]' : '' }   duration-500 absolute w-full md:max-lg:w-[200%] z-50 top-[115px] md:top-14 md:left-[50%] lg:left-0 right-0 md:max-lg:translate-x-[-50%] bg-white rounded-xl  pb-2`}>
                {
                    data?.count ?

                    data?.results?.map(product => (
                        <SearchCardUI key={product?.id} image={product?.image?.image} title_ru={product?.title_ru} title_uz={product.title_uz} subtitle_ru={product?.brands?.title_ru} subtitle_uz={product?.brands?.title_uz} href={slug + product?.slug} price={product?.price} sale={product?.salePrice}/>

                    )):
                        <div className={'py-3 text-center text-lg'}>
                            <p>
                                {t('filter.noProduct')}
                            </p>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavSearch;