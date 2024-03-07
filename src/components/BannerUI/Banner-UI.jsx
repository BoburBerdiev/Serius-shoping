import { ImageUI } from '..'
import {Swiper, SwiperSlide} from "swiper/react";
import lang from "@/slice/lang";
import {useDispatch} from "react-redux";
import {selectBrand, selectCatalog, selectStock, selectSubCatalog} from "@/slice/filterQuery";
import {useRouter} from "next/router";
import { Autoplay } from 'swiper/modules';
import {selectFilterSubCategory} from "@/slice/filter";
const BannerUI = ({banners, height}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSelectBanner = (banner) => {

        if(banner?.product) {
            router.push(`/product/${banner?.product}`)
            return
        }
        if(banner?.brand) {
            dispatch(selectBrand(banner?.brand?.title_uz))
        }else if(banner?.category) {
            dispatch(selectCatalog(banner?.category?.title_uz))
        }else if(banner?.stock?.stock_type) {
            dispatch(selectStock(banner?.stock?.stock_type))
        }else if(banner?.sub_category) {
            let subTitleSend = {
                title: banner?.sub_category?.category.title_uz,
                subTitle: banner.sub_category.title_uz
            }
            dispatch(selectFilterSubCategory(subTitleSend))
            dispatch(selectCatalog(subTitleSend?.title))
            dispatch(selectSubCatalog(subTitleSend?.subTitle))
            dispatch(selectSubCatalog(banner?.sub_category?.title_uz))
        }
        router.push(`/product`)

    }

  return (
    <div className={`relative w-full ${height}`}>
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            className="w-full mySwiper h-full flex items-center justify-center cursor-pointer overflow-auto"
        >
            {
                banners?.map(banner => (
                    banner?.id &&
                    <SwiperSlide className={'h-full relative '} key={banner?.id} onClick={() =>handleSelectBanner(banner)}>
                        {
                            lang === 'ru' ?
                                <>
                        <ImageUI card={false} src={banner?.web_image_ru} alt={'banner'} imgStyle={'object-cover md:block'}/>
                        <ImageUI card={false} src={banner?.rsp_image_ru} alt={'banner'} imgStyle={'object-cover md:hidden'}/>
                                </>
                                :
                                <>
                        <ImageUI card={false} src={banner?.web_image_uz} alt={'banner'} imgStyle={'object-cover md:block'}/>
                        <ImageUI card={false} src={banner?.rsp_image_ru} alt={'banner'} imgStyle={'object-cover md:hidden'}/>
                                </>

                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default BannerUI