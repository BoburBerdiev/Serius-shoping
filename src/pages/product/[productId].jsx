import {
    BreadcrumbUI,
    ImageUI,
    InfoProductUI,
    PriceCard,
    SectionTitleUI,
    SectionUI,
    SwiperUI
} from '@/components'
import {Fragment, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {basketList ,totalAllPrice } from '@/slice/basket'
import Skeleton , { SkeletonTheme } from "react-loading-skeleton";
import {changleLastProduct} from "@/slice/lastProduct";
import {contactSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";
const ProductDetailed = () => {
    const loading = useState(true)
    const router = useRouter()
    const { t  } = useTranslation();
    const { lang } = useSelector((state) => state.langSlice);
    const { lastProduct } = useSelector((state) => state.lastProductSlice);
    const {productId}=router.query
    const dispatch = useDispatch()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { data: product  , refetch: refetchProduct, isLoading , isSuccess } = useQuery(["products" , productId], () =>
        apiService.getDataByID(  '/products' ,productId) , { enabled: false}
    );


    useEffect(() => {
        let sendProduct = {
            id: product?.id,
            images: product?.images,
            slug: product?.slug,
            title_ru: product?.title_ru,
            title_uz: product?.title_uz,
            price: product?.price,
            salePrice: product?.sales,
        }

      dispatch(changleLastProduct(sendProduct))
    } , [product])


    useEffect(() => {
        if(productId) {
            refetchProduct()
        }
    } ,  [productId])
    const handleAddBag = () => {
        const checkProduct ={
            title_uz: product?.title_uz,
            title_ru: product?.title_ru,
            price:product?.price,
            salePrice:product?.sales,
            image: product?.images[0]?.image,
            id: product?.id,
            count: null,
        }

        dispatch(basketList(checkProduct))
        dispatch(totalAllPrice())
    };


    return (
        <>
            <SEO
                ogImage={product?.images[0]?.image}
                title={lang === 'ru' ? product?.title_ru : product?.title_uz}
                description={ lang === 'ru' ?
                    product?.description_ru :
                    product?.description_uz}
                ogTitle={""}
                ogDescription={lang === 'ru' ?
                    product?.description_ru :
                    product?.description_uz}
                twitterHandle={""}
            />
            <SkeletonTheme baseColor="#e6e5e5" highlightColor="#dfd4c7">
            <SectionUI customPadding={'pt-[80px] md:pt-40 pb-10 font-rubik pruduct-inner relative '}>
                <div className='space-y-5 md:space-y-[30px]'>
                    <BreadcrumbUI pageLink={lang === 'ru' ? product?.title_ru : product?.title_uz}/>
                    <SectionTitleUI isLoading={loading} title={lang === 'ru' ? product?.title_ru : product?.title_uz} isBorder={true}/>
                    <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-16 gap-6 lg:gap-[30px] static'>
                        <div className=' md:col-span-6 '>
                            <div className='w-full aspect-[16/11]  h-full relative flex gap-5 md:gap-[10px]'>
                                {
                                    product?.images &&
                                    <>
                                        <Swiper
                                            spaceBetween={8}
                                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                            modules={[FreeMode,  Thumbs]}
                                            className={ `  mySwiper2 w-[80%] h-full order-2`}
                                        >
                                            {
                                                product?.images?.map(image => (
                                                    <SwiperSlide key={image?.id} className='relative w-full h-full  rounded-lg  overflow-hidden'>
                                                        {
                                                            loading ? 
                                                            <ImageUI card={true} src={image?.image} imgStyle={'object-cover'}
                                                            alt={product?.title_uz}
                                                            />
                                                            :
                                                            <Skeleton width={'100%'} height={'100%'}/>
                                                        }
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={5}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className={`mySwiper w-[50px] md:w-[60px] h-full order-1  `}
                                        >
                                            <div className='flex flex-col '>
                                                {

                                                    product?.images?.map(image => (
                                                        <SwiperSlide key={image?.id} className='relative aspect-square h-auto w-full border rounded-lg  overflow-hidden'>
                                                            <ImageUI card={true} src={image?.image} imgStyle={'object-cover cursor-pointer '} alt={product?.title_uz}/>
                                                        </SwiperSlide>
                                                    ))
                                                }

                                            </div>

                                        </Swiper>
                                    </>
                                }

                            </div>
                        </div>
                        <div className='md:col-span-6 space-y-2.5  text-darkBlue'>
                            {isLoading ?
                              <Skeleton width={"25%"} height="25px"/>
                              :
                              <h2 className='font-medium md:text-lg'>{t('product-inner.moreAbout')}</h2>
                            }

                            {isLoading ?
                              <div>
                                <Skeleton width={"100%"} height="15px"/>
                                <Skeleton width={"100%"} height="15px"/>
                                <Skeleton width={"100%"} height="15px"/>
                                <Skeleton width={"100%"} height="15px"/>
                                <Skeleton width={"100%"} height="15px"/>
                                <Skeleton width={"100%"} height="15px"/>
                              </div>
                              :
                                <div className='space-y-2'>
                                    {
                                        product?.short_descriptions?.map(item => (
                                            <Fragment key={item.id}>
                                                <InfoProductUI title={ lang === 'ru' ? item?.key_ru : item?.key_uz } value={lang === 'ru' ? item?.value_ru : item?.value_uz}/>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                      }

                        </div>
                        <div className='lg:col-span-4 md:col-span-5 '>
                            <PriceCard salePrice={product?.sales} isHave={product?.is_available} price={product?.price} handleAddBag={handleAddBag} isLoading={isLoading} />
                        </div>
                    </div>
                    <div className='grid grid-cols-16 '>
                        <div className='col-span-full md:col-span-12 space-y-2.5'>
                            <div>
                                {
                                    isLoading
                                    ?
                                    <Skeleton width={'25%'} height={'25px'} />
                                    :
                                    <h2 className='font-medium md:text-lg'>{t('product-inner.description')}</h2>
                                }
                            </div>
                            <div>
                                {
                                    isLoading
                                    ?
                                    <div>
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                    </div>
                                    :
                                    <p className='text-justify '>
                                        {
                                            lang === 'ru' ?
                                                product?.description_ru :
                                                product?.description_uz
                                        }
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-16'>
                        <div className='col-span-full lg:col-span-12 space-y-2.5'>
                            <div>
                                {
                                    isLoading
                                    ?
                                    <Skeleton width={'25%'} height={'25px'} />
                                    :
                                    <h2 className='font-medium md:text-lg'>{t('product-inner.about')}</h2>
                                }
                            </div>
                            <div>
                                {
                                    isLoading
                                    ?
                                    <div>
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                        <Skeleton width={'100%'} height={'15px'} />
                                    </div>
                                    :
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10  gap-y-2' >
                                        {
                                            product?.characteristics?.map(item => (
                                                <Fragment key={item?.id}>
                                                    <InfoProductUI title={ lang === 'ru' ? item?.key_ru : item?.key_uz } value={lang === 'ru' ? item?.value_ru : item?.value_uz}/>
                                                </Fragment>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </SectionUI>
            <SectionUI>
                <SectionTitleUI title={t('product-inner.brandProduct')}  btnStyle={'border-0'} />
                <div>
                    <SwiperUI idSwiper={'myswiper2'} productsArr={product?.related_products}/>
                </div>
            </SectionUI>
            <SectionUI customPadding={'py-10 md:pb-20'}>
                <SectionTitleUI title={t('product-inner.likeProduct')}/>
                <SwiperUI idSwiper={'viewedSwiper'} productsArr={lastProduct} />
            </SectionUI>
            </SkeletonTheme>
        </>
    )
}
export default ProductDetailed;
