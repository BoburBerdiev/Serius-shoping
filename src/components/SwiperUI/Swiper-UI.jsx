import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation,  } from 'swiper/modules';
import { CardUI } from '..';
import {GrNext, GrPrevious} from "react-icons/gr";
import {useSelector} from "react-redux";

const SwiperUI =({idSwiper, productsArr}) => {
    const { lang } = useSelector((state) => state.langSlice);

  return (
    <div className='card-ui relative'>
        <Swiper
            id={idSwiper}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: ".my-navigation-next",
                prevEl: ".my-navigation-prev",
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            loop={true}
            modules={[Navigation]}
            className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
        >
            {productsArr?.map(product => (
                <SwiperSlide className={'h-full '} key={product?.id}>
                    <CardUI  title_ru={product?.title_ru} title_uz={product?.title_uz}  price={product?.price} salePrice={product?.sales} imageArr={product?.images} slug={product?.slug}/>
                </SwiperSlide>
            ))}
                <div className="absolute top-[50%] translate-y-[-50%] -left-0  cursor-pointer  my-navigation-prev z-10 p-1.5 bg-darkBlue text-white rounded-full">
                    <GrPrevious className="text-sm"/>
                </div>

                <div className=" absolute top-[50%] translate-y-[-50%] right-0 cursor-pointer  my-navigation-next z-10 p-1.5 bg-darkBlue text-white rounded-full">
                    <GrNext className="text-sm"/>
                </div>
        </Swiper>
    </div>
  );
}
export default SwiperUI