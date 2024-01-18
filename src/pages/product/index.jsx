import {
    BreadcrumbUI,
    SearchBrand,
    CardUI,
    FilterPrice,
    SectionTitleUI,
    SectionUI,
    CatalogItemFilter, StockItemFilter, CatalogNav
} from "@/components"
import {Fragment, useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector} from "react-redux";
import {data} from "autoprefixer";

const Index = () => {
    const [filterQuery, setFilterQuery] = useState(null)
    const [sideBar, setSideBar] = useState(false)
    const [page , setPage] = useState(1)
    const [ productInfinity , setProductInfinity] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const { lang } = useSelector((state) => state.langSlice);
    const {cardPosition} = useSelector(state => state.CardSlice)
const [isChangeCatalog , setIsChangeCatalog] = useState(false)
    const {register, reset, handleSubmit, setValue} = useForm()
    // const [minMaxValue, setMinMaxValue] = useState([0, 0]);
    const {
        data: productFiltered,
        refetch: productFilteredRefetch,
        isSuccess: productFilteredSuccess,
    } = useQuery(
        "filter",
        () =>
            apiService.getData(
                `product-search?${filterQuery}&page=${page}&page_size=3}`
            ),
        {
            enabled: false,
        }
    );
    const onSubmit = (data) => {
        // dispatch(clearFilterAction())
        // ${minMaxValue[0]!==minMax[0] ? `min_price=${minMaxValue[0]}` : ''}${minMaxValue[1]!==minMax[1] ? `&max_price=${minMaxValue[1]}` : ''}${data.gender ? `&gender=${data.gender}` : ''}${data.season ? `&occasion__name=${data.season}` : ''}${data.scent ? `&smell_name=${data.scent}` : ''}
        const queryFilter = `/product-filter?${data.catalog ? `&catalog_name=${data.catalog}` : ''}${data.brand ? `&brand_name=${data.brand}` : ''}${data.stock ? `&brand_name=${data.stock}` : ''}${data.sale ? `&all_products=${data.sale}` : ''}`
        // setPage(1)
        localStorage.setItem('queryFilter', JSON.stringify(data))
        setFilterQuery(queryFilter)
        console.log(queryFilter)
    }

    useEffect(() => {
        reset({...data , brand: ''})
    }, [isChangeCatalog]);
    useEffect(() => {
        productFilteredRefetch()
    }, [filterQuery])
    const sideBarHandler = () => {
        setSideBar(prevSideBar => !prevSideBar)
    }


    useEffect(() => {
        if (productFilteredSuccess) {
            if (page === 1) {

                setProductInfinity([...productFiltered?.results])
                if (productFiltered?.results.length > 0) {
                    setHasMore(true)
                }
            } else {
                setProductInfinity([...productInfinity, ...products?.results])

            }

            if (!productFiltered?.next) {
                setHasMore(false)
            } else {
                setPage(prop => prop + 1)
                setHasMore(true)
            }
        }
    } , [])
    return (
        <>
            <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik relative '}>
                <div className="space-y-5 md:space-y-[30px]">
                    <BreadcrumbUI/>
                    <SectionTitleUI title={'Каталог'} titleNum={'(35)'} btnText={'Filter'} btnStyle={'md:hidden'}
                                    onClick={sideBarHandler}/>
                    <div className="grid grid-cols-1 md:grid-cols-5 relative gap-6 min-h-screen">
                        <form onSubmit={handleSubmit(onSubmit)}
                              className={`border space-y-4 lg:space-y-[30px] p-4 rounded-lg max-md:absolute z-40 top-0 left-[-100%] max-md:h-[100vh] max-md:w-[30vh] duration-500 bg-white ${sideBar && 'left-[0%]'}`}>
                            <CatalogItemFilter setIsChangeCatalog={setIsChangeCatalog} reset={reset} formname={{...register("catalog")}}/>
                            <StockItemFilter formname={{...register("stock")}}/>
                            <SearchBrand formname={{...register("brand")}}/>
                            <FilterPrice/>
                            <button type={'submit'}>send</button>
                        </form>

                        <div className=" w-full relative md:col-span-4">
                            <CatalogNav />
                            <InfiniteScroll
                                next={productFilteredRefetch}
                                hasMore={hasMore}
                                loader={'loading...'}
                                className={'w-full'}
                                dataLength={productInfinity?.count || []}>
                                <div className={` ${cardPosition ? 'grid-cols-1' : 'grid-cols-2  md:grid-cols-3 lg:grid-cols-4 '  } grid gap-5`}>
                                    {
                                        productInfinity?.map(product => (
                                            <Fragment key={product?.id}>
                                                <CardUI imageArr={product?.images}
                                                        slug={product?.slug}
                                                        title_ru={product?.title_ru}
                                                        title_uz={product?.title_uz}
                                                        rows={cardPosition}
                                                        price={product?.price} salePrice={product?.price}/>
                                            </Fragment>
                                        ))
                                    }
                                </div>

                            </InfiniteScroll>

                            {
                                productInfinity?.map(product => (
                                    <Fragment key={product?.id}>
                                        <CardUI imageArr={product?.images}
                                                slug={product?.slug}
                                                title_ru={product?.title_ru}
                                                title_uz={product?.title_uz}
                                                rows={cardPosition}
                                                price={product?.price} salePrice={product?.price}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </SectionUI>
        </>
    )
}

export default Index