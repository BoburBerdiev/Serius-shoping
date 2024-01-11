import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination, Autoplay } from "swiper/modules";

import { ButtonUI, ImageUI } from "../index"
import { LuShoppingBag } from "react-icons/lu";

const CardUI = ({imageArr, title, price, salePrice, rows}) => {
  return (
    <div className={`flex ${rows ? 'items-center' : 'flex-col  h-full'}  gap-3.5 md:gap-6 card-ui`}>
      <div className={`${rows ? 'w-[40%]' : 'w-full'}`}>
                  <Swiper
                      id={"mySwiper1"}
                      slidesPerView={1}
                      loop={true}
                      pagination={{clickable: true}}
                      navigation={false}
                      modules={[ Pagination]}
                      className={` mySwiper w-full `}
                  >
                      {imageArr?.map((product) => (
                          <SwiperSlide key={product.id} className="h-full "  >

                              <div className={`w-full relative ${rows ? 'h-[180px] md:h-[240px] lg:h-[260px] ' : 'h-[220px] md:h-[270px] lg:h-[310px]'} overflow-hidden rounded-lg`}>
                                  <ImageUI src={product.image} alt={product.alt} imgStyle={'object-cover'}/>

                              </div>
                          </SwiperSlide>
                          ))}
                  </Swiper>
              {
                  salePrice && <span
                      className="py-1 px-2 bg-currentRed absolute text-white text-xs md:text-sm font-rubik font-medium rounded-lg top-3 right-3 z-10  ">Sale</span>
              }
      </div>
      <div className={`gap-y-4 flex  flex-col  ${rows ? 'w-1/2 justify-center' : 'w-full justify-between h-full'}`}>
      <div className="space-y-3 lg:space-y-[18px]">
        <h5 className="font-rubik text-sm  md:text-lg break-all line-clamp-2 md:line-clamp-2">
          { title }
        </h5>
        <div className="flex items-end gap-3 ">
          <p className={`font-rubik font-medium md:text-lg lg:text-xl ${salePrice ? 'text-currentRed' : 'text-currentBlue'}`}>{price} </p>
          {
            salePrice && <span className="text-currentGrey line-through text-xs md:text-sm lg:text-base">{salePrice}</span>
          }
        </div>
      </div>
      <div className="flex  gap-2.5 justify-between md:pr-3">
        <ButtonUI className={'border-currentRed'} leftIcon={<LuShoppingBag className="md:h-[22px] text-currentRed md:w-[22px] "/>}/>
        <ButtonUI href={'#'} text={'Подробнее'} cardBtn={true} />
      </div>
      </div>
    </div>
  )
}

export default CardUI