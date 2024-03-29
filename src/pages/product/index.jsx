import {
    BreadcrumbUI,
    SearchBrand,
    CardUI,
    FilterPrice,
    SectionTitleUI,
    SectionUI,
    CatalogItemFilter, StockItemFilter, CatalogNav, ButtonUI
} from "@/components"
import {Fragment, useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    selectAllQuery,
    selectBrand,
    selectCatalog,
    selectSort,
    selectStock,
    selectSubCatalog
} from "@/slice/filterQuery";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {
    selectFilterBrands,
    selectFilterCatalog,
    selectFilterPriceValue,
    selectFilterSubCategory
} from "@/slice/filter";
import {catalogSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";

const Index = () => {
    const {query,sort} = useSelector(state => state.filterQuerySlice)
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState(false)
    const [page, setPage] = useState(1)
    const [productInfinity, setProductInfinity] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const {cardPosition} = useSelector(state => state.CardSlice)
    const {t} = useTranslation();
    const { lang } = useSelector((state) => state.langSlice);

    const {priceDataValue, brands} = useSelector(state => state.filterSlice)

    const {register, resetField, reset, handleSubmit, setValue} = useForm()
    const sideBarHandler = () => {
        setSideBar(prevSideBar => !prevSideBar)
        resetField("sub_catalog")

    }
    const {
        data: productFiltered,
        refetch: productFilteredRefetch,
        isSuccess: productFilteredSuccess,
    } = useQuery(
        "filter",
        () =>
            apiService.getData(
                `products-catalog?${priceDataValue[0] ? `min_price=${priceDataValue[0]}` : ''}${priceDataValue[1] ? `&max_price=${priceDataValue[1]}` : ''}${query}&page=${page}&page_size=8`
            ),
        {
            enabled: false,
        }
    );


    const onSubmit = (data) => {
        if (!data.stock || data.stock?.length === 0) {
            dispatch(selectStock(''))
        } else {
            let stock = data.stock?.length > 1 ? data?.stock[data?.stock.length - 1] : data?.stock[0]

            dispatch(selectStock(Array.isArray(data.stock) ? stock : data.stock))

        }
        setPage(1)
        dispatch(selectAllQuery())
    }
    useEffect(() => {
        if (query !== null && page === 1) {
            productFilteredRefetch()
        }
    }, [query, page]);

    useEffect(() => {
        if (sort){
            dispatch(selectAllQuery())
        }
    }, [sort]);

    useEffect(() => {
        if (productFilteredSuccess) {
            if (page === 1) {
                setProductInfinity([...productFiltered?.results])

                if (productFiltered?.results.length > 0) {
                    setHasMore(true)
                }
            } else {
                setProductInfinity([...productInfinity, ...productFiltered?.results])
            }
            if (!productFiltered?.next) {
                setHasMore(false)
            } else {
                setPage(prop => prop + 1)
                setHasMore(true)
            }
        }
    }, [productFiltered])

    const clearFilter=()=>{
        dispatch(selectFilterCatalog('all'))
        setValue('catalog',"all")
        dispatch(selectFilterSubCategory(null))
        dispatch(selectFilterBrands(null))
        dispatch(selectStock(""))
        dispatch(selectCatalog(""))
        dispatch(selectBrand(""))
        dispatch(selectSubCatalog(""))
        dispatch(selectAllQuery(""))
        dispatch(selectSort(""))
        dispatch(selectFilterPriceValue([0,0]))

    }

    return (
        <>
            <SEO
                ogImage={'/logo.png'}
                title={catalogSEO[lang].title}
                description={catalogSEO[lang].description}
                ogTitle={catalogSEO[lang].ogTitle}
                ogDescription={catalogSEO[lang].ogDescription}
                twitterHandle={catalogSEO[lang].twitterHandle}
            />
            <SectionUI customPadding={'pt-[80px] md:pt-40 pb-10 font-rubik relative '}>
                <div className="space-y-5 md:space-y-[30px]">
                    <BreadcrumbUI/>
                    <SectionTitleUI title={t('home.catalog')} btnText={t('filter.filter')} btnStyle={'lg:hidden'}
                                    onClick={sideBarHandler}/>
                    <div className="grid grid-cols-1 lg:grid-cols-5 relative gap-6 min-h-screen ">
                        <form onSubmit={handleSubmit(onSubmit)}
                              className={`border space-y-4 lg:space-y-[30px] p-4 rounded-lg max-lg:absolute z-40 top-0 left-[-100%] max-lg:h-[100vh] max-lg:w-[30vh] duration-500 bg-white ${sideBar && 'left-[0%]'}`}>
                            <CatalogItemFilter setPage={setPage} resetField={resetField} setValue={setValue}
                                               formname={{...register("catalog")}}/>
                            <StockItemFilter setValue={setValue} formname={{...register("stock")}}/>
                            <SearchBrand formname={{...register("brand")}}/>
                            <FilterPrice/>
                            <div className={'space-y-2'}>

                                <ButtonUI text={t('btn.filter')} type={'submit'}
                                          className={' w-full text-center'} cardBtn={true}/>
                                <ButtonUI text={t('btn.reset')} type={'button'} onClick={clearFilter}
                                          className={' w-full text-center'} textStyle={'text-center'}/>
                            </div>
                        </form>

                        <div className=" w-full relative md:col-span-4">
                            <CatalogNav/>
                            <div className={'h-full'}>
                                {
                                    !productInfinity?.length>0 ?
                                        <div className={'flex  justify-center mt-[20vh] w-full h-full'}>
                                            <span className={'text-base md:text-xl text-[#8A8A8A]'}>
                                                {t('filter.notFound')}
                                            </span>
                                        </div>
                                        :
                            <InfiniteScroll
                                next={productFilteredRefetch}
                                hasMore={hasMore}
                                loader={<div className={'flex w-full justify-center items-center mt-5 mb-3'}><ButtonUI
                                    leftIcon={<AiOutlineLoading3Quarters
                                        className={'animate-spin text-darkBlue '}/>}> </ButtonUI></div>}
                                className={'w-full'}
                                dataLength={productInfinity?.count || []}>
                                <div
                                    className={` ${cardPosition ? 'grid-cols-1 divide-y ' : 'grid-cols-2  md:grid-cols-3 lg:grid-cols-4 '} grid gap-5`}>
                                    {

                                        productInfinity?.map(product => (
                                            <CardUI key={product?.id} imageArr={product?.images}
                                                    slug={`/product/${product?.slug}`}
                                                    title_ru={product?.title_ru}
                                                    title_uz={product?.title_uz}
                                                    rows={cardPosition}
                                                    id={product?.id}
                                                    short_descriptions={product?.short_descriptions}
                                                    price={product?.price} salePrice={product?.sales}
                                            />
                                        ))
                                    }
                                </div>

                            </InfiniteScroll>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </SectionUI>
        </>
    )
}

export default Index