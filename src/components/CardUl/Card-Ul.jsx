import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination } from "swiper/modules";
import { ButtonUI, ImageUI, InfoProductUI } from "../index"
import { LuShoppingBag } from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";
import {basketList, totalAllPrice} from "@/slice/basket";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { t } from "i18next";
import { Fragment } from "react";
const CardUI = ({imageArr, title_ru , title_uz, price, salePrice, rows , slug , id, short_descriptions}) => {
    const dispatch = useDispatch()

    const handleAddBag = () => {
        const checkProduct ={
            title_uz: title_uz,
            title_ru: title_ru,
            price:price,
            salePrice:salePrice,  
            image: imageArr[0]?.image,
            id: id,
            count: null,
        }

        dispatch(basketList(checkProduct))
        dispatch(totalAllPrice())
    };
    const { lang } = useSelector((state) => state.langSlice);

    return (
      <>
        <SkeletonTheme>
          <div className={`flex ${rows ? 'items-center' : 'flex-col  h-full'}  gap-3.5 md:gap-6 card-ui relative`}>
            <div className={`${rows ? 'w-[40%] overflow-hidden ' : 'w-full'}`}>
                        <Swiper
                            id={"mySwiper1"}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={{clickable: true}}
                            navigation={false}
                            modules={[ Pagination]}
                            className={` mySwiper w-full `}
                        >
                            {imageArr?.map((product) => (
                                <SwiperSlide key={product.id} className="h-full w-fit"  >

                                  <div className={`relative w-full ${rows ? 'h-[180px] md:h-[240px] lg:h-[260px] ' : 'h-[220px] md:h-[270px] lg:h-[300px]'} overflow-hidden rounded-lg`}>
                                    {
                                      product.image
                                      ?
                                      <ImageUI src={product?.image} alt={title_uz} imgStyle={'object-cover'}/>
                                      :
                                      <Skeleton width={'100%'} height={'100%'} />
                                      }
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
                    {
                        salePrice && <span
                            className={`py-1 px-2 bg-currentRed absolute text-white text-xs md:text-sm font-rubik font-medium rounded-lg top-3 ${rows ? 'left-3' : 'right-3'} z-10  `}>Sale</span>
                    }
            </div>
            <div className={`gap-y-4 flex w-full h-full ${rows ? ' max-md:flex-col justify-between gap-x-5' : 'flex-col justify-between '}`}>
              <div className="space-y-3 lg:space-y-[18px] w-full">
                <h5 className="font-rubik text-sm  md:text-lg break-all line-clamp-2 md:line-clamp-2">
                  { lang ? title_ru : title_uz }
                </h5>
                {
                  rows 
                  ?
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className='font-medium md:text-lg'>{t('product-inner.moreAbout')}</h2>
                    <div>
                        {
                            short_descriptions?.map(item => (
                                <Fragment key={item.id}>
                                    <InfoProductUI title={ lang === 'ru' ? item?.key_ru : item?.key_uz } value={lang === 'ru' ? item?.value_ru : item?.value_uz}
                                    />
                                </Fragment>
                            ))
                        }
                    </div>
                  </div>
                  :
                  <div className={`flex items-end gap-3 `}>
                    <p className={`font-rubik font-medium md:text-lg lg:text-xl ${salePrice ? 'text-currentRed' : 'text-currentBlue'}`}>{price} </p>
                    {
                      salePrice && <span className="text-currentGrey line-through text-xs md:text-sm lg:text-base">{salePrice}</span>
                    }
                  </div>
                }
              </div>
              <div className={`${rows ? 'flex flex-col justify-between' : ''}  gap-2.5 md:pr-3`}>
                {
                  rows
                  &&
                  <div className="max-md:flex items-center gap-3 space-y-3 ">
                    <p className={`font-rubik font-medium md:text-lg lg:text-xl ${salePrice ? 'text-currentRed' : 'text-currentBlue'}`}>{price} </p>
                    {
                      salePrice && <span className="text-currentGrey line-through text-xs md:text-sm lg:text-base">{salePrice}</span>
                    }
                  </div>
                }
                <div className={`flex gap-2.5 ${rows ? '' : 'md;pr-3 justify-between'}`}>
                  <ButtonUI className={'border-currentRed'} onClick={handleAddBag} leftIcon={<LuShoppingBag className="md:h-[22px] text-currentRed md:w-[22px] "/>}/>
                  <ButtonUI href={`${slug}`} text={'Подробнее'} cardBtn={true} />
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </>
  )
}

export default CardUI