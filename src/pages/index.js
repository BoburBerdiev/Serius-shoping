import { AddCardUI, BannerUI, ButtonUI, CardUI, CategoryCardUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI } from "@/components";
import SEO from '@/SEO/SEO'
import {index} from '@/SEO/SEO.config'
import axios from "axios";
import {Fragment} from "react";
export default function Home({newProduct}) {
  return (
    <>
      {/*<SEO*/}
      {/*    ogImage={'/evolution.png'}*/}
      {/*    title={index[lang].title}*/}
      {/*    description={index[lang].description}*/}
      {/*    ogTitle={index[lang].ogTitle}*/}
      {/*    ogDescription={index[lang].ogDescription}*/}
      {/*    twitterHandle={index[lang].twitterHandle}*/}
      {/*/>*/}
    <header className="w-full h-screen bg-darkBlue">
      <div className="container h-full pt-40 grid grid-cols-1 md:grid-cols-2 text-white items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-md:text-center font-superaGothic max-w-[600px]">Идеальный магазин мобильных аксессуаров</h2>
        </div>
        <div className="w-full h-full relative">
          <ImageUI src={'/phone.png'} imgStyle={'object-contain'}/>
        </div>
      </div>
    </header>
    <SectionUI customPadding={'py-10 md:pt-20'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <CategoryCardUI grid={'md:row-span-2 md:h-full lg:col-span-3'} text={'Чехлы'} link={'#'} textPosition={'lg:top-10 lg:left-10'} iconPosition={'lg:bottom-auto lg:top-10 lg:right-10'} src={'/mobile-images/categories/phone-case.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Стекла и пленки'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/phone-glass.png'}/>
        <CategoryCardUI grid={'sm:col-span-2 md:col-span-1 lg:col-span-2'} textPosition={'lg:top-[30px] left-7'} text={'Гаджеты'} src={'/mobile-images/categories/gadgets.png'}/>
        <CategoryCardUI grid={'lg:col-span-4'} text={'Аудио'} iconPosition={'lg:top-7 lg:right-11 lg:bottom-auto'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/audio.png'}/>
        <CategoryCardUI grid={'lg:col-span-3'} iconPosition={'lg:top-[30px] lg:bottom-auto lg:right-[30px]'} textPosition={'lg:bottom-8 lg:left-6 lg:top-auto'} text={'Аксессуары для смарт часов'} src={'/mobile-images/categories/smart-watch.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Кабели и ЗУ'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/cables.png'}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={'Разное'} textPosition={'lg:top-[30px] left-7'} src={'/mobile-images/categories/other-products.png'}/>
      </div>

    </SectionUI>
    <SectionUI customPadding={'py-10 md:pb-20'}>
      <SectionTitleUI title={'Скидки'} href={'#'}/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px]">
        {
          newProduct?.map(product => (
              <Fragment key={product?.id}>
                <CardUI imageArr={product?.images}
                        slug={product?.slug}
                        title_ru={product?.title_ru}
                        title_uz={product?.title_uz}
                        price={product?.price} salePrice={product?.price}/>
              </Fragment>
          ))
        }
        <AddCardUI src={'/mobile-images/banners/bannerca.png'} alt={''} href={'#'}/>
      </div>
    </SectionUI>
      <div className="container">
        <BannerUI src={'/mobile-images/banners/banner.jpg'} height={'h-[200px] md:h-[300px] overflow-hidden lg:h-[350px] rounded-lg'}/>

      </div>
    <SectionUI customPadding={'py-10 md:pt-20'}>
      <SectionTitleUI title={'Новинки'} href={'#'}/>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8 ">
        {
          newProduct?.map(product => (
              <Fragment key={product?.id}>
                <CardUI imageArr={product?.images}
                        slug={product?.slug}
                        title_ru={product?.title_ru}
                        title_uz={product?.title_uz}
                        price={product?.price} salePrice={product?.price}/>
              </Fragment>
          ))
        }
      </div>
    </SectionUI>
    <SectionUI customPadding={'py-10 md:pb-20'}>
      <ServiceSectionUI/>
    </SectionUI>
    </>
  )
}


export async function getServerSideProps({req, res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [newProduct, socialMedia] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products-catalog?stock=new`),
    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/socials/`)
  ]);

  return {
    props: {
      newProduct: newProduct?.data?.results,
      // socialMedia: socialMedia.data,
    },
  };
}

