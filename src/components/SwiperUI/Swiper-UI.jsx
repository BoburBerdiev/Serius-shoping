import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation,  } from 'swiper/modules';
import { CardUI } from '..';

const SwiperUI =({idSwiper, productsArr}) => {
  return (
    <>
     	<Swiper
            id={idSwiper}
            autoplay={{
                delay: 5000,
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
            loop={"true"}
            navigation={true}
            modules={[Navigation]}
            className="w-full mySwiper "
          >
            {productsArr?.map((product, ind) => (
              <SwiperSlide key={ind}>
                <CardUI title={product.title} price={product.price} imageArr={product.imageArr} />
              </SwiperSlide>
            ))}
          </Swiper>
    </>
  );
}
export default SwiperUI