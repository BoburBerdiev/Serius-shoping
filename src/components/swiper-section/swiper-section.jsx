import {Swiper, SwiperSlide} from "swiper/react";
import { Mousewheel, Navigation, Pagination} from 'swiper/modules'
import {ImageUI} from "@/components";

const SwiperSection = () => {
    return (
        <div className={'h-screen w-full '}>
            <Swiper
                className={'h-full mySwiper'}
                spaceBetween={10}
                slidesPerView={1}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Pagination,Mousewheel,Navigation]}

            >
                <SwiperSlide  className={'w-full h-full relative'}>
                  <ImageUI alt={'swiper image'} src={'/mega.jpg'} imgStyle={'object-cover object-center'}/>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full relative'}>
                    <ImageUI alt={'swiper image'} src={'/mega.jpg'} imgStyle={'object-cover object-center'}/>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full relative'}>
                    <ImageUI alt={'swiper image'} src={'/mega.jpg'} imgStyle={'object-cover object-center'}/>
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full relative'}>
                    <ImageUI alt={'swiper image'} src={'/mega.jpg'} imgStyle={'object-cover object-center'}/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwiperSection;